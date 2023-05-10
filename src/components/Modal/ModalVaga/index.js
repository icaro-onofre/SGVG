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

          <div className=" w-80 h-80 bg-white rounded-xl z-20">
            <h1 className="text-2xl font-bold ml-5 mt-4">{props.vagaNome}</h1>
            <h2 className="text-lg  ml-8 mt-3">{props.status}</h2>
            <div className="ml-8">
              <div className=" space-y-4 w-52 h-32 mt-4 ">
                <Input placeholder="Cliente" />
                <Input placeholder="Placa" />
              </div>
	      <Button value="Ocupar vaga"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}