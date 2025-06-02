import React from "react"
import "./CardPerfil.css" // Importação do CSS
import { CgAttachment } from "react-icons/cg"
import { FaHistory, FaComments, FaCalendarAlt } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5"

export default function CardPerfil(props) {
  return (
    <div className="col-lg-3 mb-4">
      <div className="profile-card card">
        <button
          className="btn-close position-absolute top-0 end-0 m-2"
          aria-label="Fechar"
          onClick={props.onFechar}
        />
        <div className="card-body">
          <div className="profile-avatar">
            <img
              src="/Img-Card-Perfil/alunoPerfilAluno.png"
              alt=""
              id="imgAvatar"
            />
          </div>
          <div className="profile-info-card-container">
            <div className="profile-info-card">
              <p>
                <strong>Nome:</strong> {props.name}
              </p>
              <p className="">
                <strong>Email:</strong> {props.email}
              </p>
              <p className="">
                <strong>Profissão:</strong> {props.profissao || "Não informado"}
              </p>
              <p className="">
                <strong>Formação:</strong> {props.formacao || "Não informado"}
              </p>
            </div>
          </div>
          <div className="icon text-center p-4">
            <a href="/anexos ">
              <CgAttachment className="#" />
            </a>
            <a href="/historico">
              <FaHistory className="#" />
            </a>
            <a href="/DescricaoAtendimentos">
              <FaComments className="#" />
            </a>
            <a href="/CalendarioAgenda">
              <FaCalendarAlt className="#" />
            </a>
            <div className="configuracao pt-5">
              <a href="/perfil">
                <IoSettingsSharp className="configuracao m-1" />
                Editar Perfil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
