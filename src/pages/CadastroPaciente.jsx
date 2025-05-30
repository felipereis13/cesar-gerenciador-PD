import { useState } from "react"
import SideBar from "../components/SideBar/SideBar"
import "./CadastroPaciente.css"

function CadastroPaciente() {
  const [mostrarCurso, setMostrarCurso] = useState(true)
  const [cursoSelecionado, setCursoSelecionado] = useState("")

  const handleSelectChange = (e) => {
    setCursoSelecionado(e.target.value)
    setMostrarCurso(false)
  }

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://cesar-gerenciador-pd.onrender.com"

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    data.turno = formData.getAll("turno")
    data.curso = cursoSelecionado
    data.matricula = formData.get("matricula")
    data.cpf = formData.get("cpf")

    fetch(`https://cesar-gerenciador-pd.onrender.com/usuarios`, {
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
    <div className="d-flex">
      <SideBar />
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
                Matrícula:<span className="text-danger">*</span>
              </label>
              <input type="text" name="matricula" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                CPF <span className="text-danger">*</span>
              </label>
              <input type="text" name="cpf" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Data de Nascimento: <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="data_nascimento"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Nome do Responsável: <span className="text-danger">*</span>
              </label>
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
              <input type="tel" name="telefone" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                E-mail: <span className="text-danger">*</span>
              </label>
              <input type="email" name="email" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Tipo de Vínculo: <span className="text-danger">*</span>
              </label>
              <select className="form-select" name="TipoDeVinculo">
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
                  <option value="Análise e Desenvolvimento de Sistemas">
                    Análise e Desenvolvimento de Sistemas
                  </option>
                  <option value="Design Gráfico">Design Gráfico</option>
                  <option value="Ciência da Computação">
                    Ciência da Computação
                  </option>
                  <option value="Sistemas de Informação">
                    Sistemas de Informação
                  </option>
                  <option value="Tecnologia em Banco de Dados">
                    Tecnologia em Banco de Dados
                  </option>
                </select>
              )}

              {!mostrarCurso && cursoSelecionado && (
                <div className="mt-2">
                  <p>Curso Selecionado: {cursoSelecionado}</p>
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Possui alguma neurodivergência?
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="possui"
                    value="Sim"
                    defaultChecked
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
                    type="checkbox"
                    name="turno"
                    value="manha"
                  />
                  <label className="form-check-label">Manhã</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="turno"
                    value="tarde"
                  />
                  <label className="form-check-label">Tarde</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="turno"
                    value="noite"
                  />
                  <label className="form-check-label">Noite</label>
                </div>
              </div>
            </div>

            <div className="d-flex gap-2 mt-4">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              <button type="reset" className="btn btn-secondary">
                Limpar
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
