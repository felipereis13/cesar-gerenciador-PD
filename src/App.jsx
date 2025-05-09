// src/App.jsx
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PagAtendimentos from "./pages/PagAtendimentos"
import Login from "./components/Login/Login"
import TelaPerfilUsuario from "./pages/TelaPerfilUsuario"
import Recuperacao from "./pages/Recuperacao"
import "./App.css"
//* comentario teste */
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/atendimentos" element={<PagAtendimentos />} />
        <Route path="/perfil" element={<TelaPerfilUsuario />} />
        <Route path="/recuperacao" element={<Recuperacao />} />
      </Routes>
    </div>
  )
}
