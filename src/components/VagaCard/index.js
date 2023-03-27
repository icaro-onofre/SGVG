import React, { useState } from 'react'

export default function VagaCard(props) {
  {
    /* Aqui sera necessario definir as props da lógica do componente, 
	  o componente deve alterar sua cor com base em seu estado */
  }
  return (
    <div className="h-28  w-28 bg-card_red rounded-lg">
      <div className="flex items-center justify-center text-white m-auto">{props.nome}</div>
    </div>
  )
}
