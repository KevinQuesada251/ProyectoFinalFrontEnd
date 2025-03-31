import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import Llamados from '../services/Llamados'
import "../styles/perfil.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

function PerfilUsuario() {
  const [listaDeseados,setListaDeseados] = useState([])
  const [mostrar,setMostrar] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [usuario,setUsuario] = useState([])
   const[imgPerfil,setImgPerfil] =useState(null)
   const[imgBanner,setImgBanner] =useState(null)
   const navigate = useNavigate()
  
      function subirImagenPerfil(evento) { /*Funcion para convertir la imagen a base */
          const archivo = evento.target.files[0]
          if(archivo){
              const lector = new FileReader()
              lector.onloadend = ()=>{
                  setImgPerfil(lector.result)
              }
              lector.readAsDataURL(archivo)    
          }
      }

      function subirImagenBanner(evento) {/*Funcion para convertir la imagen a base */
        const archivo = evento.target.files[0]
        if(archivo){
            const lector = new FileReader()
            lector.onloadend = ()=>{
                setImgBanner(lector.result)
            }
            lector.readAsDataURL(archivo)    
        }
    }

    async function guardarImgs(id) { /*Funcion para el usuario pueda editar su banner y foto de perfil */
      const enviarImgs ={
        banner: imgBanner,
        perfil: imgPerfil
      }
      await Llamados.patchData(enviarImgs,"users",id)
      handleClose()
    }


  useEffect(()=>{
    async function filtro () { /*Funcion donde filtro los juego que el usuario elegio en deseados*/
      const listaDeseados = await Llamados.getData("listaDeseados")
      const filtro = listaDeseados.filter(juego=> localStorage.getItem("idUsuario") === juego.usuarioID)
      setListaDeseados(filtro)
    }

    async function infoUsuario() {  /*Funcion que busca al usuario especifico de la cuenta*/
      const info = await Llamados.getData("users",localStorage.getItem("idUsuario"))
      setUsuario(info)
    }
    
    filtro()
    infoUsuario()
  },[])
  function cerrarSesion() { /*Funcion para enviar al inicio y limpiar el local storage*/
    navigate("/")
    localStorage.clear()
  }
  return (
    <div>
        <NavBar />
        <div className='containerPerfil'>
          <img className='banner' src={imgBanner != null ? imgBanner : usuario.banner} alt=""  />
          {mostrar &&
          <i className="fa-solid fa-pen-to-square icono-lapicito" onClick={handleShow}/>
          }
          <img className='fotoPerfil' src={imgPerfil != null ? imgPerfil : usuario.perfil} alt="" onMouseEnter={()=>setMostrar(true)} onMouseLeave={()=>setMostrar(false)} onClick={handleShow} />
          <h1 className='perfilNombre'>{localStorage.getItem("NombreUsuario")}</h1>
          <button onClick={cerrarSesion}>Cerrar Sesion</button>
          <h2 className='perfilLista'>Lista de Juegos Deseados</h2>
          <div className='containerDeseados'>
          {listaDeseados.map((juego) => {
            return(
            <ul className='lista'>
              <li>{juego.juegoNombre}</li>
            </ul>
)
          })}
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edición de imágenes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label htmlFor="">Encabezado</label>
            <input onChange={subirImagenBanner} type="file" /><br />

            <label htmlFor="">Perfil</label>
            <input onChange={subirImagenPerfil} type="file" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={()=>guardarImgs(localStorage.getItem("idUsuario"))}>
             Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PerfilUsuario