import React, { useState } from "react"
import "./ComentarioBox.css"

export default function ComentarioBox() {
  const [comentario, setComentario] = useState("")
  const [comentarios, setComentarios] = useState([])

  const handleAddComentario = () => {
    if (comentario.trim() === "") return

    setComentarios([...comentarios, { texto: comentario, id: Date.now() }])
    setComentario("")
  }

  return (
    <div className="comentario-box">
      <h3>Descrição de Atendimento:</h3>
      <textarea
        rows={10}
        cols={50}
        className="comentario-textarea"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escreva como foi o atendimento aqui..."
      />
      <button className="comentario-button" onClick={handleAddComentario}>
        Adicionar Descrição
      </button>
      <ul className="comentario-lista">
        {comentarios.map((item) => (
          <li key={item.id} className="comentario-item">
            {item.texto}
          </li>
        ))}
      </ul>
    </div>
  )
}
