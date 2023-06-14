import React, { useState, useEffect } from 'react';
import VagaCard from 'components/VagaCard';
import ModalVaga from 'components/Modal/ModalVaga/';
import Legenda from 'components/VagaCard/Legenda';
import { getVagas } from 'services/vaga.js';
import axiosInstance from 'services/axios';
import { colapsedVaga } from 'store.js';
import { useAtom } from 'jotai';

export default function Home() {
  const [vagas, setVagas] = useState([]);

  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const handleSetFoldVaga = () => setFoldVaga(!foldVaga);

  const getVagas = () => {
    axiosInstance
      .get('/vaga')
      .then((res) => setVagas(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVagas();
  }, [vagas]);

  return (
    <div className="overflow-hidden h-screen pt-20 dark:bg-dark_black">
      <ModalVaga vagaNome="A3" status="Livre" />

      <p className="mx-32 my-5 font-bold text-black dark:text-dark_white">STATUS DAS VAGAS</p>
      <div className="grid grid-cols-12 ">
        <div className="flex flex-wrap col-start-2 col-end-12 gap-6">
          {vagas.map((key, vaga) => {
            return <VagaCard key={vagas[vaga]._id} nome={vagas[vaga].nome} vaga_ocupada={vagas[vaga].vaga_ocupada} />;
          })}
        </div>
      </div>
      <Legenda />
    </div>
  );
}
