import React from "react"
import "./Dashboard.css"
import Sidebar from "../components/SideBar/SideBar"
import CardPerfil from "../components/card-perfil/cardPerfil"
import CardAtendimentos from "../components/Card-atendimentos/CardAtendimentos"
import Alert from "../components/Alert/Alert"

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      {/* Conteúdo principal */}
      <div className="main-content">
        <div className="dashboard-container container-fluid min-vh-100 p-4">
          {/* Alert */}
          <Alert tipo={"warning"}>
            <div>
              <strong>Oi Ana</strong>,{" "}
              <strong>Deseja começar um novo atendimento?</strong>. Caso ainda
              não tenha, pode ser um fictício, apenas para testar.
            </div>
            <a href="/atendimentos">
              <button className="btn btn-success">+ Novo atendimento</button>
            </a>
          </Alert>
          <div className="row">
            {/* Perfil */}
            <CardPerfil
              name={"Ana"}
              email={"Ana@cesar.com"}
              profissao={"Psicoterapeuta"}
              formacao={"Psicologia"}
            />

            {/* Painéis principais */}
            <div className="col-lg-9">
              <div className="row">
                <CardAtendimentos
                  cardAtendimentoNome={"Atendimentos diários"}
                  cardAtendimentoValor={"0"}
                  cardAtendimentoLink={"Ver mais"}
                />
                <CardAtendimentos
                  cardAtendimentoNome={"Atendimentos mensais"}
                  cardAtendimentoValor={"0"}
                  cardAtendimentoLink={"Ver mais"}
                />
                <CardAtendimentos
                  cardAtendimentoNome={"Atendimentos Pendentes"}
                  cardAtendimentoValor={"0"}
                  cardAtendimentoLink={"Ver mais"}
                  cssValorPersonalizado={"cor-valor-atendimentos-pendentes"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
