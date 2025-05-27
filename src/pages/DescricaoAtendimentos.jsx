import React from "react"
import "./PagAtendimentos.css"
import Sidebar from "../components/SideBar/SideBar"
import CardPerfil from "../components/card-perfil/CardPerfil"
import ComentarioBox from "../components/ComentarioBox/ComentarioBox";

export default function PagAtendimentos() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      {/* Conteúdo principal */}
        <div className="dashboard-container container-fluid min-vh-100 p-4">
              <div className="card-lateral d-flex " > 
            <div className="comentario-area"> <ComentarioBox /> </div>
              <CardPerfil
              name={"Gabriel"}
              email={"Gabriel@cesar.com"}
              profissao={"Estudante"}
              formacao={"Ciências da Computação"}
            />
          </div>
        </div>
    </div>
  )
}
