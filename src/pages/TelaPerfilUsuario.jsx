import React, { useState } from "react"
import Sidebar from "../components/SideBar/SideBar"
import "./TelaPerfilUsuario.css"

export default function TelaPerfilUsuario() {
  const [editando, setEditando] = useState(false)
  const [sucesso, setSucesso] = useState(false)

  const habilitarEdicao = () => setEditando(true)

  const salvarFormulario = (e) => {
    e.preventDefault()
    setEditando(false)
    setSucesso(true)
    setTimeout(() => setSucesso(false), 3000)
  }

  return (
    <div className="body">
      <Sidebar />
      <div className="content">
        <h1>Perfil do Usuário</h1>
        <div className="profile-box">
          <div className="d-flex align-center justify-content-center mb-3">
            <img
              className="profile-avatar"
              src="https://via.placeholder.com/120"
              alt="M"
            />
            <div>
              <button
                type="button"
                className="btn btn-orange btn-sm"
                onClick={habilitarEdicao}
              >
                Editar Perfil
              </button>
            </div>
          </div>

          <form onSubmit={salvarFormulario}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome Completo
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                defaultValue="Maria da Silva"
                disabled={!editando}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                defaultValue="maria.silva@email.com"
                disabled={!editando}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="senha"
                placeholder="••••••••"
                disabled={!editando}
              />
            </div>
            {editando && (
              <button type="submit" className="btn btn-orange">
                Salvar Alterações
              </button>
            )}
            {sucesso && (
              <div className="alert alert-success mt-3">
                Alterações salvas com sucesso!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
