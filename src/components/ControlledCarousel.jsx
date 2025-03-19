import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagen from './Imagen';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel>
      <Carousel.Item>
        <Imagen enlaceImagen={"src/assets/img/HollowKnight.jpg"}/>
        <Carousel.Caption>
          <h3>Hollow Knight</h3>
          <p>Hollow Knight es un videojuego perteneciente al género metroidvania desarrollado y publicado por Team Cherry</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Imagen enlaceImagen={"src/assets/img/CupHead.jpg"}/>
      <Carousel.Caption>
          <h3>Cup Head</h3>
          <p>Cuphead es un videojuego perteneciente al género de corre y dispara, publicado por la empresa canadiense StudioMDHR. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Imagen enlaceImagen={"src/assets/img/StardewValley.png"}/>

        <Carousel.Caption>
          <h3>Stardew Valley</h3>
          <p>
          Stardew Valley es un videojuego indie de simulación de granja desarrollado por Eric "ConcernedApe" Barone y publicado por Chucklefish Games.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;