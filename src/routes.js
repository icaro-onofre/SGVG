import { React, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import axiosInstance from 'services/axios';
import RouteGuard from 'components/RouteGuard/RouteGuard.js';

import Header from 'components/Header';
import Navbar from 'components/Navbar';

import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Funcionario from './pages/Funcionario';
import Vaga from './pages/Vaga';
import Veiculo from './pages/Veiculo';
import Cliente from './pages/Cliente';
import Ocupacao from './pages/Ocupacao';
import Recuperacao from './pages/Recuperacao';

let token = JSON.parse(localStorage.getItem('token'));

export default function Router() {
  function hasJWT() {
    let flag = false;

    //Checa a existência do JWT token
    localStorage.getItem('token') ? (flag = true) : (flag = false);

    return flag;
  }

  // fazer uma func pra pegar os dados do usuario
  const userName = 'Icaro Onofre';
  const userEmail = 'icarolindo@gmail.com';
  const userImage = 'https://picsum.photos/id/155/64';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/"
          element={
            <div token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/funcionario"
          element={
            <div token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Funcionario />
            </div>
          }
        />
        <Route
          path="/vaga"
          element={
            <div token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Vaga />
            </div>
          }
        />
        <Route
          path="/veiculo"
          element={
            <div token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Veiculo />
            </div>
          }
        />
        <Route
          path="/cliente"
          element={
            <div token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Cliente />
            </div>
          }
        />
        <Route
          path="/agendamento"
          element={
            <div token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Ocupacao/>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
