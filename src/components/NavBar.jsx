import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/NavBar.css"
import migif from "../assets/img/control.gif"

function NavBar() {
  return (
    <div>
        <nav className='navBar'>
            <ul>
                <li><img className='imgControl' src={migif} alt="" /></li>
                <li>Indie <br></br> World</li>
                <li><Link className='navMenu' to="/">Inicio</Link></li>
                <li><Link className='navMenu'  to="/empresas">Empresas</Link></li>
                <li><Link className='navMenu'  to="/juegos">juegos</Link></li>
                <li><Link className='navMenu'  to="/foro">Foro</Link></li>
                <li><Link className='navMenu' to="/acerca">Acerca de Nosotros</Link></li>
                {localStorage.getItem("idUsuario") &&(
                  <>
                  <li><Link className='navMenu'  to="/perfil"><img className='usuario' src="src/assets/img/usuario.png" alt="" /></Link></li>
                  </>
                )}
                <>
                {!localStorage.getItem("idUsuario") &&(
                  <li><Link className='navMenu'  to="/"><img className='usuario' src="src/assets/img/usuario.png" alt="" /></Link></li>
                                )}
                  </>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar