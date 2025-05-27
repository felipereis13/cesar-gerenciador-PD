// src/pages/Agendamento.jsx
import React from 'react';
import Sidebar from "../components/SideBar/SideBar"
import './Agendamento.css'; // Importa o CSS específico para esta página

const Agendamento = () => {
  return (
    // Esta div é o contêiner principal de toda a aplicação, usando d-flex para organizar Sidebar e Conteúdo
    <div className="app-container d-flex"> 
      
      {/* O componente Sidebar será o primeiro item flex e terá largura fixa */}
      <Sidebar /> 

      {/* Este é o contêiner para o conteúdo principal da página de agendamento */}
      <div className="main-content-agendamento flex-grow-1"> 
        <h1>Página de Agendamento</h1>
        <p>Aqui você pode agendar seus atendimentos.</p>
        
        <div className="agendamento-form-section">
          <p>Selecione a data e hora desejada:</p>
          <input type="date" className="form-control" />
          <input type="time" className="form-control mt-3" />
          <button className="btn btn-primary mt-4">Agendar</button>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;