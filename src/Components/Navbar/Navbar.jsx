import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "./liverpool-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  state = {
    classBarra: "Barra_de_busqueda hide",
    menuActive: "Menu hide",
  }

  handleShow = (e) =>{
    console.log("edsdd");
    if(this.state.classBarra=="Barra_de_busqueda hide"){
      this.setState({classBarra: "Barra_de_busqueda"});
    }
    else{
      this.setState({classBarra: "Barra_de_busqueda hide"});
    }
  }

  handleMenu = (e) =>{
    if(this.state.menuActive=="Menu hide"){
      this.setState({menuActive: "Menu"});
    }
    else{
      this.setState({menuActive: "Menu hide"});
    }

  }
  closeMenu = (e) =>{
    this.setState({menuActive: "Menu"});
  }

  render() {
    return (
      <>
         

         
          <div className="Menu_container">
            <div onClick={this.handleMenu}>
              <FontAwesomeIcon icon={faBars} className="Bars_menu" />
            </div>


            <Link to="/">
           <Logo className="Logo_del_Menu" />
            </Link>
            

            
            

            <div className="Iconos_padre">
              <div onClick={this.handleShow}>
                <FontAwesomeIcon icon={faSearch} className="Bars_menu Search" />
              </div>

              <Link onClick={this.closeMenu}  to="/carrito">
              
                <FontAwesomeIcon icon={faShoppingBag} className="Bars_menu" />

                </Link> 
              
            </div>
          </div>
          

          <div className={this.state.classBarra}>
            <input
              type="text"
              className="Input_busqueda"
              placeholder="Buscar..."
            />

            <button className="searchButton">
              <FontAwesomeIcon icon={faSearch} className="Bars_menu" />
            </button>
          </div>

        

       <div className={this.state.menuActive}>
          <Link onClick={this.closeMenu} to="/" className="LinksMenu">Home</Link>
          <Link onClick={this.closeMenu}  to="/productos" className="LinksMenu">Todos los Productos</Link>
          <Link onClick={this.closeMenu}  to="/carrito" className="LinksMenu">Carrito</Link>
       </div>
      </>
    );
  }
}

export default Navbar;
