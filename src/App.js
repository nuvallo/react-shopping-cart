import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext.js";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = itemId => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, setCart, removeItem }}>
          <Navigation cart={cart} />
          {/* Routes */}
          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
        <Route exact path="/" component={Products} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
