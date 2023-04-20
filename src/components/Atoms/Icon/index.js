import React from 'react';

export default function Icon(props) {
  return (
    <button
      className="w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-black/[0.08] ease-in duration-75"
      onClick={props.onClick}
    >
      <i className={`ri-${props.icon}-${props.line ? 'line' : 'fill'} ri-lg `}></i>
    </button>
  );
}
