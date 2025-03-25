import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import Llamados from '../services/Llamados'
import "../styles/perfil.css"



function PerfilUsuario() {
  const [listaDeseados,setListaDeseados] = useState([])
  useEffect(()=>{
    async function filtro () {
      const listaDeseados = await Llamados.getData("listaDeseados")
      const filtro = listaDeseados.filter(juego=> localStorage.getItem("idUsuario") === juego.usuarioID)
      setListaDeseados(filtro)
      console.log(listaDeseados);
    }
    filtro()
  },[])
  return (
    <div>
        <NavBar />
        <div className='containerPerfil'>
          <img className='banner' src="" alt="" />
          <img className='fotoPerfil' src="" alt="" />
          <h1>Usuario: {localStorage.getItem("NombreUsuario")}</h1>
          <h2>Lista de Juegos Deseados</h2>
          {listaDeseados.map((juego) => {
            return(
            <ul>
              <li>{juego.juegoNombre}</li>
            </ul>
)
          })}
        </div>
    </div>
  )
}

export default PerfilUsuario