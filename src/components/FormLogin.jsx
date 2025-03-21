import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Llamados from '../services/Llamados'
import Swal from 'sweetalert2'

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
      navigate("/foro")
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
      <div className='containerLogin'></div>
      <h1>Iniciar Sesión</h1>
      <p>¿Es tu primera vez? <Link to="/register">Regístrate</Link></p>
      <label htmlFor="">Nombre de Usuario</label>
      <input value={nombreUsuario} onChange={(e)=>setNombreUsuario(e.target.value)} type="text" />
      <label htmlFor="">Contraseña</label>
      <input value={passUsuario} onChange={(e)=>setPassUsuario(e.target.value)} type="password" name="" id="" />
      <button onClick={IniciarSesion}>Iniciar</button>
    </div>
  )
}

export default FormLogin