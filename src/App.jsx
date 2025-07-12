import "./App.css";
import { useState } from "react";
import Header from "./Components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cart from "./Components/Cart.jsx";
import OpenToWork from "./pages/OpenToWork.jsx";
import FAQs from "./pages/FAQs.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    if (!cartItems.some((i) => i.id === item.id)) {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <Header cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/opentowork" element={<OpenToWork />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
