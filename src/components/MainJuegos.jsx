import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import "../styles/MainJuegos.css"


function MainJuegos() {
  return (
    <div>
      <div className='containerJuegos'>
        <h1>Mejores Valorados</h1>
        <h3>Aclamados por la critica</h3>
        <ControlledCarousel />
        <h3>Juegos Disponibles</h3>
        <img src="src/assets/img/flecha.svg" alt="" />
      </div>
    </div>
  )
}

export default MainJuegos