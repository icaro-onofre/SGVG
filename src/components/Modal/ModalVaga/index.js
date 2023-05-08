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

  const [vagaId, setVagaId] = useState('');

  const getVagas = () => {
    axiosInstance
      .post('/vaga/filter', { id: _id })
      .then((res) => setVagas(res.data))
      .catch((err) => console.log(err));
      }
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
          <div className="  w-72 h-72 bg-white rounded-xl ">
            <h1 className="text-1xl font-bold ml-5 mt-5">{props.vagaNome}</h1>
            <h2 className="text-sm  ml-5 mt-3">{props.status}</h2>

            <div className="ml-8">
              <div className=" w-44 h-32 mt-5 ">
                <Input placeholder="Cliente" />
                <Input placeholder="Placa" />
              </div>
              <div className="h-5 w-20">
                <Button value="Ocupar vaga" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
