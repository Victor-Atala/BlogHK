import ParagraphWithImage from "../components/molecules/ParagraphWithImage"
import Team from '../Imagenes/teamCherry.png'
import Intro from '../Imagenes/intro.jpg'
import HK from '../Imagenes/HK.jpeg'
export default function ImagesList(){
    return(
        <>
        
        <ParagraphWithImage
        text={paragraph.txt1}
        imageUrl= {Team}
        alt="Team Cherry"
      />

      
      <ParagraphWithImage
        text={paragraph.txt2}
        imageUrl={Intro}
        alt="Boca sucia"
      />

      
      <ParagraphWithImage
        text={paragraph.txt3}

        imageUrl={HK}
        alt="HK"
      />

        </>
    )
}