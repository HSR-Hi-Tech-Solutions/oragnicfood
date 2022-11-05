import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Cart from './components/pages/Cart/Cart';
import ProductListing from './components/pages/ProductListing/ProductListing';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';
import Wishlist from './components/pages/Wishlist/Wishlist';
import Error from './Error';

const PageRoute = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/product-listing' element={<ProductListing/>} />
        <Route exact path='/product-details' element={<ProductDetails/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/wishlist' element={<Wishlist/>} />
        <Route  path='*' element={<Error/>} />
      </Routes>
     </Router>
    </>
  )
}

export default PageRoute;