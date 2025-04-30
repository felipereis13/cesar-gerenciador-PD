import React, { useState } from "react"
import "./TabelaComBusca.css"

const data = [
  {
    matricula: "000001",
    nome: "Teresa Helena Moury Fernandes Reis de Melo",
    cpf: "108.104.108-52",
    email: "teresa@cesar.com",
  },
  {
    matricula: "000002",
    nome: "Ana",
    cpf: "208.204.208-52",
    email: "ana@example.com",
  },
]

export default function TabelaComBusca() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter(
    (item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.matricula.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cpf.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="tabelaPadra">
      <input
        className="form-control search-box"
        id="searchInput"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table className="table table-hover">
        <thead className="table-dark">
          <tr className="table-dark">
            <th scope="col">Matricula</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Email</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.matricula}>
              <td>{item.matricula}</td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <button className="btn btn-success btn-sm">
                  Novo Atendimento
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
