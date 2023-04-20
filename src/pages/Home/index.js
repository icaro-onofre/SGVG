import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import VagaCard from 'components/VagaCard';
import Legenda from 'components/VagaCard/Legenda';
import { getVagas } from 'services/vaga.js';
import axiosInstance from 'services/axios';

export default function Home() {
  const [vagas, setVagas] = useState([]);
  const getVagas = () => {
    axiosInstance
      .get('/vaga')
      .then((res) => setVagas(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVagas();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <p className="mx-32 my-5 font-bold">STATUS DAS VAGAS</p>
      <div className="grid grid-cols-12 ">
        <div className="flex flex-row flex-wrap col-start-2  col-end-12 h-screen">
          {vagas.map((key, vaga) => {
            return <VagaCard key={key} nome={vagas[vaga].setor} vaga_ocupada={vagas[vaga].vaga_ocupada} />;
          })}
        </div>
      </div>
      <Legenda />
    </div>
  );
}
