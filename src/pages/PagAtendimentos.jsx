import React from "react"
import "./PagAtendimentos.css"
import Sidebar from "../components/SideBar/SideBar"
import CardPerfil from "../components/card-perfil/cardPerfil"
import TabelaComBusca from "../components/TabelaComBusca/TabelaComBusca"

export default function PagAtendimentos() {
  console.log("Componente PagAtendimentos carregado!")
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      {/* Conteúdo principal */}
      <div className="main-content">
        <div className="dashboard-container container-fluid min-vh-100 p-4">
          {/* Busca */}
          <div className="row">
            <div className="col-lg-9">
              <TabelaComBusca/>
            </div>
            <CardPerfil
              name={"Gabriel"}
              email={"Gabriel@cesar.com"}
              profissao={"Estudante"}
              formacao={"Ciências da Computação"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
