import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Llamados from '../services/Llamados';

function DropdownJuegos() {
    useEffect(()=>{
        const traerInfo=()=>{

        }
    },[])
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Aventura</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Accion</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mundo Abierto</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownJuegos;