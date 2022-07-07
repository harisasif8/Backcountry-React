import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './css/ProductListing.css'
import './css/general.css'
import ProductListing from './components/ProductListing';
import Header from './components/Header'
import { ProductProvider } from './components/ProductContext'
import '../node_modules/rsuite/dist/rsuite.min.css';

  

function App() {

  return (
    <Router>
      <ProductProvider>
        <div>
          <Header />
          <Routes>
            <Route exact path="/products"
              element={<ProductListing />} />
              {/* <Route exact path="/cart"
              element={<ProductListing />} /> */}
          </Routes>
        </div>
      </ProductProvider>
    </Router>
  );
}

export default App;
