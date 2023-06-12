/**
 * @author dannesx
 *
 * Componente input seguindo os padrões definidos do Figma (12/04/23).
 *
 * Props:
 * - type : String              Tipo do input. Ex: text, password, number etc
 * - placeholder : String       Mensagem que aparecerá no placeholder do input
 * - icon : String | null   Se !null, renderiza o icone da biblioteca Remix Icon no canto esquerdo do input
 * - rightIcon : String | null   Se !null, renderiza o icone da biblioteca Remix Icon no canto direito do input
 */

import React, { useState } from 'react';

export default function Input(props) {
  const [hidden, setHidden] = useState(true);

  function handleHidden() {
    setHidden(!hidden);
  }

  return (
    <div className="relative">
      {props.password ? (
        <i
          onClick={handleHidden}
          className={`ri-eye${hidden ? '-off' : ''}-line absolute top-3 right-4 cursor-pointer`}
        ></i>
      ) : (
        ''
      )}
      <input
        id={props.placeholder}
        name={props.placeholder}
        type={props.password ? (hidden ? 'password' : 'text') : props.type}
        className="block w-full rounded-lg px-9 py-4 leading-none font-body text bg-jade/[.15] focus:bg-white focus:dark:bg-dark_black text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade dark:focus:ring-dark_jade ring-inset ease-in duration-100 focus:outline-none peer text-black dark:text-dark_white"
        onChange={props.onChange}
        placeholder=" "
      />
      <label
        className="absolute left-0 -top-3 scale-75 px-3 rounded-lg bg-jade dark:bg-dark_jade text-white dark:text-dark_white duration-300 peer-focus:bg-white dark:peer-focus:bg-dark_black  peer-focus:text-jade dark:peer-focus:text-dark_jade peer-focus:left-2 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-2 peer-placeholder-shown:bg-jade/[0] peer-placeholder-shown:text-jade dark:peer-placeholder-shown:text-dark_jade"
        htmlFor={props.placeholder}
      >
        {props.icon ? <i className={`ri-${props.icon} mr-1`}></i> : ''}
        {props.placeholder}
      </label>
    </div>
  );
}
