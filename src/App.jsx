import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Cart from "./Cart";
import Products from "./Products";
import Home from './Home';
import ProductDetails from './ProductDetails'; 
import { Provider } from 'react-redux';
import appStore from './Redux/Store';

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Header />
        {/* Apply padding only ONCE (equal to header height ~80px) */}
        <div className="pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
