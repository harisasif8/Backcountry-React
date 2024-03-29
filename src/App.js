import React from 'react';
import 'App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'css/productListing.css'
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
import ProtectedRoute from 'components/routes/ProtectedRoute'
import PublicRoute from 'components/routes/PublicRoute';
import Footer from 'components/Footer';

function App() {

  return (
    <div>
      <UserProvider>
        <Router>
          <ProductProvider>
            <CartProvider>
              <Header />
              <Routes>
                <Route exact path="signup" element={<SignUp />} />
                <Route exact path="signin" element={<PublicRoute><SignIn /></PublicRoute>} />
                <Route exact path="" element={<ProtectedRoute><ProductListing /></ProtectedRoute>} />
                <Route exact path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
              </Routes>
              <Footer />
            </CartProvider>
          </ProductProvider>
        </Router>
      </UserProvider>
    </div>

  );
}

export default App;
