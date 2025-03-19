import React from 'react'
import "../styles/mainEmpresas.css"

function MainEmpresas() {
    return (
        <div>
            <div className='ContainerEmpresas'>
                <aside className='left'>
                    <img className='CeibaLogo' src="../src/assets/img/CeibaCompany.jpg" alt="" />

                </aside>
                <aside className='right'>
                    <h2 className='tituloEmpresa'>CEIBA SOFTWARE AND ARTS</h2>
                    <p className='textoEmpresa'>Un estudio de juegos independientes experimentales de Costa Rica. Actualmente estan desarollando el titulo de estrategia y simulacion SOOT, en el que podras terraformar pequenos planetas y esplotar sus recursos.</p>
                    <button className='btnEmpresa'>Ver más</button>
                </aside>
            </div>
        </div>
    )
}

export default MainEmpresas