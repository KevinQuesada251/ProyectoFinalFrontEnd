import React, { useEffect, useState } from 'react'
import VentanaUsuarios from '../components/VentanaUsuarios'
import Sidebar from '../components/SidebarAdmin'
import VentanaJuegos from '../components/VentanaJuegos'

function Admin() {
  const [mostrar,setMostrar] = useState(false)

  // useEffect(()=>{
  //   console.log(mostrar);
    
  // },[mostrar])

  return (
    <div>
        <div className='containerAdmin'>
            <h1>Administrador</h1>
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