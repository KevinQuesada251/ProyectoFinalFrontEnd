import React, { use, useEffect, useState } from 'react'
import Llamados from '../services/Llamados'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import CardTitle from 'react-bootstrap/esm/CardTitle';

function VentanaUsuarios() {
    const [listaUsuarios,setListaUsuarios] = useState([])
    const [recarga,setRecarga] = useState(false)

    // useEffect(()=>{},[])
    useEffect(()=>{
        async function traerUsuarios() {
            const usuarios =  await Llamados.getData("users")
            console.log(usuarios);
            setListaUsuarios(usuarios)
        }
        traerUsuarios()
    },[recarga])

    function eliminar(id) {
      Swal.fire({
        title: "Quieres eliminar el registro",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Eliminado Exitoso!");
          Llamados.deleteData("users",id)
          setRecarga(!recarga)
        } 
      });
       
    }

    async function editar(id){
	
        const { value: formValues } = await Swal.fire({
          title: "Editar el usuario",
          html: `
            <input id="nombre"  placeholder="Nombre" ><br>
            <input id="rol"  placeholder="Rol"><br>
            <input id="email"  placeholder="Email" ><br>
            <input id="pass"  placeholder="Contraseña" >
          `,
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById("nombre").value,
              document.getElementById("rol").value,
              document.getElementById("email").value,
              document.getElementById("pass").value
            ];
          }
        });
        if (formValues) {
          const obj = {
            "nombre": document.getElementById("nombre").value,
            "rol":document.getElementById("rol").value,
            "email":document.getElementById("email").value,
            "pass":document.getElementById("pass").value,
          }
          Llamados.patchData(obj,"users",id)
          setRecarga(!recarga)

          
        }
    }
    
  return (
    <div className='containerVentanaUsu'>
        {listaUsuarios.map((usuario)=>{
            return(
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Nombre de Usuario: {usuario.nombre}</Card.Title>
                  <CardTitle>Rol: {usuario.rol}</CardTitle>
                  <Card.Title>Email: {usuario.email}</Card.Title>
                  <Card.Title>Contraseña: {usuario.pass}</Card.Title>
                  <Button onClick={()=>editar(usuario.id)} variant="primary">Editar</Button>
                  <Button onClick={()=>eliminar(usuario.id)} variant='primary'>Eliminar</Button>
                </Card.Body>
              </Card>
            )
        })}
    </div>
  )
}

export default VentanaUsuarios