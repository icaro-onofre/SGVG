import React, { useState, Component, useEffect } from 'react';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVaga } from 'store.js';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalVaga(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const handleSetFoldVaga = () => setFoldVaga(!foldVaga);

  const [vagas, setVagas] = useState([]);

  const getVagas = () => {
    axiosInstance
      .get('/vaga/filter')
      .then((res) => setVagas(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVagas();
  }, []);

  return (
    <div className={' inset-0' + foldVaga ? 'bg-opacity-40' : ''}>
      {!foldVaga ? (
        <div></div>
      ) : (
        <div className="absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldVaga} />

          <div className="w-80 p-10 bg-white dark:bg-dark_grey rounded-xl z-20">
            <div className='text-center mb-5'>
              <h1 className="text-2xl font-bold text-black dark:text-dark_white">
                Vaga {props.vagaNome}
              </h1>
              <span className="text-sm italic text-black dark:text-dark_white">Status: {props.status}</span>
            </div>
            <div className="flex flex-col gap-5">
              <Input placeholder="Placa" />
              <Button value="Ocupar vaga" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
