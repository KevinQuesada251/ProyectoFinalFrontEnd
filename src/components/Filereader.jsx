import React from 'react'
import { useState } from 'react'
import Llamados from '../services/Llamados'

function Filereader() {
    const [img,setImg]= useState(" ")

    const imgLoad =(e)=>{
        console.log(e.target.files[0])
        const file = e.target.files[0]
        const reader = new FileReader()

         reader.onload = (e)=>{
            console.log(e.target.result);
        }
        reader.readAsDataURL(file)
        const newImg={
            
            }
        }
        Llamados.postData(newImg,"games")
    }
  return (
    <div>
        <p>img load</p>
        <input type="file" onChange={imgLoad}/>

        <img src={img} alt="" />
    </div>
  )
}

export default Filereader