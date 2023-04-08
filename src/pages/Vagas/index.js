import React, { useState } from 'react'
import VagaCard from '../../components/VagaCard'
import Legenda from '../../components/VagaCard/Legenda'


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
  'A36',
  'A37',
  'A38',
  'A39',
  'A40',
]

export default function Vagas() {
 
  

  return (
    <>
    <p className="mx-32 my-5 font-bold">STATUS DAS VAGAS</p>
    <div className="grid grid-cols-12 ">
    
      <div className="flex flex-row flex-wrap col-start-2  col-end-12 h-screen">
        
        {vagas.map((k, i) => {
          return <VagaCard nome={k} />
        })}
      
      </div>
      
    </div>
    <Legenda />
    </>
  )
}
