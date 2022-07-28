import React from 'react';
import 'App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'css/ProductListing.css'
import 'css/general.css'
import 'css/cart.css'
import 'css/authentication.css'
import ProductListing from 'components/ProductListing';
import Header from 'components/Header'
import { ProductProvider } from 'contexts/ProductContext'
import '../node_modules/rsuite/dist/rsuite.min.css';
import { CartProvider } from 'contexts/CartContext'
import Cart from 'components/Cart';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import { UserProvider } from 'contexts/UserContext';

function App() {

  return (
    <div>
      <UserProvider>
        <Router>
          <ProductProvider>
            <CartProvider>
              {/* <Header /> */}
              <Routes>
                <Route exact path="signup"
                  element={<SignUp />} />
                <Route exact path="signin"
                  element={<SignIn />} />
                <Route exact path="products"
                  element={<ProductListing />} />
                <Route exact path="cart"
                  element={<Cart />} />
              </Routes>
            </CartProvider>
          </ProductProvider>
        </Router>
      </UserProvider>

    </div>

  );
}

export default App;
