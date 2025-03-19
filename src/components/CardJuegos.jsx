import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../styles/card.css"



function CardJuegos({titulo="KK",descripcion,imagen,enlace}) {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen}/>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Button className='btnCard' variant="primary"><Link className='textoCard' to={enlace} target='_blank'>Ir a steam</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default CardJuegos;