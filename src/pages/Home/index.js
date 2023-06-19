import React, { useState, useEffect } from 'react';
import VagaCard from 'components/VagaCard';
import ModalVaga from 'components/Modal/ModalVaga/';
import ModalOcupacaoAdicionar from 'components/Modal/ModalOcupacao/Adicionar';
import ModalClienteAdicionar from 'components/Modal/ModalCliente/Adicionar';
import ModalRecibo from 'components/Modal/ModalRecibo';
import { Alert } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';
import Legenda from 'components/VagaCard/Legenda';
import { getVagas } from 'services/vaga.js';
import { email, name, root } from 'store.js';
import axiosInstance from 'services/axios';
import {
  colapsedVaga,
  vagaIdHome,
  vagaData,
  ocupacao,
  vagaSelectedStatus,
  colapsedOcupacaoAdicionar,
  colapsedClienteAdicionar,
  serverResponse,
  colapsedRecibo,
} from 'store.js';
import { useAtom } from 'jotai';

export default function Home() {
  const [vagas, setVagas] = useAtom(vagaData);
  const [ocupacaos, setOcupacaos] = useAtom(ocupacao);
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const [selectedId, setSelectedId] = useAtom(vagaIdHome);
  const [selectedStatus, setSelectedStatus] = useAtom(vagaSelectedStatus);
  const [foldOcupacaoAdicionar, setFoldOcupacaoAdicionar] = useAtom(colapsedOcupacaoAdicionar);
  const [foldClienteAdicionar, setFoldClienteAdicionar] = useAtom(colapsedClienteAdicionar);
  const [userEmail, setUserEmail] = useAtom(email);
  const [userName, setUserName] = useAtom(name);
  const [userRoot, setUserRoot] = useAtom(root);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useAtom(serverResponse);
  const [foldRecibo, setFoldRecibo] = useAtom(colapsedRecibo);

  const handleSetVagaClose = (id, status) => {
    setFoldVaga(!foldVaga);
    setSelectedId(id);
    setSelectedStatus(status);
  };

  let token = localStorage.getItem('token');
  let decodedToken = JSON.parse(window.atob(token.split('.')[1]));

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

  let currentDay = new Date();

  let vagasOcupadas = [];
  let vagasAgendadas = [];
  let vagasLivres = [];

  ocupacaos.map((e, i) => {
    if (
      ((currentDay.toISOString() >= ocupacaos[i].dataLocacao) &
        (currentDay.toISOString() <= ocupacaos[i].dataLocacaoFim)) |
      ((currentDay.toISOString() >= ocupacaos[i].dataLocacao) & (ocupacaos[i].dataLocacaoFim == undefined))
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
    if (vagas[b].status == undefined) vagas[b].status = 'livre';
  });
  console.log(vagasOcupadas);

  if ((response != '') & (response == '200')) setSuccess(true);

  console.log(response);

  return (
    <div className="overflow-hidden h-screen pt-20 dark:bg-dark_black">
      {foldVaga ? <ModalVaga /> : <div></div>}
      {foldOcupacaoAdicionar ? <ModalOcupacaoAdicionar vaga={vagas[0].nome} agendamento={true} /> : <div></div>}
      {foldClienteAdicionar ? <ModalClienteAdicionar /> : <div></div>}
      {foldRecibo ? <ModalRecibo /> : <div></div>}
      <Fade right when={success}>
        <Alert
          className="absolute right-4 top-4 cursor-default dark:bg-dark_red/25 dark:text-dark_white"
          severity="error"
        >
          <strong>Ocupação finalizada com sucesso</strong>
        </Alert>
      </Fade>

      <p className="mx-32 my-5 font-bold text-black dark:text-dark_white">STATUS DAS VAGAS</p>
      <div className="grid grid-cols-12 ">
        <div className="flex flex-wrap col-start-2 col-end-12 gap-6">
          {vagas.map((key, vaga) => {
            return (
              <VagaCard
                key={vagas[vaga]._id}
                nome={vagas[vaga].nome}
                status={vagas[vaga].status}
                onClick={() => {
                  handleSetVagaClose(vagas[vaga].nome, vagas[vaga].status);
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
