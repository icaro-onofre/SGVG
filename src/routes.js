import { React, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import axiosInstance from 'services/axios';
import RouteGuard from 'components/RouteGuard/RouteGuard.js';

import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';

let token = JSON.parse(localStorage.getItem('token'));

export default function Router() {
  function hasJWT() {
    let flag = false;

    //Checa a existência do JWT token
    localStorage.getItem('token') ? (flag = true) : (flag = false);

    return flag;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/vagas"
          element={
            <RouteGuard token={hasJWT()}>
              <Home/>
            </RouteGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
