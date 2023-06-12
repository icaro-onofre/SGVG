import React, { useState, useEffect } from 'react';
import VagaCard from 'components/VagaCard';
import ModalVaga from 'components/Modal/ModalVaga/';
import Legenda from 'components/VagaCard/Legenda';
import { getVagas } from 'services/vaga.js';
import axiosInstance from 'services/axios';
import { colapsedVaga, vagaIdHome, vagaData, ocupacao } from 'store.js';
import { useAtom } from 'jotai';

export default function Home() {
  const [vagas, setVagas] = useAtom(vagaData);
  const [ocupacaos, setOcupacaos] = useAtom(ocupacao);
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const [selectedId, setSelectedId] = useAtom(vagaIdHome);

  useEffect(() => {
    axiosInstance
      .get('/vaga')
      .then((res) => setVagas(res.data))
      .catch((err) => console.log(err));

    axiosInstance
      .get('/ocupacao')
      .then((res) => setOcupacaos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSetVagaClose = (id) => {
    setFoldVaga(!foldVaga);
    setSelectedId(id);
  };

  let currentDay = new Date();

  let vagasOcupadas = [];
  let vagasAgendadas = [];
  let vagasLivres = [];

  ocupacaos.map((e, i) => {
    if (
      (currentDay.toISOString() >= ocupacaos[i].dataLocacao) &
      (currentDay.toISOString() <= ocupacaos[i].dataLocacaoFim)
    ) {
      vagasOcupadas.push(ocupacaos[i].vaga);
    } else if (currentDay.toISOString() <= ocupacaos[i].dataLocacao) {
      vagasAgendadas.push(ocupacaos[i].vaga);
    } else {
      vagasLivres.push(ocupacaos[i].vaga);
    }
  });

  vagas.map((a, b) => {
    if (vagasOcupadas.includes(vagas[b].nome)) vagas[b].status = 'ocupada';
    if (vagasAgendadas.includes(vagas[b].nome)) vagas[b].status = 'agendada';
    if (vagasLivres.includes(vagas[b].nome)) vagas[b].status = 'livre';
    if (vagas[b].status==undefined) vagas[b].status = 'livre';
  });

  return (
    <div className="overflow-hidden h-screen pt-20">
      {foldVaga ? <ModalVaga /> : <div></div>}

      <p className="mx-32 my-5 font-bold">STATUS DAS VAGAS</p>
      <div className="grid grid-cols-12 ">
        <div className="flex flex-row flex-wrap col-start-2  col-end-12 h-screen">
          {vagas.map((key, vaga) => {
            return (
              <VagaCard
                key={key}
                status={vagas[vaga].status}
                nome={vagas[vaga].nome}
                onClick={() => {
                  handleSetVagaClose(vagas[vaga].id);
                }}
              />
            );
          })}
        </div>
      </div>
      <Legenda />
    </div>
  );
}
