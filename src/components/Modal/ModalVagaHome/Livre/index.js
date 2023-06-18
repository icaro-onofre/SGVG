import React, { useState, Component, useEffect } from 'react';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import {
  colapsedVaga,
  vagaIdHome,
  vagaSelectedStatus,
  vagaId,
  vagaDataFiltered,
  colapsedOcupacaoAdicionar,
  colapsedClienteAdicionar,
} from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ModalOcupacaoAdicionar from 'components/Modal/ModalOcupacao/Adicionar';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalVagaLivre(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const [foldOcupacacao, setOcupacacao] = useAtom(colapsedVaga);
  const [selectedId, setSelectedId] = useAtom(vagaIdHome);

  const [vagas, setVagas] = useAtom(vagaDataFiltered);

  const [selectedStatus, setSelectedStatus] = useAtom(vagaSelectedStatus);
  const [foldOcupacaoAdicionar, setFoldOcupacaoAdicionar] = useAtom(colapsedOcupacaoAdicionar);
  const [foldClienteAdicionar, setFoldClienteAdicionar] = useAtom(colapsedClienteAdicionar);
  const [loading, setLoading] = useState(true);


  const [cpf, setCpf] = useState(null);
  const [placa, setPlaca] = useState(null);
  const [dataLocacao, setDataLocacao] = useState(null);
  const [dataLocacaoFim, setDataLocacaoFim] = useState(null);


  let currentDay = new Date();

  const handleSubmit = () => {
    axiosInstance
      .post('/ocupacao/create', {
        vaga: vagas[0].nome,
        dataLocacao: currentDay,
        placa:'MZP-5785',
        cpf: '075.475.810-99',
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    handleSetClose();
  };

  const handleSetClose = () => {
    setFoldVaga(!foldVaga);
    setSelectedId('');
    setSelectedStatus('');
  };

  return (
    <div className={' inset-0' + foldVaga ? 'bg-opacity-40' : ''}>
      {!foldVaga ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button
            className="absolute w-screen h-screen z-0 bg-black/[0.85]"
            onClick={() => {
              handleSetClose();
            }}
          />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey dark:text-dark_white rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start">Editar vaga</h1>
            <h2 className="text-2xl ml-16 mt-9 font-bold self-start">{vagas[0].nome}</h2>
            <div className="flex flex-col h-90 mt-7 ">
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="CPF"
                  onChange={(e) => {
                    setCpf(e);
                  }}
                />
                <Input
                  placeholder="Placa"
                  onChange={(e) => {
                    setPlaca(e);
                  }}
                />
              </div>
              <button
                className="flex self-end "
                onClick={() => {
                  setFoldClienteAdicionar(!foldClienteAdicionar);
                  setFoldVaga(!foldVaga);
                }}
              >
                <p className="text-sm text-green">Cadastrar cliente</p>
              </button>
              <div className="flex justify-between mt-10">
                <Button
                  value="Agendar"
                  onClick={() => {
                    setFoldOcupacaoAdicionar(!foldOcupacaoAdicionar);
                    setFoldVaga(!foldVaga);
                  }}
                />
                <Button
                  value="Ocupar"
                  type="submit"
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
