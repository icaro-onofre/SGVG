import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vagas from './pages/Vagas'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Definindo  rota */}
        <Route path="/vagas" element={<Vagas />} />
      </Routes>
    </BrowserRouter>
  )
}
