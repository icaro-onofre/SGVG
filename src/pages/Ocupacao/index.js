import React, { useState, useEffect } from 'react';
import Table from 'components/Table/Ocupacao/';
import Button from 'components/Button';
import ModalOcupacaoAlterar from 'components/Modal/ModalOcupacao/Alterar';
import ModalOcupacaoAdicionar from 'components/Modal/ModalOcupacao/Adicionar';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedOcupacaoAdicionar, colapsedOcupacaoAlterar } from 'store.js';

export default function Ocupacao() {
  const [foldOcupacaoAlterar, setFoldOcupacaoAlterar] = useAtom(colapsedOcupacaoAlterar);
  const [foldOcupacaoAdicionar, setFoldOcupacaoAdicionar] = useAtom(colapsedOcupacaoAdicionar);

  return (
    <div className="overflow-hidden h-screen  grid grid-cols-12 pt-20">
      <div className="">
        {!foldOcupacaoAlterar ? (
          <div></div>
        ) : (
          <div>
            <ModalOcupacaoAlterar />
          </div>
        )}
        {!foldOcupacaoAdicionar ? (
          <div></div>
        ) : (
          <div>
            <ModalOcupacaoAdicionar />
          </div>
        )}
      </div>
      <div className="col-start-2 col-end-12">
        <h1 className="text-2xl text-black font-bold mb-8">Agendamentos</h1>
        <Table />
        <div className="self-end mt-5">
          <Button
            value="Novo agendamento"
            onClick={() => {
              setFoldOcupacaoAdicionar(!foldOcupacaoAdicionar);
            }}
          />
        </div>
      </div>
    </div>
  );
}
