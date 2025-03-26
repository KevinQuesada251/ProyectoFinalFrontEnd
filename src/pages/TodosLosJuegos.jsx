import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import Llamados from '../services/Llamados'
import "../styles/perfil.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TodosLosJuegos() {
  const [listaDeseados,setListaDeseados] = useState([])
  const [mostrar,setMostrar] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [usuario,setUsuario] = useState([])
   const[imgPerfil,setImgPerfil] =useState(null)
   const[imgBanner,setImgBanner] =useState(null)
  
      function subirImagenPerfil(evento) {
          const archivo = evento.target.files[0]
          if(archivo){
              const lector = new FileReader()
              lector.onloadend = ()=>{
                  setImgPerfil(lector.result)
              }
              lector.readAsDataURL(archivo)    
          }
      }

      function subirImagenBanner(evento) {
        const archivo = evento.target.files[0]
        if(archivo){
            const lector = new FileReader()
            lector.onloadend = ()=>{
                setImgBanner(lector.result)
            }
            lector.readAsDataURL(archivo)    
        }
    }

    async function guardarImgs(id) {
      const enviarImgs ={
        banner: imgBanner,
        perfil: imgPerfil
      }
      await Llamados.patchData(enviarImgs,"games",id)
      handleClose()
    }


  useEffect(()=>{
    async function filtro () {
      const listaDeseados = await Llamados.getData("listaDeseados")
      const filtro = listaDeseados.filter(juego=> localStorage.getItem("idUsuario") === juego.usuarioID)
      setListaDeseados(filtro)
      console.log(listaDeseados);
    }

    async function infoUsuario() {
      const info = await Llamados.getData("users",localStorage.getItem("idUsuario"))
      setUsuario(info)
    }
    console.log(imgBanner);
    console.log(imgPerfil);
    
    filtro()
    infoUsuario()
  },[])
  return (
    <div>
        <NavBar />
        <div className='containerPerfil'>
          <img className='banner' src={imgBanner != null ? imgBanner : usuario.banner} alt=""  />
          {mostrar &&
          <i className="fa-solid fa-pen-to-square icono-lapicito" onClick={handleShow}/>
          }
          <img className='fotoPerfil' src={imgPerfil != null ? imgPerfil : usuario.perfil} alt="" onMouseEnter={()=>setMostrar(true)} onMouseLeave={()=>setMostrar(false)} onClick={handleShow} />
          <h1>{localStorage.getItem("NombreUsuario")}</h1>
          <h2>Lista de Juegos Deseados</h2>
          {listaDeseados.map((juego) => {
            return(
            <ul>
              <li>{juego.juegoNombre}</li>
            </ul>
)
          })}
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edición de imágenes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label htmlFor="">Encabezado</label>
            <input onChange={subirImagenBanner} type="file" />

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

export default TodosLosJuegos