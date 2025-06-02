import { useState } from "react";
import Sidebar from "../components/SideBar/SideBar";
import "./CadastroPaciente.css";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
registerLocale("pt-BR", ptBR);



function CadastroPaciente() {
  const [mostrarCurso, setMostrarCurso] = useState(true);
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contatoEmergencia, setContatoEmergencia] = useState("");
  const [dataNascimento, setDataNascimento] = useState(null);



  
  const handleSelectChange = (e) => {
  const selected = e.target.value;
  setCursoSelecionado(selected);
  if (selected !== "") {
    setMostrarCurso(false);
  }
  };

  const handleTelefoneChange = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{0,9}).*/, '($1) $2');
  setTelefone(value);
  };

  const handleContatoEmergenciaChange = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{0,9}).*/, '($1) $2');
  setContatoEmergencia(value);
  };

  
  const handleCpfChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);
    setCpf(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    data.turno = formData.getAll("turno")

    data.curso = cursoSelecionado

    data.matricula = formData.get("matricula")
    data.cpf = formData.get("cpf")
    console.log(data)

    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Paciente cadastrado com sucesso!")
          e.target.reset()
          setCursoSelecionado("")
          setMostrarCurso(true)
        } else {
          alert("Erro ao cadastrar.")
        }
      })
      .catch((err) => {
        console.error(err)
        alert("Erro na conexão.")
      })
      
  }

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="form formulario">
        <form onSubmit={handleSubmit}>
          <fieldset className="border p-4 rounded shadow-sm bg-white">
            <h3 className="text-center mb-4 titulo-principal">
              Cadastro de Paciente
            </h3>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Nome Completo: <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="nome"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Matrícula:<span className="text-danger"></span>
              </label>
              <input type="text" name="matricula" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                CPF:<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="cpf"
                className="form-control"
                value={cpf}
                onChange={handleCpfChange}
                placeholder="000.000.000-00"
                required
              />
            </div>
     
           
            <div className="mb-3">
              <label className="form-label fw-bold">
                Data de Nascimento: <span className="text-danger">*</span>
              </label>
              <p><DatePicker
                selected={dataNascimento}
                onChange={(date) => setDataNascimento(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
                placeholderText="Insira a data"
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
                required
                name="data_nascimento"
                locale={ptBR}
                isClearable
              />
              </p>
            </div>


            <div className="mb-3">
              <label className="form-label fw-bold">
                Nome do Responsável: <span className="text-danger">*</span>
              </label>
              <div className="text-danger mb-2 small">(Item será obrigatório caso o paciente seja menor de idade)*
              </div>
              <input
                type="text"
                name="NomeResponsavel"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Telefone: <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="telefone"
                className="form-control"
                value={telefone}
                onChange={handleTelefoneChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Telefone de Emergência:<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="contatoEmergencia"
                className="form-control"
                value={contatoEmergencia}
                onChange={handleContatoEmergenciaChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                E-mail: <span className="text-danger">*</span>
              </label>
              <input type="email" 
              name="email" 
              className="form-control" 
              placeholder="paciente@gmail.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Tipo de Vínculo: <span className="text-danger">*</span>
              </label>
              <select className="form-select" name="TipoDeVinculo">
                <option>Selecione uma das opções...</option>
                <option>Aluno</option>
                <option>Profissional do Cesar</option>
                <option>Outros</option>
              </select>
              <textarea
                name="mensagem"
                className="form-control mt-2"
                placeholder="Se a escolha for outros, informe o tipo de vínculo."
              />
            </div>

            <div className="mb-3">
             <label className="form-label fw-bold">Cursos:</label>
             <div className="text-danger mb-2 small">
               (Caso seja aluno do Cesar, marcar uma das opções)*
             </div>

             {mostrarCurso && (
               <select
                 name="curso"
                 className="form-select w-100"
                 onChange={handleSelectChange}
                 value={cursoSelecionado}
               >
                 <option value="">Selecione um curso...</option>
                 <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                 <option value="Design Gráfico">Design Gráfico</option>
                 <option value="Ciência da Computação">Ciência da Computação</option>
                 <option value="Sistemas de Informação">Sistemas de Informação</option>
                 <option value="Tecnologia em Banco de Dados">Tecnologia em Banco de Dados</option>
               </select>
             )}

             {!mostrarCurso && cursoSelecionado && (
               <div className="mt-2">
                 <p>
                   Curso Selecionado: {cursoSelecionado}{" "}
                   <button
                     type="button"
                     className="btn btn-link p-0"
                     onClick={() => setMostrarCurso(true)}
                   >
                     Alterar
                   </button>
                 </p>
               </div>
             )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
              Possui alguma neurodivergência? <span className="text-danger">*</span>
              </label>
            <div>
            <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="possui"
                    value="Sim"
                    required
                  />
                  <label className="form-check-label">Sim</label>
            </div>
            <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="possui"
                    value="Não"
                  />
                  <label className="form-check-label">Não</label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Turno: <span className="text-danger">*</span>
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="turno"
                    value="manha"
                    required
                  />
                  <label className="form-check-label">Manhã</label>
                </div>
              <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="turno"
                    value="tarde"
                  />
                  <label className="form-check-label">Tarde</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="turno"
                    value="noite"
                  />
                  <label className="form-check-label">Noite</label>
                </div>
              </div>
            </div>


            <div className="box-3">
              <button type="submit" className="btn btn-three" id="btn-enviar">
                Enviar
              </button>
            </div>

            <p className="mt-4 text-muted">
              <span className="text-danger">*</span> Campos Obrigatórios
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default CadastroPaciente