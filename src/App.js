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

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      <Route
        exact
        path="/cart"
        render={() => <Products products={products} addItem={addItem} />}
      />

      <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
    </div>
  );
}

export default App;
