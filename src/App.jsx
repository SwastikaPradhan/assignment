import "bootstrap-4-react/dist/bootstrap-4-react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home"; // Make sure to import the Home component
import Products from "./Components/Products";
import SingleProduct from "./Components/singleproduct";
import Cart from "./Components/cart"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

