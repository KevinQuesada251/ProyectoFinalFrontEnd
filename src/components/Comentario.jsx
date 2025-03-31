import React from 'react'
import "../styles/Comentario.css"
function Comentario({imgPerfil,nombreUsuario,comentario,fechaComentario}) {
  return (
    <>
        <div className='containerComentarios'>
            <section >
                <img className='imgComentario' src={imgPerfil} alt="" width={60}/>
            </section>
            <div>
                {nombreUsuario} <br />
                {fechaComentario} <br />
            </div>
            <article>
                    {comentario}
            </article>
        </div>
    </>
  )
}

export default Comentario