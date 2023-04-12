import React, { useState } from 'react'
import Vagas from '../../pages/Vagas'

export default function VagaCard(props) {
  {
    /* Aqui sera necessario definir as props da lógica do componente, 
	  o componente deve alterar sua cor com base em seu estado */
  }
  return (
    <div className="h-16  w-16 bg-card_red rounded-lg m-4">
      <div className="flex items-center justify-center text-white m-5 text-center">{props.nome}</div>
    </div>
  )
}
