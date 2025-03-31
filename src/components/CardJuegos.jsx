import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/card.css"
import Llamados from '../services/Llamados';
import { useEffect, useState } from 'react';
import Juegos from '../pages/Juegos';



function CardJuegos() {

  const [listaJuegos, setListaJuegos] = useState([])
  const [categoria, setCategoria] = useState("")
  const [listaFiltrada, setListaFiltrada] = useState([])
  const [mostrar,setMostrar] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    async function traerInfo() {
      const juegos = await Llamados.getData("games")
      setListaJuegos(juegos)
    }
    console.log(categoria);
    traerInfo()
    filtro()
  }, [categoria])

  async function filtro() { /*filtra una lista por el tipo de categoria */
    const juegos = await Llamados.getData("games")
    const filtroJuegos = juegos.filter(juego => juego.categoria === categoria)
    setListaFiltrada(filtroJuegos)
  }

  async function aggListaDeseados(idUsuario,idJuego,nombreJuego) {
      const deseados = {
        juegoID: idJuego,
        usuarioID: idUsuario,
        juegoNombre:nombreJuego
      }
      await Llamados.postData(deseados,"listaDeseados")
  }

  function enviarPagIndividual(id) {
      localStorage.setItem("idJuego",id)
      navigate("/pagJuego")
  }

 useEffect(()=>{

 },[])

  return (
    <div className='categorias'>
      <select className='btnCategorias' id="" onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Todos</option>
        <option value="Accion">Acción</option>Ñ
        <option value="Aventura">Aventura</option>
        <option value="Mundo Abierto">Mundo Abierto</option>
      </select>

      {categoria === "" &&
        <div className='containerCardJuegos'>
          {listaJuegos.map((juego) => (
            <Card style={{ width: '18rem' }} onMouseEnter={()=>setMostrar(true)} onMouseLeave={()=>setMostrar(false)}>
              <Card.Img style={{ height: '12rem' }} variant="top" src={juego.img} />
              <Card.Body>
                <Card.Title>{juego.nombreJuego}</Card.Title>
                <Card.Title>Precio: {juego.precio}</Card.Title>
                <Card.Title>Categoría: {juego.categoria}</Card.Title>
                <Button variant='primary' onClick={()=>aggListaDeseados(localStorage.getItem("idUsuario"),juego.id,juego.nombreJuego)}>Agregar a lista de deseos</Button>
                {mostrar && (
                <Button onClick={()=>enviarPagIndividual(juego.id)}>ir</Button>
              )}
                </Card.Body>
            </Card>
          ))}

        </div>
      }

      {categoria != "" && (
        <div className='containerCardJuegos'>
          {listaFiltrada.map((juego) => (
            <Card  style={{ width: '18rem' }}>
              <Card.Img style={{ height: '12rem' }} variant="top" src={juego.img} />
              <Card.Body>
                <Card.Title>{juego.nombreJuego}</Card.Title>
                <Card.Title>Precio: {juego.precio}</Card.Title>
                <Card.Title>Categoría: {juego.categoria}</Card.Title>
                <Button variant='primary'>Agregar a lista de deseos</Button>
              </Card.Body>
            </Card>
          ))}

        </div>
      )}
    </div >
  );
}

export default CardJuegos;