import React from 'react'
import "../styles/MainEmpresas2.css"

function MainEmpresas2() {
    return (
        <div>
            <div className='ContainerEmpresas2'>
                <aside className='left2'>

                    <h2 className='tituloEmpresa2'>GREEN LAVA STUDIOS</h2>
                    <p className='textoEmpresa2'>La historia comenzó en 2010, cuando Eduardo recibió una herencia de 450 dólares de su difunta bisabuela. Decidió aprovechar ese dinero y compró licencias de software baratas (-50 dólares), un dominio web (-10 dólares), 3 camisetas con un logotipo (-40 dólares) y registró “Green Lava Studios” como empresa de juegos… con un abogado (-300 dólares).</p>
                    <button className='btnEmpresa2'>Ver más</button>

                </aside>
                <aside className='right2'>
                    <img className='GreenLavaLogo' src="src/assets/img/GreenLavaLogo.png" alt="" />
                </aside>
            </div>
        </div>
    )
}

export default MainEmpresas2