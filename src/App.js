import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './css/ProductListing.css'
import './css/general.css'
import ProductListing from './components/ProductListing';
import Header from './components/Header'
import { useEffect } from 'react';


function App() {

  // useEffect()

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/products"
            element={<ProductListing />} />
          <Route exact path="/"
            element={<ProductListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
