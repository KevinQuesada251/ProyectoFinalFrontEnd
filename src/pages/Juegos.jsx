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
        <div className='containerCards'>
        <CardJuegos titulo={"nickelodeon all star brawl"} descripcion={"Fair Play Labs"} enlace={"https://store.steampowered.com/app/2017080/Nickelodeon_AllStar_Brawl_2/"} imagen={"src/assets/img/brawl.jpg"}/>
        <CardJuegos titulo={"Hookbots"} descripcion={"Tree Interactive"} enlace={"https://store.steampowered.com/app/668650/Hookbots/"} imagen={"src/assets/img/hookbots.jpg"}/>
        <CardJuegos titulo={"Musasabi"} descripcion={"Ludumify"} enlace={"https://store.steampowered.com/app/1089110/Musasabi/?l=latam&curator_clanid=34981965"} imagen={"src/assets/img/musasabi.jpg"}/>
        </div>
        <Footer />

    </div>
  )
}

export default Juegos