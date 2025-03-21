import React, { use, useEffect, useState } from 'react'
import Llamados from '../services/Llamados'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import CardTitle from 'react-bootstrap/esm/CardTitle';

function VentanaJuegos() {
  const [listaJuegos, setListaJuegos] = useState([])
  const [recarga, setRecarga] = useState(false)
  const [img,setImg]=useState(null)

  // useEffect(()=>{},[])
  useEffect(() => {
    async function traerJuegos() {
      const juegos = await Llamados.getData("games")
      console.log(juegos);
      setListaJuegos(juegos)
    }
    traerJuegos()
  }, [recarga])

  function eliminar(id) {
    Llamados.deleteData("games", id)
    setRecarga(!recarga)
  }

  async function editar(id) {

    const { value: formValues } = await Swal.fire({
      title: "Editar el juego",
      html: `
            <input id="nombreJuego"  placeholder="Nombre" ><br>
            <input id="precio"  placeholder="Precio"><br>
            <input id="stock"  placeholder="Stock" ><br>
            <input type="checkbox">
          `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("nombreJuego").value,
          document.getElementById("precio").value,
          document.getElementById("stock").value
        ];
      }
    });
    if (formValues) {
      const obj = {
        "nombreJuego": document.getElementById("nombreJuego").value,
        "precio": document.getElementById("precio").value,
        "stock": document.getElementById("stock").value,
      }
      Llamados.patchData(obj, "games", id)
      setRecarga(!recarga)
    }
  }

  

  return (
    <div>
      {listaJuegos.map((juego) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={juego.img} />
            <Card.Body>
              <CardTitle>Nombre: {juego.nombreJuego}</CardTitle>
              <Card.Title>Precio: {juego.precio}</Card.Title>
              <Card.Title>Stock: {juego.stock}</Card.Title>
              <Button onClick={() => editar(juego.id)} variant="primary">Editar</Button>
              <Button onClick={() => eliminar(juego.id)} variant='primary'>Eliminar</Button>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default VentanaJuegos