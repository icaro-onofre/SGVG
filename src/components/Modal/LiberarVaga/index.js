import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

export default function LiberarVaga(props) {
  return (
    <div className="bg-white p-10 rounded-md flex flex-col gap-4 relative">
      <div className="flex flex-col items-center">
        <h2 className="font-heading font-bold text-2xl">VAGA: {props.vaga}</h2>
        <span className="font-body text-sm italic opacity-80">Status: Ocupada</span>
      </div>
      <Input type="text" placeholder="Cliente" leftIcon="user-fill" disabled value={props.cliente} />
      <Input type="text" placeholder="Placa" leftIcon="car-fill" disabled value={props.placa} />
      <Input type="text" placeholder="Tempo" leftIcon="time-fill" disabled value={props.tempo} />
      <Input type="number" placeholder="Subtotal" leftIcon="money-dollar-circle-fill" disabled value={props.subtotal} />
      <div className="flex gap-4 mt-2">
        <Button value="EDITAR" outlined />
        <Button value="FINALIZAR" />
      </div>
      <button className="absolute top-3 right-3">
        <i className="ri-close-fill p-1 bg-red rounded-md text-white hover:brightness-125 ease-in duration-100 focus:brightness-125"></i>
      </button>
    </div>
  );
}
