import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { moment } from 'moment';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedFuncionarioAdicionar } from 'store.js';
import { funcionarioId } from 'store.js';
import { funcionarioDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalFuncionario(props) {
  const [foldFuncionarioAdicionar, setFoldFuncionarioAdicionar] = useAtom(colapsedFuncionarioAdicionar);
  const [selectedFuncionarioId, setSelectedFuncionarioId] = useAtom(funcionarioId);
  const [selectedFuncionarioDataFiltered, setSelectedFuncionarioDataFiltered] = useAtom(funcionarioDataFiltered);

  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [senha, setSenha] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [datanasc, setDataNasc] = useState(null);

  const [funcionarios, setFuncionarios] = useState([]);

  const handleSetFoldFuncionario = () => {
    setFoldFuncionarioAdicionar(!foldFuncionarioAdicionar);
  };

  const handleSubmit = () => {
    axiosInstance
      .post('/funcionario/create', {
        nome: nome,
        telefone: telefone,
        email: email,
        cargo: cargo,
        cpf: cpf,
        data_nasc: datanasc.toISOString(),
        senha: senha,
        root: false,
      })
      .catch((err) => console.log(err));
    setFoldFuncionarioAdicionar(!foldFuncionarioAdicionar);
  };

  return (
    <div className={' inset-0' + foldFuncionarioAdicionar ? 'bg-opacity-40' : ''}>
      {!foldFuncionarioAdicionar ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldFuncionario} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start">Editar funcionario</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                <Input placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Data de nascimento" onChange={(e) => setDataNasc(e)} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Cargo" onChange={(e) => setCargo(e.target.value)} />
              </div>
              <div className="self-end">
                <Button
                  value="Criar funcionário"
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
