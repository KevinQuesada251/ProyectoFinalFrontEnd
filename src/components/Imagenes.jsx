import React from 'react'
import { useState } from 'react'
import Llamados from '../services/Llamados'

 function Imagenes() {
    const[img,setImg] =useState(null)

    function subirImagen(evento) {
        const archivo = evento.target.files[0]
        if(archivo){
            const lector = new FileReader()
            lector.onloadend = ()=>{
                setImg(lector.result)
            }
            lector.readAsDataURL(archivo)    
        }
        console.log(img);
        
      
    }
    async function enviarInfo() {
        const obj ={
            "img":img
        }
        await Llamados.patchData(obj,"games","112")

    }
  return (
    <div>
        <input type="file" onChange={subirImagen} />

       {img && <img src={img}  />} 

       <button onClick={enviarInfo}>ENVIAR</button>
    </div>
  )
}

export default Imagenes