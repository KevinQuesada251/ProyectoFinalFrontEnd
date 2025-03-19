import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='footer'>
            <ul className='redesSociales'>
              <li><Link to="https://x.com/?lang=es" target='_blank'><img src="src/assets/img/X.png" alt="" /></Link></li>
              <li><Link to="https://www.facebook.com/" target='_blank'><img src="src/assets/img/facebook.png" alt="" /></Link></li>
              <li><Link to="https://www.youtube.com/" target='_blank'><img src="src/assets/img/youtube.png" alt="" /></Link></li>
              <li><Link to="https://www.instagram.com/" target='_blank'><img src="src/assets/img/instagram.png" alt="" /></Link></li>
            </ul>
            <h5>Indie World</h5>
            <h5>Desamparados, San Jose</h5>
            <h5>Copyright Indie World- Todos los derechos reservados.</h5>
        </div>
    </div>
  )
}

export default Footer