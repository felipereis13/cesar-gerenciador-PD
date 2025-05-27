import React, { useEffect, useState } from "react"
import "./PagHistorico.css"
import SideBar from "../components/SideBar/SideBar"
import CardPerfil from "../components/card-perfil/cardPerfil"

export default function HistoricoAtendimentos() {
  const [descricoes, setDescricoes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/descricaoAtendimentos")
      .then((res) => res.json())
      .then((data) => {
        setDescricoes(data.reverse()) // mostra os mais recentes primeiro
      })
      .catch((err) => console.error("Erro ao carregar descrições:", err))
  }, [])

  return (
    <div className="dashboard-wrapper">
      <SideBar />
      <div className="main-content">
        <div className="dashboard-container container-fluid min-vh-100 p-4">
          <div className="row">
            <div className="col-lg-9">
              <div className="prontuario-container">
                <div className="text-center mb-4">
                  <h1 className="prontuario-title">Histórico de Atendimento</h1>
                </div>

                <div className="timeline">
                  {/* Renderizando dados do JSON Server */}
                  {descricoes.map((item, index) => (
                    <div key={index} className="timeline-item atendimento">
                      <div className="timeline-header">
                        <h3>Atendimento Registrado</h3>
                        <div className="timeline-meta">
                          <span className="timeline-date">
                            {item.data || "Data não informada"}
                          </span>
                          <span className="timeline-profissional">
                            Profissional não informado
                          </span>
                        </div>
                      </div>
                      <div className="timeline-content">
                        <p>{item.texto}</p>
                        <button className="btn btn-outline-secondary btn-sm mt-2">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <button className="btn btn-success">
                    Iniciar Novo Atendimento
                  </button>
                </div>
              </div>
            </div>

            <CardPerfil
              name={"Gabriel Costa"}
              email={"gabriel.costa@email.com"}
              profissao={"Paciente"}
              formacao={"Matrícula: PSI20240501"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
