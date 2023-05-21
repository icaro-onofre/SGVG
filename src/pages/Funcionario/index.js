import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Table from 'components/Table/Funcionario/';
import Button from 'components/Button';
import ModalFuncionarioAlterar from 'components/Modal/ModalFuncionario/Alterar';
import ModalFuncionarioAdicionar from 'components/Modal/ModalFuncionario/Adicionar';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedFuncionario } from 'store.js';

export default function Funcionario() {
  const [foldFuncionario, setFoldFuncionario] = useAtom(colapsedFuncionario);
  return (
    <div className="overflow-hidden h-screen  grid grid-cols-12">
      <div className="col-start-1 col-end-13">
        {!foldFuncionario ? (
          <div></div>
        ) : (
          <div>
            <ModalFuncionarioAlterar />
          </div>
        )}
        <Header />
        <Navbar />
      </div>
      <div className="col-start-2 col-end-12">
        <h1 className="text-2xl text-black font-bold mb-8">Funcionários</h1>
        <Table />
        <div className="self-end mt-5">
          <Button value="Novo funcionário" />
        </div>
      </div>
    </div>
  );
}
