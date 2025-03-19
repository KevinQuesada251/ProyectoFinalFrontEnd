import React from 'react'
import NavBar from '../components/NavBar'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import "../styles/AcercaNosotros.css"
function AcercaNosotros() {
  return (
    <div>
      <NavBar />
      <div className='containerAcerca'>
      <h1 className='tituloAcerca'>Acerca de Nosotros</h1>
      <p className='textoAcerca'>Somos una comunidad que expone el talento nacional de las empresas indies en Costa Rica</p>
      <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default AcercaNosotros