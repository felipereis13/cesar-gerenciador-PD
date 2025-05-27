// src/pages/Agendamento.jsx
import React from "react"
import SideBar from "../components/SideBar/SideBar"
import "./Agendamento.css"

const Agendamento = () => {
  return (
    <div className="app-container d-flex">
      <SideBar />

      <div className="main-content-agendamento flex-grow-1">
        <h1>Página de Agendamento</h1>
        <p>Aqui você pode agendar seus atendimentos.</p>

        <div className="agendamento-form-section">
          <p>Selecione a data e hora desejada:</p>
          <input type="date" className="form-control" id="form-agendamento" />
          <input
            type="time"
            className="form-control mt-3"
            id="form-agendamento"
          />
          <button className="btn btn-primary mt-4">Agendar</button>
        </div>
      </div>
    </div>
  )
}

export default Agendamento
