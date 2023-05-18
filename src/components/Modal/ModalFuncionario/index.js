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

  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [cpf, setCpf] = useState('');
  const [datanasc, setDataNasc] = useState('');
  const [idade, setIdade] = useState('');

  const [funcionarios, setFuncionarios] = useState([]);

  const handleSetFoldFuncionario = () => {
    setFoldFuncionario(!foldFuncionario);
  };

  //Handlers
  const handleSubmit = (nome, cargo, cpf, datanasc, idade) => {
    axiosInstance
      .post('/funcionario/update', {
        id: selectedFuncionarioId,
        cargo: cargo,
        cpf: cpf,
        data_nasc: datanasc,
        idade: idade,
        nome: nome,
        root: null,
      })
      .then((res) => setSelectedFuncionarioDataFiltered(res.data))
      .catch((err) => console.log(err));
  };

  const handleSetCpf = (e) => {
    e.preventDefault();
    setCpf(e.target.value);
    console.log(cpf);
  };
  const handleSetSenha = (e) => {
    console.log(senha);
    e.preventDefault();
    setSenha(e.target.value);
  };
  const handleSetIdade = (e) => {
    console.log(idade);
    e.preventDefault();
    setIdade(e.target.value);
  };
  const handleSetDataNasc = (e) => {
    console.log(datanasc);
    e.preventDefault();
    setDataNasc(e.target.value);
  };
  const handleSetCargo = (e) => {
    console.log(cargo);
    e.preventDefault();
    setCargo(e.target.value);
  };

  useEffect(() => {
    axiosInstance
      .post('/funcionario/filter', {
        id: selectedFuncionarioId,
        cargo: null,
        cpf: null,
        data_nasc: null,
        idade: null,
        nome: null,
        telefone: null,
        email: null,
        root: null,
      })
      .then((res) => setSelectedFuncionarioDataFiltered(res.data))
      .catch((err) => console.log(err));
  }, [foldFuncionario]);

  return (
    <div className={' inset-0' + foldFuncionario ? 'bg-opacity-40' : ''}>
      {!foldFuncionario ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          {selectedFuncionarioDataFiltered.length === 0 ? (
            <>
              <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldFuncionario} />
              <div className="flex flex-col items-center justify-center w-1/2 bg-white rounded-xl z-20 pt-5 pb-5">
                <h1 className="text-2xl font-bold ml-5 mt-1 self-start">Editar funcionario</h1>
                <div className="flex flex-col space-y-5 h-90 mt-8 ">
                  <div className="flex flex-row space-x-5">
                    <Input placeholder="Nome" />
                    <Input placeholder="Telefone" />
                  </div>
                  <div className="flex flex-row space-x-5">
                    <Input placeholder="Id" />
                    <Input placeholder="CPF" />
                  </div>
                  <div className="flex flex-row space-x-5">
                    <Input placeholder="Senha" />
                    <Input placeholder="Idade" />
                  </div>
                  <div className="flex flex-row space-x-5">
                    <Input placeholder="Data nascimento" />
                    <Input placeholder="Cargo" />
                  </div>
                  <div className="self-end">
                    <Button value="Editar funcionario" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldFuncionario} />
              <div className="flex flex-col items-center justify-center w-1/2 bg-white rounded-xl z-20 pt-5 pb-5">
                <h1 className="text-2xl font-bold ml-5 mt-1 self-start">Editar funcionario</h1>
                <div className="flex flex-col space-y-5 h-90 mt-8 ">
                  <div className="flex flex-row space-x-5">
                    <Input placeholder={selectedFuncionarioDataFiltered[0].nome}/>
                    <Input placeholder="Telefone" />
                  </div>
		  <div className="flex flex-row space-x-5">
                    <Input placeholder={selectedFuncionarioDataFiltered[0].id} />
                    <Input placeholder={selectedFuncionarioDataFiltered[0].cpf} onChange={handleSetCpf} />
                  </div>
                  <div className="flex flex-row space-x-5">
                    <Input placeholder={selectedFuncionarioDataFiltered[0].senha} onChange={handleSetSenha} />
                    <Input placeholder={selectedFuncionarioDataFiltered[0].idade} onChange={handleSetIdade} />
                  </div>
                  <div className="flex flex-row space-x-5">
                    <Input placeholder={selectedFuncionarioDataFiltered[0].data_nasc} onChange={handleSetDataNasc} />
                    <Input placeholder={selectedFuncionarioDataFiltered[0].cargo} onChange={handleSetCargo} />
                  </div>
                  <div className="self-end">
                    <Button
                      value="Editar funcionario"
                      onClick={() => {
                        handleSubmit();
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
