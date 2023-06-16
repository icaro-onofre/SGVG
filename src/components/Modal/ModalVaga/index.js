import React, { useState, Component, useEffect } from 'react';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVaga, vagaIdHome, vagaDataFiltered, vagaSelectedStatus } from 'store.js';
import Input from 'components/Input';
import Button from 'components/Button';
import ModalVagaLivre from 'components/Modal/ModalVagaHome/Livre';
import ModalVagaOcupada from 'components/Modal/ModalVagaHome/Ocupada';
import ModalVagaAgendada from 'components/Modal/ModalVagaHome/Agendada';

export default function ModalVaga(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const handleSetFoldVaga = () => setFoldVaga(!foldVaga);

  const [selectedStatus, setSelectedStatus] = useAtom(vagaSelectedStatus);
  const [vagas, setVagas] = useAtom(vagaDataFiltered);
  const [selectedId, setSelectedId] = useAtom(vagaIdHome);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .post('/vaga/filter', { id: selectedId })
      .then((res) => {
        setVagas(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading == false) {
    switch (selectedStatus) {
      case 'livre':
        return <ModalVagaLivre />;
      case 'ocupada':
        return <ModalVagaOcupada />;
      case 'agendada':
        return <ModalVagaAgendada />;
    }
  }
}
