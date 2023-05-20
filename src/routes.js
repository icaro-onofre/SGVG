import { React, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import axiosInstance from 'services/axios';
import RouteGuard from 'components/RouteGuard/RouteGuard.js';

import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Funcionario from './pages/Funcionario';
import Vaga from './pages/Vaga';
import Veiculo from './pages/Veiculo';
import Cliente from './pages/Cliente';

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
        <Route
          path="/login"
          element={
            <RouteGuard token={hasJWT()}>
              <Login />
            </RouteGuard>
          }
        />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/"
          element={
            <RouteGuard token={hasJWT()}>
              <Home />
            </RouteGuard>
          }
        />
        <Route
          path="/funcionario"
          element={
            <RouteGuard token={hasJWT()}>
              <Funcionario />
            </RouteGuard>
          }
        />
        <Route
          path="/vaga"
          element={
            <RouteGuard token={hasJWT()}>
              <Vaga />
            </RouteGuard>
          }
        />
        <Route
          path="/veiculo"
          element={
            <RouteGuard token={hasJWT()}>
              <Veiculo />
            </RouteGuard>
          }
        />
        <Route
          path="/cliente"
          element={
            <RouteGuard token={hasJWT()}>
              <Cliente />
            </RouteGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
