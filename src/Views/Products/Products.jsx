import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/Product-detail/ProductCard";
import { getProducts } from "../../data";
import "./Products.css";
import Footer from "../../Components/Footer/Footer"

export default function Products() {
  let products = getProducts();
  return (
    <div className="main_product">
      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="h1Products">Todos los productos</h1>
      <div className="main_products_container">
        <div className="products_list_container">
          {products.map((product) => (
            <ProductCard
              productPrice={product.amount}
              productName={product.name}
              productId={product.id}
              key={product.id}
            />
          ))}
        </div>
      </div>

      <Outlet />

      <Footer/>
    </div>
  );
}
