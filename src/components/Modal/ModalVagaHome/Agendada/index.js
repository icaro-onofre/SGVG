import React, { useState, Component, useEffect } from 'react';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVaga, vagaIdHome } from 'store.js';
import { vagaId } from 'store.js';
import { vagaDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalVagaAgendada(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useAtom(vagaIdHome);
  const [vagas, setVagas] = useState([]);

  const handleSubmit = () => {
    axiosInstance.post('/ocupacao/create', {}).catch((err) => console.log(err));
  };
  const handleSetClose = () => {
    setFoldVaga(!foldVaga);
    setSelectedId('');
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
          <div className="flex flex-col items-center justify-center w-1/2 bg-white rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start">Agendar vaga</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex justify-between">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Inicio da ocupação" sx={{ maxHeight: 10 }} />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Fim da ocupação" />
                </LocalizationProvider>
              </div>
              <div className="flex justify-between">
                <Button
                  value="Agendar"
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
