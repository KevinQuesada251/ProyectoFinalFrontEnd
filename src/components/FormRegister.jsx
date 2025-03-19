import React, { useState } from 'react'
import Llamados from '../services/Llamados'
import { useNavigate } from 'react-router-dom'

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
        <div className='containerRegister'>
            <label htmlFor="">Nombre</label>
            <input onChange={(evento) => setNombre(evento.target.value)} type="text"  />
            <label  htmlFor="">Email</label>
            <input onChange={(evento) => setEmail(evento.target.value)} type="text"  />
            <label htmlFor="">Contraseña</label>
            <input onChange={(evento) => setPass(evento.target.value)}  type="password" />
            <button onClick={guardar}>Registrar</button>
        </div>
    </div>
  )
}

export default FormRegister