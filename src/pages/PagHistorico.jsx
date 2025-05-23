import React from "react"
import "./PagHistorico.css"
import Sidebar from "../components/SideBar/SideBar"
import CardPerfil from "../components/card-perfil/cardPerfil"

export default function HistoricoAtendimentos() {
    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <div className="main-content">
                <div className="dashboard-container container-fluid min-vh-100 p-4">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="prontuario-container">
                                <div className="text-center mb-4">
                                    <h1 className="prontuario-title">Histórico de Atendimento</h1>
                                </div>
                                
                                {/* Linha do tempo de atendimentos */}
                                <div className="timeline">
                                    {/* Item 1 - Avaliação */}
                                    <div className="timeline-item avaliacao">
                                        <div className="timeline-header">
                                            <h3>Avaliação Inicial</h3>
                                            <div className="timeline-meta">
                                                <span className="timeline-date">15/05/2024 14:30</span>
                                                <span className="timeline-profissional">Psicóloga Dra. Ana Silva</span>
                                            </div>
                                        </div>
                                        <div className="timeline-content">
                                            <p>
                                                Paciente relatou ansiedade generalizada e dificuldades para dormir. 
                                                Apresenta sintomas há aproximadamente 6 meses. 
                                                Foi aplicado teste de ansiedade (GAD-7) com pontuação 15 (ansiedade moderada a grave).
                                            </p>
                                            <button className="btn btn-outline-primary btn-sm mt-2">
                                                Ver avaliação completa
                                            </button>
                                        </div>
                                    </div>

                                    {/* Item 2 - Atendimento */}
                                    <div className="timeline-item atendimento">
                                        <div className="timeline-header">
                                            <h3>Sessão Terapêutica</h3>
                                            <div className="timeline-meta">
                                                <span className="timeline-date">22/05/2024 16:00</span>
                                                <span className="timeline-profissional">Psicólogo Dr. Carlos Mendes</span>
                                            </div>
                                        </div>
                                        <div className="timeline-content">
                                            <p>
                                                Trabalhada técnica de respiração diafragmática. 
                                                Paciente respondeu bem aos exercícios. 
                                                Combinado registro de pensamentos automáticos para próxima sessão.
                                            </p>
                                            <button className="btn btn-outline-secondary btn-sm mt-2">
                                                Ver detalhes
                                            </button>
                                        </div>
                                    </div>

                                    {/* Item 3 - Reagendamento */}
                                    <div className="timeline-item reagendamento">
                                        <div className="timeline-header">
                                            <h3>Reagendamento</h3>
                                            <div className="timeline-meta">
                                                <span className="timeline-date">25/05/2024 09:15</span>
                                                <span className="timeline-profissional">Secretária Maria</span>
                                            </div>
                                        </div>
                                        <div className="timeline-content">
                                            <p>
                                                Consulta de 28/05 remarcada para 30/05 às 17h devido a compromisso profissional do paciente.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 4 - Evolução */}
                                    <div className="timeline-item evolucao">
                                        <div className="timeline-header">
                                            <h3>Evolução</h3>
                                            <div className="timeline-meta">
                                                <span className="timeline-date">30/05/2024 17:00</span>
                                                <span className="timeline-profissional">Psicóloga Dra. Ana Silva</span>
                                            </div>
                                        </div>
                                        <div className="timeline-content">
                                            <p>
                                                Paciente relatou melhora na qualidade do sono após exercícios de relaxamento. 
                                                Pontuação no GAD-7 reduziu para 11 (ansiedade moderada). 
                                                Iniciada abordagem cognitiva sobre padrões de pensamento.
                                            </p>
                                            <button className="btn btn-outline-primary btn-sm mt-2">
                                                Ver evolução
                                            </button>
                                        </div>
                                    </div>
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
    );
}