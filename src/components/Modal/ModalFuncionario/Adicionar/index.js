import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedFuncionario } from 'store.js';
import { funcionarioId } from 'store.js';
import { funcionarioDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalFuncionario(props) {
  const [foldFuncionario, setFoldFuncionario] = useAtom(colapsedFuncionario);
  const [selectedFuncionarioId, setSelectedFuncionarioId] = useAtom(funcionarioId);
  const [selectedFuncionarioDataFiltered, setSelectedFuncionarioDataFiltered] = useAtom(funcionarioDataFiltered);

  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [senha, setSenha] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [datanasc, setDataNasc] = useState(null);
  const [idade, setIdade] = useState(null);
  const [loading, setLoading] = useState(true);

  const [funcionarios, setFuncionarios] = useState([]);

  const handleSetFoldFuncionario = () => {
    setFoldFuncionario(!foldFuncionario);
  };

  const handleSubmit = () => {
    axiosInstance
      .post('/funcionario/update', {
        nome: nome,
        telefone: telefone,
        id: selectedFuncionarioId,
        email: email,
        cargo: cargo,
        cpf: cpf,
        data_nasc: datanasc,
        idade: null,
        senha: null,
        root: null,
      })
      .catch((err) => console.log(err));
    setSelectedFuncionarioDataFiltered([]);
    setFoldFuncionario(!foldFuncionario);
  };

  useEffect(() => {
    axiosInstance
      .post('/funcionario/filter', {
        id: selectedFuncionarioId,
        cargo: null,
        cpf: null,
        data_nasc: null,
        idade: null,
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
  }, [foldFuncionario]);

  return (
    <div className={' inset-0' + foldFuncionario ? 'bg-opacity-40' : ''}>
      {!foldFuncionario ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldFuncionario} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start">{loading ? <Skeleton /> : 'Editar funcionario'}</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="Nome"
                  onChange={(e) => setNome(e.target.value)}
                />
                <Input
                  placeholder="Telefone"
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="CPF"
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Senha"/>
              </div>
              <div className="flex flex-row space-x-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      label="Data de nascimento"
                      onChange={(e) => setDataNasc(e)}
                    />
                  </DemoContainer>
                </LocalizationProvider>

                <Input
                  placeholder={loading ? 'Loading...' : selectedFuncionarioDataFiltered[0].cargo}
                  onChange={(e) => setCargo(e.target.value)}
                />
              </div>
              <div className="self-end">
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
