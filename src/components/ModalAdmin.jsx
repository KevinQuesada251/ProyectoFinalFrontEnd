import { useState } from 'react';
import { FormControl, FormGroup, FormLabel, ModalTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Llamados from '../services/Llamados';

function ModalAdmin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [img, setImg] = useState(null)
  const [banner,setBanner]= useState(null)
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState("")
  const [stock, setStock] = useState("")
  const [categoria, setCategoria]= useState("")


  async function Agregar() {
    const obj = {
      "img": img,
      "nombreJuego": nombre,
      "precio": precio,
      "stock": stock,
      "categoria":categoria,
      "banner": banner
    }
    await Llamados.postData(obj, "games")
    console.log("se envio exitosamente");
    setNombre("")
    setPrecio("")
    setStock("")

  }

  function subirImagen(evento) {
    const archivo = evento.target.files[0]
    if (archivo) {
      const lector = new FileReader()
      lector.onloadend = () => {
        setImg(lector.result)
      }
      lector.readAsDataURL(archivo)

    }
  }

  function subirBanner(evento) {
    const archivo = evento.target.files[0]
    if (archivo) {
      const lector = new FileReader()
      lector.onloadend = () => {
        setBanner(lector.result)
      }
      lector.readAsDataURL(archivo)

    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar Juego
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Juego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <ModalTitle>Imagen de card</ModalTitle>
              <Form.Control
                type="file" onChange={subirImagen}
              />
            </Form.Group>
            <Form.Group>
            <ModalTitle>Imagen del Banner</ModalTitle>
              <Form.Control
                type="file" onChange={subirBanner}
              />
            </Form.Group>
            <Form.Group>
            <ModalTitle>Seleccione la categoria</ModalTitle>
              <select name="" id="" onChange={(e)=>setCategoria(e.target.value)}>
                <option>Categorias</option>
                <option value="Aventura">Aventura</option>
                <option value="Mundo Abierto">Mundo Abierto</option>
                <option value="Accion">Acción</option>
                </select>
            </Form.Group>
            <FormGroup>
              <Form.Label>Nombre del juego</Form.Label>
              <Form.Control
                type='text' onChange={(e) => setNombre(e.target.value)}>
              </Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type='text' onChange={(e) => setPrecio(e.target.value)}>
              </Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type='text' onChange={(e) => setStock(e.target.value)}>
              </Form.Control>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Agregar}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdmin;