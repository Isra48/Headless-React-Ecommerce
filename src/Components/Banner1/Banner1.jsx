import React from "react";
import "./Banner1.css";
import Emoji from "./emoji.png";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

class Banner1 extends React.Component {
  render() {
    return (
      <>
      
        <div className="Banner1Container">

        
        <div className="ContainerCopiesBanner1">
          
          <img src={Emoji} alt="" />
          
           
            <Fade> 
            <p>¡DESCUENTOS DE LOCURA!</p>
            <h3 className="H3copiesB1">Primavera / Verano</h3>
            <h5>Gran barata de temporada</h5>
            <p>
              Meses sin interes con tarjetas participantes y hasta 35% de
              descuento
            </p>

            </Fade>
            
          </div>

        
        
          
        </div>
      </>
    );
  }
}
export default Banner1;
