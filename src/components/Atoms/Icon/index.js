import React from 'react';

export default function Icon(props) {
  return (
    <button
      className="w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-black/[0.08] hover:dark:bg-dark_white/[0.1] ease-in duration-75"
      onClick={props.onClick}
    >
      <i className={`ri-${props.icon}-${props.line ? 'line' : 'fill'} ri-lg text-black dark:text-dark_white`}></i>
    </button>
  );
}
