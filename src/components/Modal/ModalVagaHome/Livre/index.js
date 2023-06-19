import React, { useState, Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { moment } from 'moment';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import {
  colapsedOcupacaoAdicionar,
  colapsedVaga,
  ocupacaoId,
  ocupacaoDataFiltered,
  vagaDataFiltered,
  colapsedClienteAdicionar,
  vagaIdHome,
  ocupacao,
  vagaSelectedStatus,
} from 'store.js';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CustomDatePicker from 'components/DatePicker';
import Input from 'components/Input';
import Button from 'components/Button';

export default function ModalOcupacao(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const [foldOcupacaoAdicionar, setFoldOcupacaoAdicionar] = useAtom(colapsedOcupacaoAdicionar);
  const [foldClienteAdicionar, setFoldClienteAdicionar] = useAtom(colapsedClienteAdicionar);
  const [selectedId, setSelectedId] = useAtom(vagaIdHome);

  const [cpfPessoa, setCpf] = useState(null);
  const [ocupacaos, setOcupacaos] = useAtom(ocupacao);
  const [vaga, setVaga] = useState(null);
  const [placaPessoa, setPlaca] = useState(null);
  const [vagas, setVagas] = useAtom(vagaDataFiltered);
  const [dataLocacao, setDataLocacao] = useState(null);
  const [dataLocacaoFim, setDataLocacaoFim] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useAtom(vagaSelectedStatus);

  const handleSetFoldOcupacao = () => {
    setFoldVaga(!foldOcupacaoAdicionar);
  };

  let currentDay = new Date();

  const handleSubmit = () => {
    axiosInstance
      .post('/ocupacao/create', {
        cpf: cpfPessoa,
        vaga: vagas[0].nome,
        placa: placaPessoa,
        dataLocacao: currentDay,
      })
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
    handleSetClose();
  };

  const handleSetClose = () => {
    setFoldVaga(!foldVaga);
    setSelectedId('');
    setSelectedStatus('');
    setOcupacaos([]);
  };

  return (
    <div className={' inset-0' + foldVaga ? 'bg-opacity-40' : ''}>
      {!foldVaga ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button
            className="absolute w-screen h-screen z-0 bg-black/[0.85]"
            onClick={() => {
              handleSetClose();
            }}
          />
          <div className="flex flex-col items-center justify-center w-1/2 bg-white dark:bg-dark_grey dark:text-dark_white rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start">Editar vaga</h1>
            <h2 className="text-2xl ml-16 mt-9 font-bold self-start">{vagas[0].nome}</h2>
            <div className="flex flex-col h-90 mt-7 ">
              <div className="flex flex-row space-x-5">
                <Input
                  placeholder="CPF"
                  onChange={(e) => {
                    setCpf(e.target.value);
                  }}
                />
                <Input
                  placeholder="Placa"
                  onChange={(e) => {
                    setPlaca(e.target.value);
                  }}
                />
              </div>
              <button
                className="flex self-end "
                onClick={() => {
                  setFoldClienteAdicionar(!foldClienteAdicionar);
                  setFoldVaga(!foldVaga);
                }}
              >
                <p className="text-sm text-green">Cadastrar cliente</p>
              </button>
              <div className="flex justify-between mt-10">
                <Button
                  value="Agendar"
                  onClick={() => {
                    setFoldOcupacaoAdicionar(!foldOcupacaoAdicionar);
                    setFoldVaga(!foldVaga);
                  }}
                />
                <Button
                  value="Ocupar"
                  type="submit"
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
