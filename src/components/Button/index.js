/**
 * @author dannesx
 *
 * Componente botão seguindo os padrões definidos do Figma (05/04/23).
 *
 * Props:
 * - value : String         Valor do botão, o que será escrito dentro do botão
 * - onClick : function     Função que será executada quando o botão for pressionado
 *
 * Atributos:
 * - outlined               Botão fica com fundo transparente e com bordas
 * - link                   Botão fica com aparência de um link
 *
 * OBS: Por padrão, o botão tem a aparência filled, bg-jade e text-white. Caso necessário mudar a cor do botão, poderemos implementar uma nova feature
 * */

import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return this.props.link ? (
      <button
        className="leading-none font-heading  font-extrabold text-jade dark:text-dark_jade hover:brightness-125 ease-in duration-100 focus:brightness-125 focus:outline-none"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    ) : (
      <button
        className={`rounded-xl  px-9 py-4 leading-none font-heading  font-extrabold ${
          this.props.outlined ? 'bg-transparent text-jade dark:text-dark_jade ring-solid ring-4 ring-jade dark:ring-dark_jade ring-inset' : 'bg-jade dark:bg-dark_jade text-white'
        } hover:brightness-125 ease-in duration-100 focus:brightness-125 focus:outline-none`}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
