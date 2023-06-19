import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { moment } from 'moment';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVagaAdicionar } from 'store.js';
import { vagaId } from 'store.js';
import { vagaDataFiltered } from 'store.js';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalVaga(props) {
  const [foldVagaAdicionar, setFoldVagaAdicionar] = useAtom(colapsedVagaAdicionar);

  const [nome, setNome] = useState(null);
  const [setor, setSetor] = useState(null);
  const [tipo, setTipo] = useState(null);

  const [loading, setLoading] = useState(true);

  const [vagas, setVagas] = useState([]);

  const handleSetFoldVaga = () => {
    setFoldVagaAdicionar(!foldVagaAdicionar);
  };

  const handleSubmit = () => {
    axiosInstance
      .post('/vaga/create', {
        nome: nome,
        setor: setor,
        tipo: tipo,
      })
      .catch((err) => console.log(err));
    setFoldVagaAdicionar(!foldVagaAdicionar);
  };

  return (
    <div className={' inset-0' + foldVagaAdicionar ? 'bg-opacity-40' : ''}>
      {!foldVagaAdicionar ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldVaga} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start text-black dark:text-dark_white">Criar vaga</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                <Input placeholder="Tipo" onChange={(e) => setTipo(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Setor" onChange={(e) => setSetor(e.target.value)} />
              </div>
              <div className="self-end">
                <Button
                  value="Criar vaga"
                  onClick={() => {
                    handleSubmit();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
