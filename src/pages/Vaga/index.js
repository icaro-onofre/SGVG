import React, { useState, useEffect } from 'react';
import Table from 'components/Table/Vaga/';
import Button from 'components/Button';
import ModalVagaAlterar from 'components/Modal/ModalVaga/Alterar/';
import ModalVagaAdicionar from 'components/Modal/ModalVaga/Adicionar/';
import { useAtom } from 'jotai';
import axiosInstance from 'services/axios';
import { colapsedVagaAdicionar, colapsedVagaAlterar } from 'store.js';

export default function Vaga() {
  const [foldVagaAlterar, setFoldVagaAlterar] = useAtom(colapsedVagaAlterar);
  const [foldVagaAdicionar, setFoldVagaAdicionar] = useAtom(colapsedVagaAdicionar);
  return (
    <div className="overflow-hidden h-screen  grid grid-cols-12">
      <div className="col-start-1 col-end-13">
        {!foldVagaAlterar ? (
          <div></div>
        ) : (
          <div>
            <ModalVagaAlterar />
          </div>
        )}
        {!foldVagaAdicionar ? (
          <div></div>
        ) : (
          <div>
            <ModalVagaAdicionar />
          </div>
        )}
        <Header />
        <Navbar />
      </div>
      <div className="col-start-2 col-end-12">
        <h1 className="text-2xl text-black font-bold mb-8">Vagas</h1>
        <Table />
        <div className="self-end mt-5">
          <Button
            value="Nova Vaga"
            onClick={() => {
              setFoldVagaAdicionar(!foldVagaAdicionar);
            }}
          />
        </div>
      </div>
    </div>
  );
}
