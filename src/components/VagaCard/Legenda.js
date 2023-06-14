import React from 'react';

export default function Legenda() {
  return (
    <div className="absolute bottom-2 flex flex-row items-center mx-32">
      <div className="h-9 w-9 bg-green dark:bg-dark_green rounded-lg m-3"></div>
      <p className="mr-10 text-black dark:text-dark_white">Livre</p>
      <div className="h-9 w-9 bg-red dark:bg-dark_red rounded-lg m-3"></div>
      <p className="mr-10 text-black dark:text-dark_white">Ocupado</p>
      <div className="h-9 w-9 bg-blue dark:bg-dark_blue rounded-lg m-3"></div>
      <p className="mr-10 text-black dark:text-dark_white">Agendado</p>
      <div className="h-9 w-9 bg-yellow dark:bg-dark_yellow rounded-lg m-3"></div>
      <p className="mr-10 text-black dark:text-dark_white">Próximo do Vencimento</p>
      <div className="h-9 w-9 bg-grey dark:bg-dark_grey rounded-lg m-3"></div>
      <p className="mr-10 text-black dark:text-dark_white">Desativado</p>
    </div>
  );
}
