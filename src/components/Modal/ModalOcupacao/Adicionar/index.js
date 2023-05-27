import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { moment } from 'moment';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedOcupacaoAdicionar, ocupacaoId, ocupacaoDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalOcupacao(props) {
  const [foldOcupacaoAdicionar, setFoldOcupacaoAdicionar] = useAtom(colapsedOcupacaoAdicionar);

  const [cpf, setCpf] = useState(null);
  const [vaga, setVaga] = useState(null);
  const [placa, setPlaca] = useState(null);
  const [dataLocacao, setDataLocacao] = useState(null);
  const [dataLocacaoFim, setDataLocacaoFim] = useState(null);

  const [loading, setLoading] = useState(true);

  const handleSetFoldOcupacao = () => {
    setFoldOcupacaoAdicionar(!foldOcupacaoAdicionar);
  };

  const handleSubmit = () => {
    axiosInstance
      .post('/ocupacao/create', {
        cpf: cpf,
        vaga: vaga,
        placa: placa,
        dataLocacao: dataLocacao,
        dataLocacaoFim: dataLocacaoFim,
      })
      .catch((err) => console.log(err));
    setFoldOcupacaoAdicionar(!foldOcupacaoAdicionar);
  };

  return (
    <div className={' inset-0' + foldOcupacaoAdicionar ? 'bg-opacity-40' : ''}>
      {!foldOcupacaoAdicionar ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldOcupacao} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start">Novo agendamento</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
                <Input placeholder="Vaga" onChange={(e) => setVaga(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Placa" onChange={(e) => setPlaca(e.target.value)} />
                <Input placeholder="Data Locação " onChange={(e) => setDataLocacao(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Data Locação Fim" onChange={(e) => setDataLocacaoFim(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5 self-end">
                <Button
                  value="Novo agendamento"
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
