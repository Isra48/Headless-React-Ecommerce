import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './Cart.css'


class Cart extends React.Component {
  state ={
    products: JSON.parse(localStorage.getItem('cart')),
    message: localStorage.getItem('message'),
    aux: [],
    prod: localStorage.getItem('prod'),
  }
  componentDidMount(){
    console.log(this.state.products);
  }
  buy = e =>{
    localStorage.setItem('cart', JSON.stringify([{}])); 
    localStorage.setItem('message', "Tu carrito está vacío");
    localStorage.setItem('prod', false);
    this.setState({message: "Tu carrito está vacío", prod: false})
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <br/>
        <br/>
        <div className="cart_main_container">
            <h1>Carrito de compras</h1>
            <div className="title_cart_container">
              <div className="product_cart_row">
                <h2>Producto</h2>
              </div>
              <div className="price_cart_row">
                <h2>Precio</h2>
              </div>
              <div className="counter_cart_row">
                <h2>Cantidad</h2>
              </div>
              <div className="total_cart_row">
                <h2 style={{textAlign: "right"}}>Total</h2>
              </div>
            </div>
            <hr className="cart_line"></hr>
            {this.state.prod ?<div className="elements_cart_container">
              <div className="product_cart_row">
                  {this.state.products.map((product) => (
                    <p key={product.id}>{product.nombre}</p>
                  ))}
              </div>
              <div className="price_cart_row">
                {this.state.products.map((product) => (
                    <p key={product.id}>{product.precio}</p>
                  ))}
              </div>
              <div className="counter_cart_row">
              {this.state.products.map((product) => (
                    <p key={product.id}>{product.cantidad}</p>
                  ))}
              </div>
              <div className="total_cart_row">
              {this.state.products.map((product) => (
                    <p style={{textAlign: "right"}} key={product.id}>{product.precio}</p>
                  ))}
              </div>
            </div> : null}

            <div className="cart_line"></div>
            <div className="subtotal_cart_container">
              <h1>Subtotal</h1>
              {this.state.prod ? <h1><span>{this.state.products[0].precio}</span></h1> : null}
            </div>  
            <button onClick={this.buy} className="btn_details">Concretar compra</button>
            <p>{this.state.message}</p>
        </div>
      </>
    );
  }
}

export default Cart;
