import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../routes/Login/Login.jsx";
import Home from "../routes/Home/Home.jsx";
import Cadastro from "../routes/Cadastro/Cadastro.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
