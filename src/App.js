import React from 'react';
// import { useSelector } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Index from './Pages/Index/Index';
import AboutUs from './Pages/AboutUs/AboutUs';
import MainShop from './Pages/Index/MainShop/MainShop';
import Wishlist from './Pages/Wishlist/Wishlist';
import Cart from './Pages/Cart/Cart';
import UseEffectHook from './Pages/UseEffect/UseEffectHook';

import Routes from './Components/Routes/routes';

function App(props) {
  return (
    <div>
      <><Header/></>
       {/* <MainShop/> */}
       {/* <Wishlist/> */}
       {/* <Cart/> */}
      {/* <Index/> */}
      {/* <AboutUs/>   */}
      <Routes/>
      {/* <UseEffectHook/> */}
      <><Footer/></>
      
    </div>
  );
}


export default App;
