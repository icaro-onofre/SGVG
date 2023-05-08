import React, { useState } from 'react'

export default function Legenda() {
    return (
        <div className='absolute bottom-2 flex flex-row items-center mx-32'>
            <div className='h-9 w-9 bg-green rounded-lg m-3'></div><p className='mr-10'>Livre</p> 
            <div className='h-9 w-9 bg-red rounded-lg m-3'></div><p className='mr-10'>Ocupado</p> 
            <div className='h-9 w-9 bg-blue rounded-lg m-3'></div><p className='mr-10'>Agendado</p>
            <div className='h-9 w-9 bg-yellow rounded-lg m-3'></div><p className='mr-10'>Próximo do Vencimento</p>  
            <div className='h-9 w-9 bg-grey_light rounded-lg m-3'></div><p className='mr-10'>Desativado</p> 
        </div>
        
    )
}
