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
  const [setor, setSetor] = useState(null);
  const [tipo, setTipo] = useState(null);
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
        tipo: tipo,
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
        dataLocacao: null,
        dataLocacaoFim: null,
        tipo: null,
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
          <div className="flex flex-col items-center justify-center w-1/2 bg-white rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start">{loading ? <Skeleton /> : 'Editar vaga'}</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder={loading ? 'Loading...' : selectedVagaDataFiltered[0].nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <Input
                  placeholder={loading ? 'Loading...' : selectedVagaDataFiltered[0].tipo}
                  onChange={(e) => setTipo(e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder={loading ? 'Loading...' : selectedVagaDataFiltered[0].setor}
                  onChange={(e) => setSetor(e.target.value)}
                />
              </div>
              <div className="space-x-52">
                <Button
                  value="Deletar"
                  onClick={() => {
                    handleDelete();
                  }}
                />

                <Button
                  value="Editar vaga"
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
