import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../styles/card.css"
import Llamados from '../services/Llamados';
import { useEffect, useState } from 'react';
import Juegos from '../pages/Juegos';



function CardJuegos() {

  const [listaJuegos, setListaJuegos] = useState([])
  const [categoria, setCategoria] = useState("")
  const [listaFiltrada, setListaFiltrada] = useState([])
  useEffect(() => {
    async function traerInfo() {
      const juegos = await Llamados.getData("games")
      setListaJuegos(juegos)
    }
    console.log(categoria);
    traerInfo()
    filtro()
  }, [categoria])

  async function filtro() {
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


  return (
    <div>
      <select name="" id="" onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Todos</option>
        <option value="Acción">Acción</option>
        <option value="Aventura">Aventura</option>
        <option value="Mundo Abierto">Mundo Abierto</option>
      </select>

      {categoria === "" &&
        <div className='containerCardJuegos'>
          {listaJuegos.map((juego) => (
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '12rem' }} variant="top" src={juego.img} />
              <Card.Body>
                <Card.Title>{juego.nombreJuego}</Card.Title>
                <Card.Title>Precio: {juego.precio}</Card.Title>
                <Card.Title>Categoría: {juego.categoria}</Card.Title>
                <Button variant='primary' onClick={()=>aggListaDeseados(localStorage.getItem("idUsuario"),juego.id,juego.nombreJuego)}>Agregar a lista de deseos</Button>
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