import React, { useState, Component, useEffect } from 'react';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVaga, vagaIdHome, vagaSelectedStatus, ocupacao, serverResponse, colapsedRecibo } from 'store.js';
import { vagaId } from 'store.js';
import { vagaDataFiltered } from 'store.js';
import CustomDatePicker from 'components/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalVagaLivre(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const [ocupacaos, setOcupacaos] = useAtom(ocupacao);
  const [cpf, setCpf] = useState(null);
  const [placa, setPlaca] = useState(null);
  const [vaga, setVaga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useAtom(vagaIdHome);
  const [vagas, setVagas] = useAtom(vagaDataFiltered);
  const [dataLocacao, setDataLocacao] = useState(null);
  const [dataLocacaoFim, setDataLocacaoFim] = useState(null);
  const [selectedStatus, setSelectedStatus] = useAtom(vagaSelectedStatus);
  const [response, setResponse] = useAtom(serverResponse);
  const [foldRecibo, setFoldRecibo] = useAtom(colapsedRecibo);

  const handleSubmit = () => {
    axiosInstance
      .post('/ocupacao/update', {
        id: ocupacaoAtual.id,
        dataLocacaoFim: currentDay,
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => console.log(err));

    handleSetClose();
  };
  const handleSetClose = () => {
    setFoldVaga(!foldVaga);
    setSelectedId('');
    setSelectedStatus('');
    setOcupacaos([]);
    setFoldRecibo(!foldRecibo);
  };

  let currentDay = new Date();
  let ocupacaoAtual = [];

  ocupacaos.map((a, b) => {
    if (
      ((currentDay.toISOString() >= ocupacaos[b].dataLocacao) &
        (currentDay.toISOString() <= ocupacaos[b].dataLocacaoFim)) |
      ((currentDay.toISOString() >= ocupacaos[b].dataLocacao) & (ocupacaos[b].dataLocacaoFim == undefined))
    ) {
      ocupacaoAtual.id = ocupacaos[b].id;
      ocupacaoAtual.cpf = ocupacaos[b].cpf;
      ocupacaoAtual.dataLocacao = ocupacaos[b].dataLocacao;
      ocupacaoAtual.dataLocacaoFim = ocupacaos[b].dataLocacaoFim;
      ocupacaoAtual.placa = ocupacaos[b].placa;
    }
  });

  let data1 = new Date(ocupacaoAtual.dataLocacao);
  let data2 = new Date(ocupacaoAtual.dataLocacaoFim);
  let horas = Math.abs(data1 - data2) / 36e5;
  console.log(horas);

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
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start">Finalizar ocupação</h1>
            <h2 className="text-2xl ml-16 mt-9 font-bold self-start">{vagas[0].nome}</h2>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder={ocupacaoAtual.cpf}
                  onChange={(e) => {
                    setCpf(e);
                  }}
                />
                <Input
                  placeholder={ocupacaoAtual.placa}
                  onChange={(e) => {
                    setPlaca(e);
                  }}
                />
              </div>
              <div className="flex justify-between space-x-5">
                <div className="w-64">
                  <CustomDatePicker
                    label={
                      ocupacaoAtual.dataLocacao
                        ? new Date(ocupacaoAtual.dataLocacao).toLocaleTimeString().substring(0, 5) +
                          ' - ' +
                          new Date(ocupacaoAtual.dataLocacao).toLocaleDateString()
                        : '--/--'
                    }
                  />
                </div>
                <div className="w-64">
                  <CustomDatePicker
                    label={new Date().toLocaleTimeString().substring(0, 5) + ' - ' + new Date().toLocaleDateString()}
                  />
                </div>
              </div>
              <div className="flex self-end">
                <Button
                  value="Finalizar ocupação"
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
