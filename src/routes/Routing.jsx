import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Home from '../pages/Home';
import Juegos from '../pages/Juegos';
import Empresas from '../pages/Empresas';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Foro from '../pages/Foro';
import AcercaNosotros from '../pages/AcercaNosotros';
import Admin from '../pages/Admin'; 
import PerfilUsuario from '../pages/PerfilUsuario';


function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/" element={<Home/>}/>
                            <Route path="/juegos" element={<Juegos/>}/>
                            <Route path="/empresas" element={<Empresas/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/foro" element={<Foro/>}/>
                            <Route path="/acerca" element={<AcercaNosotros/>}/>
                            <Route path="/admin" element={<Admin/>}/>
                            <Route path="/perfil" element={<PerfilUsuario/>}/>
                            

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing