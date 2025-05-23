import React, { useState } from "react"
import "./PagAtendimentos.css"
import Sidebar from "../components/SideBar/SideBar"
import CardPerfil from "../components/card-perfil/cardPerfil"
import TabelaComBusca from "../components/TabelaComBusca/TabelaComBusca"

export default function PagAtendimentos() {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)

  const handleLinhaClicada = (usuario) => {
    setUsuarioSelecionado(usuario)
  }

  const fecharPerfil = () => {
    setUsuarioSelecionado(null)
  }

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="main-content">
        <div className="dashboard-container container-fluid min-vh-100 p-4">
          <div className="row">
            <div className="col-lg-9">
              <TabelaComBusca onLinhaClicada={handleLinhaClicada} />
            </div>

            {usuarioSelecionado && (
              <CardPerfil
                name={usuarioSelecionado.nome}
                email={usuarioSelecionado.email}
                profissao={usuarioSelecionado.profissao}
                formacao={usuarioSelecionado.formacao}
                onFechar={fecharPerfil}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}