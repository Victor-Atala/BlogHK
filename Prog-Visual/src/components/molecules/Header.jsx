import React from 'react';
import Image from '../atoms/Image';
import Tilte from '../atoms/Title';
import img from '../../Imagenes/Logo.png'
import '../../assets/Stylesheets/header.css'

const Header = () => {
  return (
    <header className='Titulo'>
      
      <Tilte
      text={tituloHeader}
      />

      <Image
      url= {img}
      alt="Hollow"
      ></Image>

    </header>
  );
};

export default Header;