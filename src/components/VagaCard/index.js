import React, { useState } from 'react';

export default function VagaCard(props) {
  return (
    <div className={props.vaga_ocupada ? 'bg-red h-16 w-16 rounded-lg m-4' : 'bg-green  h-16  w-16  rounded-lg m-4'}>
      <div className={'flex items-center justify-center m-5 text-center text-white'}>{props.nome}</div>
    </div>
  );
}
