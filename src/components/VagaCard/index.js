import React, { useState } from 'react';
import { colapsedVaga } from 'store.js';
import { useAtom } from 'jotai';

export default function VagaCard(props) {
  const [foldVaga, setFoldVaga] = useAtom(colapsedVaga);
  const handleSetFoldVaga = () => setFoldVaga(!foldVaga);

  let cor = '';

  switch (props.vaga_ocupada) {
    case 'ocupada':
      cor = 'bg-red dark:bg-dark_red';
      break;
    case 'agendada':
      cor = 'bg-blue dark:bg-dark_blue';
      break;
    case 'livre':
      cor = 'bg-green dark:bg-dark_green';
      break;
    case 'desativada':
      cor = 'bg-grey dark:bg-dark_grey';
      break;
    case 'vencendo':
      cor = 'bg-yellow dark:bg-dark_yellow';
      break;
  }
  return (
    <button
      className={`bg-grey dark:bg-dark_grey ${cor} h-16 w-16 rounded-lg hover:border-2 hover:border-black dark:hover:border-dark_white duration-75`}
      onClick={handleSetFoldVaga}
    >
      <div className={'flex items-center justify-center m-5 text-center text-white '}>{props.nome}</div>
    </button>
  );
}
