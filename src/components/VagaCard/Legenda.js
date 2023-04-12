import React, { useState } from 'react'

export default function Legenda() {
    return (
        <div className='flex flex-row items-center mx-32 w-screen'>
            <div className='h-9 w-9 bg-card_green rounded-lg m-3'></div><p className='mr-10'>Livre</p> 
            <div className='h-9 w-9 bg-card_red rounded-lg m-3'></div><p className='mr-10'>Ocupado</p> 
            <div className='h-9 w-9 bg-card_blue rounded-lg m-3'></div><p className='mr-10'>Agendado</p>
            <div className='h-9 w-9 bg-card_orange rounded-lg m-3'></div><p className='mr-10'>Próximo do Vencimento</p>  
            <div className='h-9 w-9 bg-grey_light rounded-lg m-3'></div><p className='mr-10'>Desativado</p> 
        </div>
        
    )
}