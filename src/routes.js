import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import TesteComponentes from './pages/TesteComponentes';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<TesteComponentes />} />
      </Routes>
    </BrowserRouter>
  );
}
