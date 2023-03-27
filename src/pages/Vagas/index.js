import React, { useState } from 'react'
import VagaCard from '../../components/VagaCard'

let vagas = [
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
  'A7',
  'A8',
  'A9',
  'A10',
  'A11',
  'A12',
  'A13',
  'A14',
  'A15',
  'A16',
  'A17',
  'A18',
  'A19',
  'A20',
  'A21',
  'A22',
  'A23',
  'A24',
  'A25',
  'A26',
  'A27',
  'A28',
  'A29',
  'A30',
  'A31',
  'A32',
  'A33',
  'A34',
  'A35',
]
//A navbar não precisa ser implementada agora pois ela será um componente padrão para todas as telas.
// Voce pode fazer a task de tela de vagas e do componente do card da vaga na mesma branch!
// Só colocar o nome da branch de acordo pra sinalizar.
export default function Vagas() {
  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-row flex-wrap col-start-2  col-end-11  space-x-3 h-screen">
        {vagas.map((k, i) => {
          return <VagaCard nome={k} />
        })}
      </div>
    </div>
  )
}
