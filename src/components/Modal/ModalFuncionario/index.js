import React, { useState, Component, useEffect } from 'react';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedFuncionario } from 'store.js';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalFuncionario(props) {
  const [foldFuncionario, setFoldFuncionario] = useAtom(colapsedFuncionario);
  const handleSetFoldFuncionario = () => setFoldFuncionario(!foldFuncionario);

  const [fucionarios, setFuncionarios] = useState([]);

  const getFuncionarios = () => {
    axiosInstance
      .get('/fucionario/filter')
      .then((res) => setFuncionarios(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFuncionarios();
  }, []);

  return (
    <div className={' inset-0' + foldFuncionario ? 'bg-opacity-40' : ''}>
      {!foldFuncionario ? (
        <div></div>
      ) : (
        <div className="absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
		
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldFuncionario} />

          <div className=" w-80 h-80 bg-white rounded-xl z-20">
            <h1 className="text-2xl font-bold ml-5 mt-4">{props.fucionarioNome}</h1>
            <h2 className="text-lg  ml-8 mt-3">{props.status}</h2>
            <div className="ml-8">
              <div className=" space-y-4 w-52 h-32 mt-4 ">
                <Input placeholder="Cliente" />
                <Input placeholder="Placa" />
              </div>
	      <Button value="Ocupar fucionario"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
