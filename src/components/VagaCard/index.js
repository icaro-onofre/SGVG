import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { colapsedVaga } from 'store.js';

export default function VagaCard(props) {
  let estilo = '';

  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const handleSetFoldVaga = () => setFoldVaga(!foldVaga);

  switch (props.vaga_ocupada) {
    case 'ocupada':
      estilo = ' bg-red  h-16  w-16  rounded-lg m-4';
      break;
    case 'agendada':
      estilo = ' bg-blue  h-16  w-16  rounded-lg m-4';
      break;
    case 'livre':
      estilo = ' bg-green  h-16  w-16  rounded-lg m-4';
      break;
    case 'desativada':
      estilo = ' bg-grey  h-16  w-16  rounded-lg m-4';
      break;
    case 'vencendo':
      estilo = ' bg-orange  h-16  w-16  rounded-lg m-4';
      break;
  }
  return (
    <div className={estilo} onClick={() => handleSetFoldVaga}>
      <div className={'flex items-center justify-center m-5 text-center text-white'}>{props.nome}</div>
    </div>
  );
}
