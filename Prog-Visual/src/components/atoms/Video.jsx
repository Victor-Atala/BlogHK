import '../../assets/Stylesheets/Iframe.css'
import React from 'react';

const Video = ({title,src}) => {
  return (
    <div>
     <h1> {title}</h1>
      <iframe
        width={window.innerWidth-100}
        height="415"
        src={src}
        
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;