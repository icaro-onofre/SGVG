import React, { useState, Component } from 'react';
import Slide from 'react-reveal/Slide';
import { useAtom } from 'jotai';
import { colapsed } from 'store.js';
import Icon from 'components/Atoms/Icon';
import AvatarIcon from 'components/Atoms/AvatarIcon';
import NavLink from 'components/Atoms/NavLink';

export default function Navbar(props) {
  const [fold, setFold] = useAtom(colapsed);
  const handleSetFold = () => setFold(!fold);

  return (
    <div>
      <div className={`absolute opacity-25 bg-black h-full w-full ${!fold ? 'hidden' : ''}`} onClick={handleSetFold} />
      <Slide left when={fold}>
        <div className={`absolute z-10 h-full w-80 z-50 bg-white ${!fold ? 'hidden' : ''}`}>
          <div className="relative w-full">
            <i
              className="absolute ri-arrow-left-s-line ri-lg top-3 right-3 p-2 cursor-pointer"
              onClick={handleSetFold}
            ></i>
          </div>
          <div className="divide-jade/[0.2] divide-y divide-solid">
            <div className="flex items-center gap-4 p-6">
              <AvatarIcon image={props.image} />

              <div>
                <h2 className="font-heading text-sm">{props.name}</h2>
                <span className="font-body text-xs">{props.email}</span>
              </div>
            </div>

            <div className="p-4">
              <NavLink icon="group" category="Funcionários" route="funcionario" line />
              <NavLink icon="group" category="Clientes" route="cliente" line />
              <NavLink icon="car" category="Veículos" route="veiculo" line />
              <NavLink icon="parking-box" category="Vagas" route="vaga" line />
              <NavLink icon="calendar-todo" category="Agendamentos" route="agendamento" line />
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
