import React, { useState, useEffect } from 'react';
import { useAtom, atom } from 'jotai';
import { colapsedClienteAlterar, clienteId, cliente } from 'store.js';
import ModalClienteAlterar from 'components/Modal/ModalCliente/Alterar/';
import ModalClienteAdicionar from 'components/Modal/ModalCliente/Adicionar/';
import Table from 'components/Table/Cliente/';
import Button from 'components/Button';
import axiosInstance from 'services/axios';

export default function Cliente() {
  const [foldClienteAlterar, setFoldClienteAlterar] = useAtom(colapsedClienteAlterar);
  const [foldClienteAdicionar, setFoldClienteAdicionar] = useAtom(colapsedClienteAlterar);

  return (
    <div className="overflow-hidden h-screen  grid grid-cols-12 pt-20">
      {!foldClienteAlterar ? (
        <div></div>
      ) : (
        <div>
          <ModalClienteAlterar />
        </div>
      )}
      {!foldClienteAdicionar ? (
        <div></div>
      ) : (
        <div>
          <ModalClienteAdicionar />
        </div>
      )}
      <div className="col-start-2 col-end-12">
        <h1 className="text-2xl text-black font-bold mb-8">Clientes</h1>
        <Table />
        <div className="self-end mt-5">
          <Button value="Novo cliente" 
	  onClick={()=>{setFoldClienteAdicionar(!foldClienteAdicionar)}}
	  />
        </div>
      </div>
    </div>
  );
}
