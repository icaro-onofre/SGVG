import React, { Component } from 'react';
import AvatarIcon from '../Atoms/AvatarIcon';
import NavLink from '../Atoms/NavLink';

export default class index extends Component {
  render() {
    return (
      <div className="absolute w-screen h-screen bg-black/[0.85] z-100 inset-0">
        <div className="w-fit h-screen bg-white">
          <div className="divide-jade/[0.2] divide-y divide-solid">
            <div className="flex items-center gap-4 p-6">
              <AvatarIcon />

              <div>
                <h2 className="font-heading text-sm">Jefferson Silva</h2>
                <span className="font-body text-xs">jefferson.tsilva@gmail.com</span>
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
      </div>
    );
  }
}
