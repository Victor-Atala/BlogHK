import React from 'react';
import './assets/Stylesheets/styles.css';


import Header from './components/molecules/Header';
import Subtitle from './components/atoms/Subtitle';
import Video from './components/atoms/Video';
import ImagesList from './Views/ImagesList';
import ImageCarousel from './components/organisms/ImageCarousel';
import Paragraph from './components/atoms/Paragraph';
import Sombra from './Imagenes/Sombra.jpg'
import Boss from './Imagenes/Boss.jpg'
import Lago from './Imagenes/lagoAzul.jpg'
import Joni from './Imagenes/Joni.jpeg'
import Miel from './Imagenes/Miel.jpg'




function App() {
  const images = [Sombra, Boss, Lago, Joni, Miel,Sombra]; 

  return (
    <div className="app">
     
      <Header />

      <ImageCarousel images={images} title={titulos.titulo}/>

      <Subtitle
      text={titulos.subtitulo1}
      />

      
      <ImagesList></ImagesList>

      <Video 
      title={titulos.subtitulo2}
      src="https://www.youtube.com/embed/FzzsWP2GWmg?si=R-caMm1qtDITdSww" />

      <Paragraph text={paragraph.txt4} />
    </div>
  );
}

export default App;
