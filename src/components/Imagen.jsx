import React from 'react'

import "../styles/Imagen.css"

function Imagen({enlaceImagen}) {
  return (
    <img className='slider' src={enlaceImagen}/>
  )
}

export default Imagen