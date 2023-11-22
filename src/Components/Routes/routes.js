import React from 'react';
// import Login from '../Login/Login';
// import { Route,Routes } from 'react-router-dom';
import { Route,Routes, Link, BrowserRouter as Router } from 'react-router-dom'  
import Index from '../../Pages/Index/Index';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import MainShop from '../../Pages/Index/MainShop/MainShop';
import Wishlist from '../../Pages/Wishlist/Wishlist';
import Cart from '../../Pages/Cart/Cart';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import Checkout from '../../Pages/Cart/Checkout';
// import WhiteBoard from '../../Pages/WhiteBoard/WhiteBoard';

const RoutesPath = props => {
    return  (
        <div className="page-wrapper">
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Routes> 
                      {/* <Route exact path="/whiteBoard" element={<WhiteBoard/>} /> */}
                      <Route exact path="/cart" element={<Cart/>} />
                      <Route exact path="/wishlist" element={<Wishlist/>} />
                      <Route exact path="/aboutus" element={<AboutUs/>}/>
                      <Route exact path="/shop" element={<MainShop/>} />
                      <Route exact path="/contactus" element={<ContactUs/>} />
                      <Route exact path="/checkout" element={<Checkout/>} />
                      <Route exact path="/" element={<Index/>}/>
                    </Routes>
                </div>
            </div>
        </div>     
    );
};

export default RoutesPath ;