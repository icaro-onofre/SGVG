import React, { useState, Component, useEffect } from 'react';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVaga, vagaIdHome,vagaDataFiltered } from 'store.js';
import Input from 'components/Input';
import Button from 'components/Button';
import ModalVagaLivre from 'components/Modal/ModalVagaHome/Livre';
import ModalVagaOcupada from 'components/Modal/ModalVagaHome/Ocupada';
import ModalVagaAgendada from 'components/Modal/ModalVagaHome/Agendada';

export default function ModalVaga(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const handleSetFoldVaga = () => setFoldVaga(!foldVaga);

  const [vagas, setVagas] = useAtom(vagaDataFiltered);
  const [selectedId, setSelectedId] = useAtom(vagaIdHome);

  const [loading, setLoading] = useState(true);


  const getVagas = () => {
    axiosInstance
      .post('/vaga/filter', { id: selectedId })
      .then((res) => {
        setVagas(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVagas();
  }, []);

  if (loading == false) {
    switch (vagas[0].status) {
      case 'livre':
        return <ModalVagaLivre />;
      case 'ocupada':
        return <ModalVagaOcupada />;
      case 'agendada':
        return <ModalVagaAgendada/>;
    }
  }
}
