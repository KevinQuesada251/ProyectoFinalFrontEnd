import React, { useEffect, useState } from 'react'
import VentanaUsuarios from '../components/VentanaUsuarios'
import Sidebar from '../components/SidebarAdmin'
import VentanaJuegos from '../components/VentanaJuegos'
import ModalAdmin from '../components/ModalAdmin'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/Admin.css"



function Admin() {
  const [mostrar, setMostrar] = useState(false)

  // useEffect(()=>{
  //   console.log(mostrar);

  // },[mostrar])

  return (
    <Container>
      <Row>
        <Col><h1>Administrador</h1></Col>
      </Row>
      <Row>
        <Col className='side' >
          <Sidebar juegos={() => setMostrar(false)} usuarios={() => setMostrar(true)} />
        </Col>
        <Col className='ventanas'>{mostrar &&
          <VentanaUsuarios />
        }
          {mostrar === false &&
            <VentanaJuegos />
          }</Col>
      </Row>
      <Row><ModalAdmin /></Row>
    </Container>
  )
}

export default Admin