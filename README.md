# Sistema de Gerenciamento de Atendimentos - CESAR

Este projeto consiste em uma aplicação web desenvolvida para auxiliar psicopedagogos da empresa CESAR no gerenciamento de atendimentos realizados com seus pacientes.

A aplicação foi construída utilizando as tecnologias HTML, CSS, React e Bootstrap. Para simulação de um backend, foi utilizado o JSON Server.

## Tecnologias Utilizadas

- HTML5
- CSS3
- Bootstrap
- React.js
- JSON Server

## Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
npm install -g json-server
```

### 3. Execute o projeto

Abra dois terminais e execute os seguintes comandos:

#### Terminal 1 - Aplicação Frontend

```bash
npm run dev
```

#### Terminal 2 - Servidor Backend Fake

```bash
json-server --watch src/api/api.json --port 3000
```

## Estrutura do Projeto

```
src/
├── api/
│   └── api.json           # Base de dados fake (JSON Server)
├── components/            # Componentes reutilizáveis
├── pages/                 # Páginas principais da aplicação
├── styles/                # Arquivos CSS
├── App.jsx                # Componente principal
└── main.jsx               # Ponto de entrada da aplicação
```

## Funcionalidades

- Registro de atendimentos
- Consulta de histórico de pacientes
- Interface com navegação simples e responsiva

## Considerações

- Este projeto utiliza uma API simulada com JSON Server, útil para testes de funcionalidades de frontend.
- Verifique se a porta 3000 está disponível para o servidor e se o ambiente está configurado corretamente.
