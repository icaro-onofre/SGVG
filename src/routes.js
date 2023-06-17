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
import Config from 'pages/Config';
import { useAtom } from 'jotai';
import { email, name, root } from 'store.js';

let token = JSON.parse(localStorage.getItem('token'));

export default function Router() {
  function hasJWT() {
    let flag = false;

    //Checa a existência do JWT token
    localStorage.getItem('token') ? (flag = true) : (flag = false);

    return flag;
  }

  const [userEmail, setUserEmail] = useAtom(email);
  const [userName, setUserName] = useAtom(name);
  const [userRoot, setUserRoot] = useAtom(root);
  const userImage = 'https://picsum.photos/id/155/64';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/"
          element={
            <RouteGuard token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Home />
            </RouteGuard>
          }
        />
        <Route
          path="/funcionario"
          element={
            <RouteGuard token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Funcionario />
            </RouteGuard>
          }
        />
        <Route
          path="/vaga"
          element={
            <RouteGuard token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Vaga />
            </RouteGuard>
          }
        />
        <Route
          path="/veiculo"
          element={
            <RouteGuard token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Veiculo />
            </RouteGuard>
          }
        />
        <Route
          path="/cliente"
          element={
            <RouteGuard token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Cliente />
            </RouteGuard>
          }
        />
        <Route
          path="/agendamento"
          element={
            <RouteGuard token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Ocupacao />
            </RouteGuard>
          }
        />
        <Route
          path="/config"
          element={
            <RouteGuard token={hasJWT()}>
              <Navbar name={userName} email={userEmail} image={userImage} />
              <Header />
              <Config />
            </RouteGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
