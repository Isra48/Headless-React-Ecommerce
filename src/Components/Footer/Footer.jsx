import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'




class Footer extends React.Component{
    render (){
        return(
            <>
              <div className="Footer">
                <h4>Terminos y condiciones</h4>

                <div className="Madein">

                <h4>Made with</h4>
                <FontAwesomeIcon icon={faHeart} className="Heart" />

                
                
                <a href="https://github.com/Isra48">
                    <h4>by: Israel Albarrán </h4>
                </a>

                </div>
                
                
                <div className="RedesSociales">
                <FontAwesomeIcon icon={faFacebook} className="SocialIcon" />
                <FontAwesomeIcon icon={faInstagram} className="SocialIcon" />
                <FontAwesomeIcon icon={faTwitter} className="SocialIcon" />

                </div>
                 
                  
                
                
                
                </div>  

            
            </>

        );

    }
    
}
export default Footer;