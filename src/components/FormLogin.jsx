import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Llamados from '../services/Llamados'
import Swal from 'sweetalert2'
import "../styles/Login.css"

function FormLogin() {

  const [nombreUsuario,setNombreUsuario]= useState("")
  const [passUsuario,setPassUsuario]= useState("")
  const navigate = useNavigate()

  async function IniciarSesion() {

    const usuarios = await Llamados.getData("users")
    console.log(usuarios);
    const encontrado = usuarios.find(usuario => usuario.nombre == nombreUsuario && usuario.pass === passUsuario)

    if (encontrado && encontrado.rol === "usuario") {
      console.log("Bienvenido");
      setNombreUsuario("")
      setPassUsuario("")
      Swal.fire({
        title: "Bienvenido Usuario",
        text: "Disfruta de la página",
        icon: "success"
      });
      localStorage.setItem("idUsuario",encontrado.id)
      localStorage.setItem("NombreUsuario",encontrado.nombre)
      navigate("/perfil")
    }else if(encontrado && encontrado.rol === "admin"){
      Swal.fire({
        title: "Bienvenido Administrador",
        text: "Eres todo poderoso",
        icon: "success"
      });
      navigate("/admin")
    }
    
    

    
  }

  return (
    <div>
      <div className='containerLogin'>
      <h1>Iniciar Sesión</h1>
      <p>¿Es tu primera vez? <Link to="/register">Regístrate</Link></p> <br />
      <label htmlFor="">Nombre de Usuario</label><br />
      <input value={nombreUsuario} onChange={(e)=>setNombreUsuario(e.target.value)} type="text" /> <br />
      <label htmlFor="">Contraseña</label> <br />
      <input value={passUsuario} onChange={(e)=>setPassUsuario(e.target.value)} type="password" name="" id="" /> <br />
      <button onClick={IniciarSesion}>Iniciar</button>
      </div>
    </div>
  )
}

export default FormLogin