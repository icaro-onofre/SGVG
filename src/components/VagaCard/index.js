import React, { useState } from 'react';
import { colapsedVaga } from 'store.js';
import { useAtom } from 'jotai';

export default function VagaCard(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const handleSetFoldVaga = () => setFoldVaga(!foldVaga);

  let estilo = '';

  switch (props.vaga_ocupada) {
    case 'ocupada':
      estilo = ' bg-red  h-16  w-16  rounded-lg m-4 hover:border-2 hover:border-black';
      break;
    case 'agendada':
      estilo = ' bg-blue  h-16  w-16  rounded-lg m-4 hover:border-2 hover:border-black';
      break;
    case 'livre':
      estilo = ' bg-green  h-16  w-16  rounded-lg m-4 hover:border-2 hover:border-black';
      break;
    case 'desativada':
      estilo = ' bg-grey  h-16  w-16  rounded-lg m-4 hover:border-2 hover:border-black';
      break;
    case 'vencendo':
      estilo = ' bg-orange  h-16  w-16  rounded-lg m-4 hover:border-2 hover:border-black';
      break;
  }
  return (
    <button className={estilo} onClick={handleSetFoldVaga}>
      <div className={'flex items-center justify-center m-5 text-center text-white '}>{props.nome}</div>
    </button>
  );
}
