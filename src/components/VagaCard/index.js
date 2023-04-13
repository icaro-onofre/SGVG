import React, { useState } from 'react'

export default function VagaCard(props) {
  return (
    <div className="h-16  w-16 bg-red rounded-lg m-4">
      <div className="flex items-center justify-center text-white m-5 text-center">{props.nome}</div>
    </div>
  )
}
