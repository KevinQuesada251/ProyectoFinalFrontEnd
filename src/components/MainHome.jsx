import React from 'react'
import "../styles/MainHome.css"
import { useNavigate } from 'react-router-dom'

function MainHome() {

    const navigate = useNavigate()

    

    return (
        <div className='containerHome'>
            <h2>Bienvenido</h2>
            <h1>TU SITIO DE JUEGOS INDIE</h1>
            <button onClick={()=>{navigate("/login")}} className="animated-button">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
                <span className="text">Iniciar Sesion</span>
                <span className="circle"></span>
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
            </button>

        </div>
    )
}

export default MainHome