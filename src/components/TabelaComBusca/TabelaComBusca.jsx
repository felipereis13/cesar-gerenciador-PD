import React, { useState } from "react"
import "./TabelaComBusca.css"

const data = [
  {
    matricula: "000001",
    nome: "Teresa Helena  Fernandes",
    cpf: "108.104.108-52",
    email: "teresa@cesar.com",
  },
  {
    matricula: "000002",
    nome: "Ana",
    cpf: "208.204.208-52",
    email: "ana@example.com",
  },
    {
      matricula: "000003",
      nome: "Carlos Eduardo",
      cpf: "309.305.309-53",
      email: "carlos@example.com",
    },
    {
      matricula: "000004",
      nome: "Mariana Silva",
      cpf: "410.406.410-54",
      email: "mariana@example.com",
    },
    {
      matricula: "000005",
      nome: "João Pedro",
      cpf: "511.507.511-55",
      email: "joao@example.com",
    },
    {
      matricula: "000006",
      nome: "Luiza Fernandes",
      cpf: "612.608.612-56",
      email: "luiza@example.com",
    },
    {
      matricula: "000007",
      nome: "Ricardo Almeida",
      cpf: "713.709.713-57",
      email: "ricardo@example.com",
    },
    {
      matricula: "000008",
      nome: "Fernanda Costa",
      cpf: "814.810.814-58",
      email: "fernanda@example.com",
    },
    {
      matricula: "000009",
      nome: "Gustavo Santos",
      cpf: "915.911.915-59",
      email: "gustavo@example.com",
    },
    {
      matricula: "000010",
      nome: "Patrícia Oliveira",
      cpf: "016.012.016-60",
      email: "patricia@example.com",
    },
    {
      matricula: "000011",
      nome: "Lucas Martins",
      cpf: "117.113.117-61",
      email: "lucas@example.com",
    },
    {
      matricula: "000012",
      nome: "Juliana Ribeiro",
      cpf: "218.214.218-62",
      email: "juliana@example.com",
    },
    {
      matricula: "000013",
      nome: "Roberto Nunes",
      cpf: "319.315.319-63",
      email: "roberto@example.com",
    },
    {
      matricula: "000014",
      nome: "Amanda Souza",
      cpf: "420.416.420-64",
      email: "amanda@example.com",
    },
    {
      matricula: "000015",
      nome: "Diego Lima",
      cpf: "521.517.521-65",
      email: "diego@example.com",
    },
    {
      matricula: "000016",
      nome: "Camila Castro",
      cpf: "622.618.622-66",
      email: "camila@example.com",
    },
    {
      matricula: "000017",
      nome: "Felipe Rocha",
      cpf: "723.719.723-67",
      email: "felipe@example.com",
    },
    {
      matricula: "000018",
      nome: "Isabela Gonçalves",
      cpf: "824.820.824-68",
      email: "isabela@example.com",
    },
    {
      matricula: "000019",
      nome: "Bruno Carvalho",
      cpf: "925.921.925-69",
      email: "bruno@example.com",
    },
    {
      matricula: "000020",
      nome: "Larissa Mendes",
      cpf: "026.022.026-70",
      email: "larissa@example.com",
    },
    {
      matricula: "000021",
      nome: "Rodrigo Barbosa",
      cpf: "127.123.127-71",
      email: "rodrigo@example.com",
    },
    {
      matricula: "000022",
      nome: "Vanessa Teixeira",
      cpf: "228.224.228-72",
      email: "vanessa@example.com",
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
    <div className="tabelaPadrao">
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
