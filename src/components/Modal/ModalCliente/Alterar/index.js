import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedClienteAlterar } from 'store.js';
import { clienteId } from 'store.js';
import { clienteDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalCliente(props) {
  const [foldClienteAlterar, setFoldClienteAlterar] = useAtom(colapsedClienteAlterar);

  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);

  const [selectedClienteId, setSelectedClienteId] = useAtom(clienteId);
  const [selectedClienteDataFiltered, setSelectedClienteDataFiltered] = useAtom(clienteDataFiltered);
  const [loading, setLoading] = useState(true);

  const handleSetFoldCliente = () => {
    setFoldClienteAlterar(!foldClienteAlterar);
    setSelectedClienteDataFiltered([]);
  };

  const handleDelete = () => {
    axiosInstance
      .post('/cliente/delete', {
        id: selectedClienteId,
      })
      .catch((err) => console.log(err));
    setSelectedClienteDataFiltered([]);
    setFoldClienteAlterar(!foldClienteAlterar);
  };
  const handleSubmit = () => {
    axiosInstance
      .post('/cliente/update', {
        id: selectedClienteId,
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
      })
      .catch((err) => console.log(err));

    setSelectedClienteDataFiltered([]);

    setFoldClienteAlterar(!foldClienteAlterar);
  };

  useEffect(() => {
    axiosInstance
      .post('/cliente/filter', {
        id: selectedClienteId,
        nome: null,
        cpf: null,
        telefone: null,
      })
      .then((res) => {
        setSelectedClienteDataFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [foldClienteAlterar]);

  return (
    <div className={' inset-0' + foldClienteAlterar ? 'bg-opacity-40' : ''}>
      {!foldClienteAlterar ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldCliente} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start text-black dark:text-dark_white">
              {loading ? <Skeleton /> : 'Editar cliente'}
            </h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="Nome"
                  value={loading ? 'Loading...' : selectedClienteDataFiltered[0].nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <Input
                  placeholder="E-mail"
                  value={loading ? 'Loading...' : selectedClienteDataFiltered[0].email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="CPF"
                  value={loading ? 'Loading...' : selectedClienteDataFiltered[0].cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
                <Input
                  placeholder="Telefone"
                  value={loading ? 'Loading...' : selectedClienteDataFiltered[0].telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>

              <div className="flex flex-row space-x-5 self-end">
                <Button value="Deletar" outlined />
                <Button
                  value="Editar cliente"
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
