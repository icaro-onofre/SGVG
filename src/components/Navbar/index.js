import React, { useState, Component } from 'react';
import Slide from 'react-reveal/Slide';
import { useAtom } from 'jotai';
import { colapsed } from 'store.js';
import { email, name, root } from 'store.js';

import Icon from 'components/Atoms/Icon';
import AvatarIcon from 'components/Atoms/AvatarIcon';
import NavLink from 'components/Atoms/NavLink';

export default function Navbar(props) {
  const [fold, setFold] = useAtom(colapsed);
  const handleSetFold = () => setFold(!fold);
  const [userRoot, setUserRoot] = useAtom(root);

  return (
    <div>
      <div
        className={`absolute z-40 opacity-40 bg-black dark:opacity-75 h-full w-full ${!fold ? 'hidden' : ''}`}
        onClick={handleSetFold}
      />
      <Slide left when={fold}>
        <div className={`absolute z-50 h-full w-80 bg-white dark:bg-dark_grey ${!fold ? 'hidden' : ''}`}>
          <div className="relative w-full">
            <i
              className="absolute ri-arrow-left-s-line ri-lg top-3 right-3 p-2 cursor-pointer text-black dark:text-dark_white"
              onClick={handleSetFold}
            ></i>
          </div>
          <div className="divide-jade/[0.2] dark:divide-dark_white/[0.2] divide-y divide-solid">
            <div className="flex items-center gap-4 px-6 mt-6">
              <AvatarIcon image={props.image} />

              <div>
                <h2 className="font-heading text-sm text-black dark:text-dark_white">{props.name}</h2>
                <span className="font-body text-xs text-black dark:text-dark_white">{props.email}</span>
              </div>
            </div>
            <div className="px-4 mt-6">
              <NavLink icon="home-3" category="Página Inicial" route="" line />
            </div>

            <div className="px-4">
              {userRoot ? <NavLink icon="group" category="Funcionários" route="funcionario" line /> : <div></div>}
              <NavLink icon="group" category="Clientes" route="cliente" line />
              <NavLink icon="car" category="Veículos" route="veiculo" line />
              {userRoot ? <NavLink icon="parking-box" category="Vagas" route="vaga" line /> : <div></div>}
              <NavLink icon="calendar-todo" category="Agendamentos" route="agendamento" line />
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
