import React from 'react'
import NavBar from '../components/NavBar'
import MainJuegos from '../components/MainJuegos'
import Footer from '../components/Footer'
import CardJuegos from '../components/CardJuegos'
import "../styles/juegosCards.css"

function Juegos() {
  return (
    <div>
        <NavBar />
        <MainJuegos />
        <CardJuegos/>
        <Footer />

    </div>
  )
}

export default Juegos