import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../data";
import { Link } from "react-router-dom";
import example from "./imageproduct.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";



export default function Product() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  let params = useParams();
  let navigate = useNavigate();
  let product = getProduct(parseInt(params.productId, 10));
  let aux =[];

  let handleAdd = () =>{
    cart.forEach(element => {
      aux=[...aux, element]
    });
    setCart([...aux,{nombre: product.name, precio:product.amount, id:product.id}]);
    setCart([...aux,{nombre: product.name, precio:product.amount, id:product.id}]);
    console.log(aux);

  }
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('prod', true);
    localStorage.setItem('message', "");
    console.log(cart);
    navigate("/carrito");
  });
  
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link className="button_back" to="/productos">
      <FontAwesomeIcon icon={faArrowLeft} className="Heart" />
        Volver
        

      </Link>

      <div className="main_container_details">
        <div className="image_container_details">
          <img className="img_product_details" src={example} alt="producto" />
        </div>
        <div className="description_container_details">
          <h1 className="details_title">{product.name}</h1>
          <h3 className="details_price">{product.amount}</h3>
          <div className="variation_container_details">Variaciones</div>
          <div className="butons_container_details">
            <button className="btn_details" onClick={handleAdd}>Agregar al carrito</button>
            <button className="btn_details">Comprar ahora</button>
          </div>
          <h3>Descripción</h3>
          <p className="details_description">{product.due}</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
