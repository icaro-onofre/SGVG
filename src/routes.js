import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

export default function Router() {
	return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Cadastro' element={<Cadastro/>} />
            </Routes>
        </BrowserRouter>
	);
}

