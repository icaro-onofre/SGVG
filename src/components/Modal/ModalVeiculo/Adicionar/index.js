import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { moment } from 'moment';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVeiculoAdicionar } from 'store.js';
import { vagaId } from 'store.js';
import { vagaDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalVeiculo(props) {
  const [foldVeiculoAdicionar, setFoldVeiculoAdicionar] = useAtom(colapsedVeiculoAdicionar);

  const [categoria, setCategoria] = useState(null);
  const [cor, setCor] = useState(null);
  const [modelo, setModelo] = useState(null);
  const [placa, setPlaca] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    axiosInstance
      .post('/veiculo/create', {
        categoria: categoria,
        cor: cor,
        modelo: modelo,
        placa: placa,
        clienteId: cliente,
      })
      .catch((err) => console.log(err));
    setFoldVeiculoAdicionar(!foldVeiculoAdicionar);
  };

  return (
    <div className={' inset-0' + foldVeiculoAdicionar ? 'bg-opacity-40' : ''}>
      {!foldVeiculoAdicionar ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button
            className="absolute w-screen h-screen z-0 bg-black/[0.85]"
            onClick={() => {
              setFoldVeiculoAdicionar(!foldVeiculoAdicionar);
            }}
          />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start text-black dark:text-dark_white">
              Adicionar veiculo
            </h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row space-x-5">
                <Input placeholder="Categoria" onChange={(e) => setCategoria(e.target.value)} />
                <Input placeholder="Cor" onChange={(e) => setCor(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Cliente" onChange={(e) => setCliente(e.target.value)} />
                <Input placeholder="Modelo" onChange={(e) => setModelo(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-5">
                <Input placeholder="Placa" onChange={(e) => setPlaca(e.target.value)} />
              </div>
              <div className="self-end">
                <Button
                  value="Criar Veiculo"
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
