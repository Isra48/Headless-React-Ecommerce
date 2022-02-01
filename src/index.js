import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./index.css";
import Home from "../src/Views/Home/Home.jsx";
import Products from "../src/Views/Products/Products.jsx";
import Cart from "../src/Views/Cart/Cart.jsx";
import Product from "./Components/Product-detail/Product";


const rootElement = document.getElementById("root");
localStorage.setItem('cart',JSON.stringify([{}]));
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos">
        <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="/carrito" element={<Cart />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
