import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Hero1 from "../../Components/Hero1/Hero1";
import Banner1 from "../../Components/Banner1/Banner1";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";

import ProductCard from "../../Components/Product-detail/ProductCard";
import './Home.css'
import Fade from 'react-reveal/Fade';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <br/>
        <br/>
        <Hero1 />
        <Banner1 />
        <Fade>
          <Categories />
        </Fade>
        

        <div className="mark_products_container">
          <div className="mark_products_row">
            <ProductCard
              productPrice="$10,800"
              productName="Sandalias"
              productId="1001"
            />
            <ProductCard
              productPrice="$8,000"
              productName="Sudadera"
              productId="1002"
            />
            <ProductCard
              productPrice="$9,500"
              productName="Licuadora"
              productId="1003"
            />
          </div>
        </div>

        <Footer/>
        
      </>
    );
  }
}

export default Home;
