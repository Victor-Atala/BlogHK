import React from 'react';
import '../../assets/Stylesheets/paragraph.css'

const Paragraph = ({ text }) => {
  return (
    <div className="paragraph">
     <p>
      {text}
      </p> 
    </div>
  );
};

export default Paragraph;