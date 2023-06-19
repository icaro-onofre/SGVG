import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedVeiculoAlterar } from 'store.js';
import { veiculoId } from 'store.js';
import { veiculoDataFiltered } from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalVeiculo(props) {
  const [foldVeiculoAlterar, setFoldVeiculoAlterar] = useAtom(colapsedVeiculoAlterar);
  const [selectedVeiculoId, setSelectedVeiculoId] = useAtom(veiculoId);
  const [selectedVeiculoDataFiltered, setSelectedVeiculoDataFiltered] = useAtom(veiculoDataFiltered);

  const [categoria, setCategoria] = useState(null);
  const [cor, setCor] = useState(null);
  const [modelo, setModelo] = useState(null);
  const [placa, setPlaca] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSetFoldVeiculo = () => {
    setFoldVeiculoAlterar(!foldVeiculoAlterar);
    setSelectedVeiculoDataFiltered([]);
  };
  console.log(selectedVeiculoId);

  const handleDelete = () => {
    axiosInstance
      .post('/veiculo/delete', {
        id: selectedVeiculoId,
      })
      .catch((err) => console.log(err));
    setSelectedVeiculoDataFiltered([]);
    setFoldVeiculoAlterar(!foldVeiculoAlterar);
  };
  const handleSubmit = () => {
    axiosInstance
      .post('/veiculo/update', {
        id: selectedVeiculoId,
        categoria: categoria,
        cor: cor,
        modelo: modelo,
        placa: placa,
        cliente: cliente,
      })
      .catch((err) => console.log(err));

    setSelectedVeiculoDataFiltered([]);

    setFoldVeiculoAlterar(!foldVeiculoAlterar);
  };

  useEffect(() => {
    axiosInstance
      .post('/veiculo/filter', {
        id: selectedVeiculoId,
        categoria: null,
        cor: null,
        modelo: null,
        placa: null,
        cliente: null,
      })
      .then((res) => {
        setSelectedVeiculoDataFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [foldVeiculoAlterar]);

  return (
    <div className={' inset-0' + foldVeiculoAlterar ? 'bg-opacity-40' : ''}>
      {!foldVeiculoAlterar ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button className="absolute w-screen h-screen z-0 bg-black/[0.85]" onClick={handleSetFoldVeiculo} />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start text-black dark:text-dark_white">Editar Veículo</h1>
            {!loading && (
              <div className="flex flex-col space-y-5 h-90 mt-8 ">
                <div className="flex flex-row space-x-5">
                  <Input
                    placeholder="Categoria"
                    value={selectedVeiculoDataFiltered[0].categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                  />
                  <Input
                    placeholder="Cor"
                    value={selectedVeiculoDataFiltered[0].cor}
                    onChange={(e) => setCor(e.target.value)}
                  />
                </div>
                <div className="flex flex-row space-x-5">
                  <Input
                    placeholder="Cliente"
                    value={selectedVeiculoDataFiltered[0].cpf}
                    onChange={(e) => setCliente(e.target.value)}
                  />
                  <Input
                    placeholder="Modelo"
                    value={selectedVeiculoDataFiltered[0].modelo}
                    onChange={(e) => setModelo(e.target.value)}
                  />
                </div>
                <div className="flex flex-row space-x-5">
                  <Input
                    placeholder="Placa"
                    value={selectedVeiculoDataFiltered[0].placa}
                    onChange={(e) => setPlaca(e.target.value)}
                  />
                </div>
                <div className="flex flex-row space-x-5 self-end">
                  <Button
                    value="Deletar"
                    outlined
                    onClick={() => {
                      handleDelete();
                    }}
                  />
                  <Button
                    value="Editar Veículo"
                    onClick={() => {
                      handleSubmit();
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
