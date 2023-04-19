import React, { useState, Component } from 'react';
import { useAtom } from 'jotai';
import { colapsed } from 'store.js'; 
import AvatarIcon from 'components/Atoms/AvatarIcon';
import NavLink from 'components/Atoms/NavLink';

export default function Navbar(props) {

const [fold, setFold] = useAtom(colapsed);
const handleSetFold = () => setFold(!fold);

  return (
    <div className={"absolute w-screen h-screen z-100 inset-0"+ fold ? 'bg-black/[0.85]': '' } >
      {fold ? (
        <div></div>
      ) : (
        <div className="w-fit h-screen bg-white">
	      <button className="w-5 h-5 rounded-full bg-black"
	      onClick={handleSetFold}
	      > </button>
          <div className="divide-jade/[0.2] divide-y divide-solid">
            <div className="flex items-center gap-4 p-6">
              <AvatarIcon image={props.image} />

              <div>
                <h2 className="font-heading text-sm">{props.name}</h2>
                <span className="font-body text-xs">{props.email}</span>
              </div>
            </div>

            <div className="p-4">
              <NavLink icon="group" category="Funcionários" route="funcionarios" />
              <NavLink icon="group" category="Clientes" route="clientes" />
              <NavLink icon="car" category="Veículos" route="veiculos" />
              <NavLink icon="parking-box" category="Vagas" route="vagas" />
              <NavLink icon="remote-control" category="Sensores" route="sensores" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
