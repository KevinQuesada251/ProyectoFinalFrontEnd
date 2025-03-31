import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import "../styles/sidebar.css"

function SidebarAdmin({usuarios,juegos}) {

const navigate = useNavigate()


   function cerrarSesion() {
    navigate("/")
    localStorage.clear()
   }
    return (
        <div>
            <Sidebar className='containerSideBar'>
                <Menu>
                    <MenuItem onClick={usuarios}>Usuarios</MenuItem>
                    <MenuItem onClick={juegos}>Juegos</MenuItem>
                    <MenuItem onClick={cerrarSesion}>Cerrar Sesion</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}
export default SidebarAdmin