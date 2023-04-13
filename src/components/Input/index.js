/**
 * @author dannesx
 * 
 * Componente input seguindo os padrões definidos do Figma (12/04/23).
 * 
 * Props:
 * - type : String              Tipo do input. Ex: text, password, number etc
 * - placeholder : String       Mensagem que aparecerá no placeholder do input
 * - leftIcon : String | null   Se !null, renderiza o icone da biblioteca Remix Icon no canto esquerdo do input
 * - rightIcon : String | null   Se !null, renderiza o icone da biblioteca Remix Icon no canto direito do input
 */

import React from 'react';

export default function Input(props) {
  return (
    <div className="relative">
      {props.leftIcon ? (
        <i className={`ri-${props.leftIcon} absolute inset-y-0 left-0 pl-3 flex items-center text-black/[.6]`}></i>
      ) : (
        ''
      )}
      <input
        type={props.type}
        className="block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
        placeholder={props.placeholder}
      />
      {props.rightIcon ? (
        <i className={`ri-${props.rightIcon} absolute inset-y-0 right-0 pr-3 flex items-center text-black/[.6]`}></i>
      ) : (
        ''
      )}
    </div>
  );
}
