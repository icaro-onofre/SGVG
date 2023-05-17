import React, { useState, Component, useEffect } from 'react';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedFuncionario } from 'store.js';
import { funcionarioId } from 'store.js';
import { funcionarioDataFiltered } from 'store.js';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalFuncionario(props) {
  const [foldFuncionario, setFoldFuncionario] = useAtom(colapsedFuncionario);
  const [selectedFuncionarioId, setSelectedFuncionarioId] = useAtom(funcionarioId);
  const [selectedFuncionarioDataFiltered, setSelectedFuncionarioDataFiltered] = useAtom(funcionarioDataFiltered);

  const handleSetFoldFuncionario = () => {
    setFoldFuncionario(!foldFuncionario);
  };

  const [funcionarios, setFuncionarios] = useState([]);

  const getFuncionarioFiltered = () => {};

  useEffect(() => {
    if (foldFuncionario == true) {
      axiosInstance
        .post('/funcionario/filter', {
          id: selectedFuncionarioId,
          cargo: null,
          cpf: null,
          data_nasc: null,
          idade: null,
          nome: null,
          root: null,
        })
        .then((res) => setSelectedFuncionarioDataFiltered(res.data))
        .catch((err) => console.log(err));
    }
  }, [foldFuncionario]);

  console.log(selectedFuncionarioDataFiltered);

  console.log(selectedFuncionarioId);
  return (
    <div className={' inset-0' + foldFuncionario ? 'bg-opacity-40' : ''}>
      {!foldFuncionario ? (
        <div></div>
      ) : (
        <div className="absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldFuncionario} />
          <div className=" w-1/2 h-1/2 bg-white rounded-xl z-20">
            <h1 className="text-2xl font-bold ml-5 mt-4">Editar funcionario</h1>
            <div className="ml-8">
              <div className=" space-y-1 h-90 mt-8 ">
                <div className="flex flex-row space-x-5">
                  <Input placeholder="Nome" />
                  <Input placeholder="CPF" />
                </div>
                <div className="flex flex-row space-x-5">
                  <Input placeholder="Senha" />
                  <Input placeholder="Idade" />
                </div>
                <div className="flex flex-row space-x-5">
                  <Input placeholder="DataNasc" />
                  <Input placeholder="Cargo" />
                </div>
              </div>
              <div className="mt-7 ml-72">
                <Button value="Editar funcionario" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
