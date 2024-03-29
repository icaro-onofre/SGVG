import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { moment } from 'moment';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { clienteId, clienteDataFiltered, colapsedClienteAdicionar, colapsedVaga } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalCliente(props) {
  const [foldClienteAdicionar, setFoldClienteAdicionar] = useAtom(colapsedClienteAdicionar);
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);

  const [loading, setLoading] = useState(true);

  const [clientes, setClientes] = useState([]);

  const handleSetFoldCliente = () => {
    setFoldClienteAdicionar(!foldClienteAdicionar);
  };

  const handleSubmit = () => {
    axiosInstance
      .post('/cliente/create', {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
      })
      .catch((err) => console.log(err));

    if (props.agendamento) {
      setFoldClienteAdicionar(!foldClienteAdicionar);
      setFoldVaga(!foldVaga);
    } else {
      setFoldClienteAdicionar(!foldClienteAdicionar);
    }
  };

  return (
    <div className={' inset-0' + foldClienteAdicionar ? 'bg-opacity-40' : ''}>
      {!foldClienteAdicionar ? (
        <div></div>
      ) : (
        <form
          className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in"
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldCliente} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start text-black dark:text-dark_white">Criar cliente</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                <Input placeholder="Tipo" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
                <Input placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
              </div>

              <div className="self-end">
                <Button value="Criar cliente" />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
