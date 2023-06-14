import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVagaAlterar } from 'store.js';
import { vagaId } from 'store.js';
import { vagaDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalVaga(props) {
  const [foldVagaAlterar, setFoldVagaAlterar] = useAtom(colapsedVagaAlterar);
  const [selectedVagaId, setSelectedVagaId] = useAtom(vagaId);
  const [selectedVagaDataFiltered, setSelectedVagaDataFiltered] = useAtom(vagaDataFiltered);

  const [nome, setNome] = useState(null);
  const [preco, setPreco] = useState(null);
  const [setor, setSetor] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [vagaOcupada, setVagaOcupada] = useState(null);
  const [dataLocacao, setDataLocacao] = useState(null);
  const [dataLocacaoFim, setDataLocacaoFim] = useState(null);
  const [clienteId, setClienteId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [vagas, setVagas] = useState([]);

  const handleSetFoldVaga = () => {
    setFoldVagaAlterar(!foldVagaAlterar);
    setSelectedVagaDataFiltered([]);
  };

  const handleDelete = () => {
    axiosInstance
      .post('/vaga/delete', {
        id: selectedVagaId,
      })
      .catch((err) => console.log(err));
    setSelectedVagaDataFiltered([]);
    setFoldVagaAlterar(!foldVagaAlterar);
  };
  const handleSubmit = () => {
    axiosInstance
      .post('/vaga/update', {
        id: selectedVagaId,
        nome: nome,
        setor: setor,
        dataLocacao: dataLocacao,
        dataLocacaoFim: dataLocacaoFim,
        preco: 16.6,
        tipo: tipo,
        vaga_ocupada: vagaOcupada,
      })
      .catch((err) => console.log(err));

    setSelectedVagaDataFiltered([]);

    setFoldVagaAlterar(!foldVagaAlterar);
  };

  useEffect(() => {
    axiosInstance
      .post('/vaga/filter', {
        id: selectedVagaId,
        nome: null,
        clienteId: null,
        dataLocacao: null,
        dataLocacaoFim: null,
        preco: null,
        tipo: null,
        vaga_ocupada: null,
      })
      .then((res) => {
        setSelectedVagaDataFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [foldVagaAlterar]);

  return (
    <div className={' inset-0' + foldVagaAlterar ? 'bg-opacity-40' : ''}>
      {!foldVagaAlterar ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldVaga} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start text-black dark:text-dark_white">Editar Vaga</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="Nome"
                  value={loading ? 'Loading...' : selectedVagaDataFiltered[0].nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <Input
                  placeholder="Tipo"
                  value={loading ? 'Loading...' : selectedVagaDataFiltered[0].tipo}
                  onChange={(e) => setTipo(e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="Setor"
                  value={loading ? 'Loading...' : selectedVagaDataFiltered[0].setor}
                  onChange={(e) => setSetor(e.target.value)}
                />
                <Input
                  placeholder="Status"
                  value={loading ? 'Loading...' : selectedVagaDataFiltered[0].vaga_ocupada}
                  onChange={(e) => setVagaOcupada(e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      label="Data Início"
                      defaultValue={loading ? 'Loading...' : selectedVagaDataFiltered[0].dataLocacao}
                      onChange={(e) => setDataLocacao(e)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      label="Data Fim"
                      defaultValue={loading ? 'Loading...' : selectedVagaDataFiltered[0].dataLocacaoFim}
                      onChange={(e) => setDataLocacaoFim(e)}
                    />
                  </DemoContainer>
                </LocalizationProvider>{' '}
              </div>
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="Preço"
                  value={loading ? 'Loading...' : selectedVagaDataFiltered[0].preco}
                  onChange={(e) => setPreco(e.target.value)}
                />
                <Input
                  placeholder="Cliente"
                  value={loading ? 'Loading...' : selectedVagaDataFiltered[0].clienteId}
                  onChange={(e) => setClienteId(e.target.value)}
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
                  value="Editar Vaga"
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
