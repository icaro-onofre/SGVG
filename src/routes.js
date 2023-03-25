import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Vagas from "./pages/Vagas";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/vagas" element={<Vagas />} />
      </Routes>
    </BrowserRouter>
  );
}
