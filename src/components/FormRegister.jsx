import React, { useState } from 'react'
import Llamados from '../services/Llamados'
import { useNavigate } from 'react-router-dom'
import "../styles/register.css"

function FormRegister() {

    const [nombre,setNombre]= useState("")
    const [email,setEmail]= useState("")
    const [pass,setPass]= useState("")
    const navigate = useNavigate()

    const guardar =()=>{

        const obj = {
            "nombre": nombre,
            "rol": "usuario",
            "email": email,
            "pass": pass,
        }

        const regEx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        console.log(regEx.test(email)) 

        if(regEx.test(email) === true){

            Llamados.postData(obj,"users")
            navigate("/login")
        }else{
            console.log("correo Invalido");
            
        }

        

    }
  return (
    <div>
        <>
  <form className="form">
    <h5 className='tituloRegi'>Register</h5>
    <input className="input" onChange={(evento) => setNombre(evento.target.value)}  type="text" placeholder="Nombre" />
    <input className="input" onChange={(evento) => setEmail(evento.target.value)} type="text" placeholder="Email" />
    <input className='input' onChange={(evento) => setPass(evento.target.value)} type="text"  placeholder='Contraseña'/>
    <center>
      <button onClick={guardar} className="button">Registrar</button>
    </center>
  </form>
</>
    </div>
  )
}

export default FormRegister