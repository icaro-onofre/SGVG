import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedFuncionarioAlterar } from 'store.js';
import { funcionarioId } from 'store.js';
import { funcionarioDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalFuncionario(props) {
  const [foldFuncionarioAlterar, setFoldFuncionarioAlterar] = useAtom(colapsedFuncionarioAlterar);
  const [selectedFuncionarioId, setSelectedFuncionarioId] = useAtom(funcionarioId);
  const [selectedFuncionarioDataFiltered, setSelectedFuncionarioDataFiltered] = useAtom(funcionarioDataFiltered);

  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [senha, setSenha] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [datanasc, setDataNasc] = useState(null);
  const [loading, setLoading] = useState(true);

  const [funcionarios, setFuncionarios] = useState([]);

  const handleSetFoldFuncionario = () => {
    setFoldFuncionarioAlterar(!foldFuncionarioAlterar);
  };

  const handleDelete = () => {
    axiosInstance
      .post('/funcionario/delete', {
        id: selectedFuncionarioId,
      })
      .catch((err) => console.log(err));
    setSelectedFuncionarioDataFiltered([]);
    setFoldFuncionarioAlterar(!foldFuncionarioAlterar);
  };
  const handleSubmit = () => {
    if (!datanasc == null) {
      datanasc = datanasc.toISOString();
    }
    axiosInstance
      .post('/funcionario/update', {
        nome: nome,
        telefone: telefone,
        id: selectedFuncionarioId,
        email: email,
        cargo: cargo,
        cpf: cpf,
        data_nasc: datanasc,
        senha: null,
        root: null,
      })
      .catch((err) => console.log(err));
    setSelectedFuncionarioDataFiltered([]);
    setFoldFuncionarioAlterar(!foldFuncionarioAlterar);
  };

  useEffect(() => {
    axiosInstance
      .post('/funcionario/filter', {
        id: selectedFuncionarioId,
        cargo: null,
        cpf: null,
        data_nasc: null,
        nome: null,
        telefone: null,
        email: null,
        root: null,
      })
      .then((res) => {
        setSelectedFuncionarioDataFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [foldFuncionarioAlterar]);

  return (
    <div className={' inset-0' + foldFuncionarioAlterar ? 'bg-opacity-40' : ''}>
      {!foldFuncionarioAlterar ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldFuncionario} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start text-black dark:text-dark_white">
              {loading ? <Skeleton /> : 'Editar funcionario'}
            </h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="Nome"
                  value={loading ? 'Loading...' : selectedFuncionarioDataFiltered[0].nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <Input
                  placeholder="Telefone"
                  value={loading ? 'Loading...' : selectedFuncionarioDataFiltered[0].telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="E-mail"
                  value={loading ? 'Loading...' : selectedFuncionarioDataFiltered[0].email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="CPF"
                  value={loading ? 'Loading...' : selectedFuncionarioDataFiltered[0].cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Senha" value={loading ? 'Loading...' : selectedFuncionarioDataFiltered[0].senha} />
              </div>
              <div className="flex flex-row space-x-5 ">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      defaultValue={loading ? 'Loading...' : selectedFuncionarioDataFiltered[0].data_nasc}
                      label={loading ? 'Loading...' : 'Data Nasc'}
                      onChange={(e) => setDataNasc(e)}
                    />
                  </DemoContainer>
                </LocalizationProvider>

                <Input
                  placeholder="Cargo"
                  value={loading ? 'Loading...' : selectedFuncionarioDataFiltered[0].cargo}
                  onChange={(e) => setCargo(e.target.value)}
                />
              </div>

              <div className="flex flex-row space-x-5 self-end">
                <Button
                  value="Deletar"
                  outlined
                  onClick={() => {
                    handleDelete();
                  }}
                />

                <Button
                  value="Editar funcionario"
                  onClick={() => {
                    handleSubmit();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
