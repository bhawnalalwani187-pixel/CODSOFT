import { useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


function App() {

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <div>
      <Navbar/>
      <Login />
      <h1>My E-Commerce Website</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
      <Checkout cart={cart} />
    </div>
  );
}

export default App;