import React from "react";
import Sidebar from "../components/SideBar/SideBar";
import "./Historico.css";

export default function PagHistorico() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="main-content">
  <div className="dashboard-container container-fluid min-vh-100 p-4">
    <div className="text-center mb-3">
      <h2 className="titulo-historico">Histórico de Atendimentos</h2>
      <input
        type="text"
        className="form-control mx-auto search-bar"
        placeholder="Pesquisar atendimento..."
        style={{ maxWidth: "1000px" }}
      />
    </div>

          <div className="d-flex gap-4">
            {/* Mensagens */}
            <div className="flex-grow-1 bg-white rounded shadow-sm p-4">
              <div className="text-center text-success fw-semibold mb-3">Data 10/11</div>
              <div className="d-flex justify-content-end mb-4">
                <div className="bg-light p-3 rounded w-75">
                  Surgiu um imprevisto e não poderei participar da consulta de hoje. Pode remarcar?
                </div>
              </div>

              <div className="text-center text-success fw-semibold mb-3">Data 11/11</div>
              <div className="d-flex align-items-start gap-2 mb-4">
                <img src="/avatar.png" alt="avatar" className="rounded-circle" width={30} />
                <div>
                  <div className="bg-light p-3 rounded">Atendimento adiado para noite</div>
                  <small className="text-muted">08:45 AM • Psicólogo Manhã</small>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-success w-100">Iniciar Atendimento</button>
              </div>
            </div>

            {/* Perfil */}
            <div className="bg-white rounded shadow-sm p-4" style={{ width: "300px" }}>
              <div className="d-flex align-items-center mb-3">
                <img src="/user.png" alt="user" className="rounded-circle me-3" width={50} />
                <div>
                  <div className="fw-bold">Nome do Aluno</div>
                  <small className="text-muted">Aluno</small>
                </div>
              </div>
              <div className="text-muted small mb-2">MATRÍCULA: EL40D15</div>
              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-telephone text-warning"></i>
                <i className="bi bi-envelope text-warning"></i>
                <i className="bi bi-folder text-warning"></i>
              </div>
              <div className="small">
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Idade:</span>
                  <span>22</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Gênero:</span>
                  <span>Masculino</span>
                </div>
                <div className="text-muted mt-3">Outros</div>
                <div>Outros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
