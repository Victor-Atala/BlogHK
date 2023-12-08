import React from 'react';
import Tilte from '../atoms/Title';
import Image from '../atoms/Image';
import '../../assets/Stylesheets/carousel.css'

const ImageCarousel = ({ images, title }) => {
  return (
    <>
    <Tilte
    text={title}  
    />
    <div className="image-carousel">
      {
        images.map((currentImage, index)=>{
          return(
            <Image
            url={currentImage}
            alt={currentImage + "-" + index}
            key={index}
            />
          )
        })
      }
    </div>
    </>
  );
};

export default ImageCarousel;