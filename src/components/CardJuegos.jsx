import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../styles/card.css"
import Llamados from '../services/Llamados';
import { useEffect,useState } from 'react';



function CardJuegos({titulo="KK",descripcion,imagen,enlace}) {

  const [listaJuegos,setListaJuegos]= useState([])
  useEffect(()=>{
    async function traerInfo() {
      const juegos = await Llamados.getData("games")
      setListaJuegos(juegos)
    }
    traerInfo()
  },[])
  
  return (

    <div className='containerCardJuegos'>
      {listaJuegos.map((juego)=>{
        return(
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{height:'12rem'}} variant="top" src={juego.img} />
        <Card.Body>
          <Card.Title>{juego.nombreJuego}</Card.Title>
          <Card.Title>Precio: {juego.precio}</Card.Title>
        </Card.Body>
      </Card>
        )
      })}
  
    </div>
  );
}

export default CardJuegos;