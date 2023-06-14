import React, { useState, useEffect } from 'react';
import Table from 'components/Table/Veiculo/';
import Button from 'components/Button';
import ModalVeiculoAdicionar from 'components/Modal/ModalVeiculo/Adicionar';
import ModalVeiculoAlterar from 'components/Modal/ModalVeiculo/Alterar';
import { useAtom } from 'jotai';
import axiosInstance from 'services/axios';

import { colapsedVeiculoAdicionar, colapsedVeiculoAlterar } from 'store.js';

export default function Veiculo() {
  const [foldVeiculoAlterar, setFoldVeiculoAlterar] = useAtom(colapsedVeiculoAlterar);
  const [foldVeiculoAdicionar, setFoldVeiculoAdicionar] = useAtom(colapsedVeiculoAdicionar);

  return (
    <div className="overflow-hidden h-screen grid grid-cols-12 dark:bg-dark_black">
      {!foldVeiculoAlterar ? (
        <div></div>
      ) : (
        <div>
          <ModalVeiculoAlterar />
        </div>
      )}
      {!foldVeiculoAdicionar ? (
        <div></div>
      ) : (
        <div>
          <ModalVeiculoAdicionar />
        </div>
      )}
      <div className="col-start-1 col-end-13"></div>
      <div className="col-start-2 col-end-12">
        <h1 className="text-2xl text-black font-bold mb-8 dark:text-dark_white">Veiculos</h1>
        <Table />
        <div className="self-end mt-5">
          <Button
            value="Novo veiculo"
            onClick={() => {
              setFoldVeiculoAdicionar(!foldVeiculoAdicionar);
            }}
          />
        </div>
      </div>
    </div>
  );
}
