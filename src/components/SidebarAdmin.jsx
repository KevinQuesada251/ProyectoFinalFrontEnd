import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Llamados from '../services/Llamados';
import { useEffect } from 'react';
import "../styles/sidebar.css"

function SidebarAdmin({usuarios,juegos}) {

const navigate = useNavigate()

useEffect=>(()=>{
    async function item({ mostrar}) {
        const usuarios = await Llamados.getData("users")
        if(mostrar){
            return <li className='item'>{}</li>
        }
    }
},[])
   function cerrarSesion() {
    navigate("/")
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