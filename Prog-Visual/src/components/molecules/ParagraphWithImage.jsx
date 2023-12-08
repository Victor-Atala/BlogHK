import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image'
import '../../assets/Stylesheets/paragraphImage.css'

const ParagraphWithImage = ({ text, imageUrl, imagePosition, alt }) => {
  return (
    <div className={`paragraph-with-image ${imagePosition}`}>
      <Paragraph
        text={text}
      ></Paragraph>
      <Image
        url={imageUrl}
        alt={alt}

      ></Image>
    </div>
  );
};

export default ParagraphWithImage;