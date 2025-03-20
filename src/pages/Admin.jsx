import React, { useEffect, useState } from 'react'
import VentanaUsuarios from '../components/VentanaUsuarios'
import Sidebar from '../components/SidebarAdmin'
import VentanaJuegos from '../components/VentanaJuegos'
import Imagenes from '../components/Imagenes'

function Admin() {
  const [mostrar,setMostrar] = useState(false)

  // useEffect(()=>{
  //   console.log(mostrar);
    
  // },[mostrar])

  return (
    <div>
        <div className='containerAdmin'>
            <h1>Administrador</h1>
            <Imagenes/>
            <Sidebar juegos={()=>setMostrar(false)} usuarios={()=>setMostrar(true)}/>

            {mostrar &&
            <VentanaUsuarios />
            }
            {mostrar === false &&
              <VentanaJuegos />
            }
        </div>
    </div>
  )
}

export default Admin