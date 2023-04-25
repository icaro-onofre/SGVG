import React from 'react';

import LiberarVaga from './LiberarVaga';
import OcuparVaga from './OcuparVaga';

export default function Modal(props) {
  return (
    <div
      className={`absolute w-screen h-screen bg-black/[0.85] z-100 inset-0 flex items-center justify-center transition duration-100 ease-in`}
    >
      {/* <LiberarVaga vaga="A1" cliente="Ronaldo Azevedo" placa="DLX-4821" tempo="01:52" subtotal="12.50"/> */}
      <OcuparVaga vaga="A1"/>
    </div>
  );
}
