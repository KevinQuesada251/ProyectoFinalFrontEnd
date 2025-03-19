import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MainEmpresas from '../components/MainEmpresas'
import MainEmpresas2 from '../components/MainEmpresas2'

function Empresas() {
  return (
    <div>
        <NavBar />
        <MainEmpresas />
        <MainEmpresas2 />
        <Footer />

    </div>
  )
}

export default Empresas