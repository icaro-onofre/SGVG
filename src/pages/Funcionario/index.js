import React, { useState, useEffect } from 'react';
import Table from 'components/Table/Funcionario/';
import Button from 'components/Button';
import ModalFuncionarioAlterar from 'components/Modal/ModalFuncionario/Alterar';
import ModalFuncionarioAdicionar from 'components/Modal/ModalFuncionario/Adicionar';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedFuncionarioAdicionar, colapsedFuncionarioAlterar } from 'store.js';

export default function Funcionario() {
  const [foldFuncionarioAlterar, setFoldFuncionarioAlterar] = useAtom(colapsedFuncionarioAlterar);
  const [foldFuncionarioAdicionar, setFoldFuncionarioAdicionar] = useAtom(colapsedFuncionarioAdicionar);
  return (
    <div className="overflow-hidden h-screen  grid grid-cols-12 pt-20">
      <div className="">
        {!foldFuncionarioAlterar ? (
          <div></div>
        ) : (
          <div>
            <ModalFuncionarioAlterar />
          </div>
        )}
        {!foldFuncionarioAdicionar ? (
          <div></div>
        ) : (
          <div>
            <ModalFuncionarioAdicionar />
          </div>
        )}
      </div>
      <div className="col-start-2 col-end-12">
        <h1 className="text-2xl text-black font-bold mb-8">Funcionários</h1>
        <Table />
        <div className="self-end mt-5">
          <Button
            value="Novo funcionário"
            onClick={() => {
              setFoldFuncionarioAdicionar(!foldFuncionarioAdicionar);
            }}
          />
        </div>
      </div>
    </div>
  );
}
