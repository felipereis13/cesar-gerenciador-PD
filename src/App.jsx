// src/App.jsx
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PagHistorico from "./pages/Historico"
import PagAtendimentos from "./pages/PagAtendimentos"
import Login from "./components/Login/Login"
import TelaPerfilUsuario from "./pages/TelaPerfilUsuario"
import Recuperacao from "./pages/Recuperacao"
import Calendario from "./pages/Calendario"
import CadastroPaciente from "./pages/CadastroPaciente"
import "./App.css"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/paghistorico" element={<PagHistorico />} />
        <Route path="/atendimentos" element={<PagAtendimentos />} />
        <Route path="/perfil" element={<TelaPerfilUsuario />} />
        <Route path="/recuperacao" element={<Recuperacao />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/cadastro" element={<CadastroPaciente />} />
      </Routes>
    </div>
  )
}
