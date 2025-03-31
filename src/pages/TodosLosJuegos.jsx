import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import Llamados from '../services/Llamados'
import "../styles/perfil.css"
import { format, set } from 'date-fns';
import Comentario from '../components/Comentario'
function TodosLosJuegos() {
  const [juego,setJuego] = useState([])
  const [comentarios,setComentarios] = useState([])
  const [usuario,setUsuario] = useState([])
  const[comentario,setComentario] =useState("")
  const [recargar,setRecarga] = useState(false)
   
   const fechaActual = new Date();
  
   
   const fechaFormateada = format(fechaActual, 'dd-MM-yyyy HH:mm:ss');
   
    useEffect(()=>{
      async function infoJuego() {
        const datos = await Llamados.getData("games",localStorage.getItem("idJuego"))
        setJuego(datos)
      }
      async function fotoUsuario() {
        const datos = await Llamados.getData("users",localStorage.getItem("idUsuario"))
        setUsuario(datos)
      }
      infoJuego()
      fotoUsuario()
    },[])

    async function guardarComentario() { /*Funcion para armar el objeto del comentario */
       const infoComentario = {
          idUsuario: localStorage.getItem("idUsuario"),
          usuarioComentario: localStorage.getItem("NombreUsuario"),
          idJuego: localStorage.getItem("idJuego"),
          fechaComentario: fechaFormateada,
          comentario:comentario,
          imgPerfil: usuario.banner
       }
       await Llamados.postData(infoComentario,"comentarios")
       setRecarga(!recargar)
    }
    useEffect(()=>{
      async function traerComentarios() { /*Funcion para jalar la info de los comentarios */
        const comentariosTotales = await Llamados.getData("comentarios")
        const filtroComentarios = comentariosTotales.filter(comentario => comentario.idJuego === localStorage.getItem("idJuego"))
        setComentarios(filtroComentarios)
      }
      traerComentarios()
    },[recargar])

  return (
    <div>
        <NavBar />
        <div className='containerPerfil'>
          <img className='banner' src={juego.banner} alt=""  /> 
          <img className='fotoPerfil' src={juego.img} alt=""/>
          <h1>{juego.nombreJuego}</h1>
          <h2>Info del juego</h2>
            <p>Precio {juego.precio}</p>
            <p>Stock {juego.stock}</p>
            <p>Categoria {juego.categoria}</p>
        <div>
          <h2>¿Qué dicen los usuarios?</h2>

          <input type="text"placeholder='Agrega un comentario' onChange={(e)=>setComentario(e.target.value)}/>
          <button onClick={guardarComentario}>Enviar</button>
        </div>
        {comentarios.map((com=><Comentario nombreUsuario={com.usuarioComentario} 
        comentario={com.comentario} fechaComentario={com.fechaComentario} imgPerfil={com.imgPerfil}/>))}
        </div>
    </div>
  )
}

export default TodosLosJuegos