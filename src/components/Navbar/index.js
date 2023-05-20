import React, { useState, Component } from 'react';
import { useAtom } from 'jotai';
import { colapsed } from 'store.js';
import Icon from 'components/Atoms/Icon';
import AvatarIcon from 'components/Atoms/AvatarIcon';
import NavLink from 'components/Atoms/NavLink';

export default function Navbar(props) {
  const [fold, setFold] = useAtom(colapsed);
  const handleSetFold = () => setFold(!fold);

  return (
    <div className={' inset-0' + fold ? 'bg-opacity-40' : ''}>
      {!fold ? (
        <div></div>
      ) : (
        <div className="">
          <div className="absolute  opacity-25 bg-black h-full w-full" />
          <div className={'absolute z-10 h-full w-1/5 bg-white'}>
            <Icon icon="menu" onClick={handleSetFold} />
            <div className="divide-jade/[0.2] divide-y divide-solid">
              <div className="flex items-center gap-4 p-6">
                <AvatarIcon image={props.image} />

                <div>
                  <h2 className="font-heading text-sm">{props.name}</h2>
                  <span className="font-body text-xs">{props.email}</span>
                </div>
              </div>

              <div className="p-4">
                <NavLink icon="group" category="Funcionários" route="funcionario" />
                <NavLink icon="group" category="Clientes" route="cliente" />
                <NavLink icon="car" category="Veículos" route="veiculo" />
                <NavLink icon="parking-box" category="Vagas" route="vaga" />
                <NavLink icon="remote-control" category="Sensores" route="sensore" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
