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
      setListaJuegos(juegos)
    }
    traerJuegos()
  }, [recarga])

  /*
    Función de eliminar, va al endpoint del que se quiere eliminar y con el id elimina solo ese elemento
  */

  function eliminar(id) {
    Llamados.deleteData("games", id)
    setRecarga(!recarga)
  }
/*Funcion editar, despliega un sweet alert donde puedo  */
  async function editar(id) {

    const { value: formValues } = await Swal.fire({
      title: "Editar el juego",
      html: `
            <input id="nombreJuego"  placeholder="Nombre" ><br>
            <input id="precio"  placeholder="Precio"><br>
            <input id="stock"  placeholder="Stock" ><br>
            <select id="categoria">
            <option value="aventura">Aventura</option>
            <option value="Accion">Accion</option>
            <option value="Mundo Abierto">Mundo Abierto</option>
            </select>
          `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("nombreJuego").value,
          document.getElementById("precio").value,
          document.getElementById("stock").value,
          document.getElementById("categoria").value

        ];
      }
    });
    if (formValues) {
      const obj = {
        "nombreJuego": document.getElementById("nombreJuego").value,
        "precio": document.getElementById("precio").value,
        "stock": document.getElementById("stock").value,
        "categoria":document.getElementById("categoria").value
      }
      Llamados.patchData(obj, "games", id)
      setRecarga(!recarga)
    }
  }

  

  return (
    <div className='containerVentanaJue'>
      {listaJuegos.map((juego) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{height:'12rem'}} variant="top" src={juego.img} />
            <Card.Body>
              <CardTitle>Nombre: {juego.nombreJuego}</CardTitle>
              <Card.Title>Precio: {juego.precio}</Card.Title>
              <Card.Title>Stock: {juego.stock}</Card.Title>
              <Card.Title>Categoría: {juego.categoria}</Card.Title>
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