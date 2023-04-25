import React from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

export default function OcuparVaga(props) {
  return (
    <div className="bg-white p-10 rounded-md flex flex-col gap-4 relative">
      <div className="flex flex-col items-center">
        <h2 className="font-heading font-bold text-2xl">VAGA: {props.vaga}</h2>
        <span className="font-body text-sm italic opacity-80">Status: Livre</span>
      </div>
      <Input type="text" placeholder="Cliente" leftIcon="user-fill" />
      <Input type="text" placeholder="Placa" leftIcon="car-fill" />
      <div className="flex gap-4 mt-2">
        <Button value="CANCELAR" outlined />
        <Button value="OCUPAR VAGA" />
      </div>
      <button className="absolute top-3 right-3">
        <i className="ri-close-fill p-1 bg-red rounded-md text-white hover:brightness-125 ease-in duration-100 focus:brightness-125"></i>
      </button>
    </div>
  );
}
