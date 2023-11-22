import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Government from './Government';
import Projects from './Projects';
import Partners from './Partners';
import Features from './Features';
import Matrix from './Matrix';
import Info from './Info';
import ModalShop from '../../Components/Modal/modalShop';
import { Snackbar } from '@mui/material';
import { insertInWishlist,removeFromWishlist } from '../../Api/wishlist';
import { insertInCart,removeFromCart } from '../../Api/cart';
import { fetchLimitShopItems } from '../../Api/shop';
import ShopItem from './MainShop/ShopItem';

const Index =() =>{

   const [shopData,setShopsData] = useState([]);
   const[SnackBarMessage, setSnackBarMessage] = useState("");
   const[isSnackBarShow, setIsSnackBarShow] = useState(false);

   const fetchLimitShopItemsCallback=(response)=>
    {
        if(response.msg==="success")
        {
            setShopsData(response.data)
        }
    }


   const insertInCartCallback = (response) => {
      if (response.msg === "success") { 
          setSnackBarMessage("Added to cart Successfully")
          setIsSnackBarShow(true)
      }
      else {
          setSnackBarMessage("Something went wrong")
          setIsSnackBarShow(true)
      }
  }

  const addToCart =(row_id)=>{ 
      insertInCart(row_id,(response)=>insertInCartCallback(response));
  }

  

  const insertInWishlistCallback = (response) => {
      if (response.msg === "success") { 
          setSnackBarMessage("Added to Wishlist Successfully")
          setIsSnackBarShow(true)
      }
      else {
          setSnackBarMessage("Something went wrong")
          setIsSnackBarShow(true)
      }
  }

  const addToWishlist =(row_id)=>{ 
      insertInWishlist(row_id,(response)=>insertInWishlistCallback(response));
  }


  const removeFromWishlistCallback = (response) => {
   if (response.msg === "success") { 
       setSnackBarMessage("Removed from Wishlist Successfully")
       setIsSnackBarShow(true)
   }
   else {
       setSnackBarMessage("Something went wrong")
       setIsSnackBarShow(true)
   }
}

const removeWishlist =(row_id)=>{ 
   removeFromWishlist(row_id,(response)=>removeFromWishlistCallback(response));
}


const removeFromCartCallback = (response) => {
   if (response.msg === "success") { 
       setSnackBarMessage("Removed from Cart Successfully")
       setIsSnackBarShow(true)
   }
   else {
       setSnackBarMessage("Something went wrong")
       setIsSnackBarShow(true)
   }
}

const deleteFromCart =(row_id)=>{ 
    removeFromCart(row_id,(response)=>removeFromCartCallback(response));
}



useEffect(()=>{
   fetchLimitShopItems(fetchLimitShopItemsCallback);
      },[])

      
  const closeSnack=()=>{
      setIsSnackBarShow(false)
   }
    
    return(
      <main>
          {/* banner-area-start  */}
          <div className="banner-area pt-200 pb-180">
            <div className="container">
                <div className="row justify-content-start">
                  <div className="col-xl-5 col-lg-7 col-md-9 col-12 col-xm">
                     <div className="banner-content banner-content-2">
                        <div className="banner-info text-center">
                           <div className="baner-icon">
                              <i className="flaticon-grass"></i>
                           </div>
                           <p>Organic Uttarakhand</p>
                           <h3 className="banner-title-h1 banner-title">High Quality Organic Products</h3>
                           <div className="banner-button mt-30">
                              <Link to={"/aboutUs"} className="tp-btn-h1">Learn About Us</Link>
                           </div>
                        </div>
                        <div className="banner-shape-bg">
                           <img src="assets/img/bg/banner-bg-shape.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* banner-area-end  */}

         <Government/>
         <hr/>
         <div className="features-product pt-40 pb-60">
            <div className="container">
               <div className="tp-section-wrap text-center">
                  <span><i className="flaticon-grass"></i></span>
                  <h3 className="tp-section-title">Our Products</h3>
                  <h4>Live Organic | Everything Here Grown by Nature</h4>
               </div>
               <div className="features-product-list mt-50">
                  <div className="row">
                    {shopData.map((item,index)=>(
                        <ShopItem item={item} index={index} addToCart={addToCart} addToWishlist={addToWishlist} removeWishlist={removeWishlist} deleteFromCart={deleteFromCart}/>
                    ))}
                  </div>
               </div>
               <div class="banner-button mt-30 mb-30 text-center">
                  <Link to={"/shop"} class="tp-btn-h1">GO TO SHOP</Link>
               </div>
            </div>
            <hr/>
         </div>
         <Features/>
         <Projects/>
         <Info/>
         <Matrix/>
         <Partners/>
         <ModalShop/>

        <Snackbar
            open={isSnackBarShow}
            onClose={(e)=>closeSnack(e)}
            TransitionComponent="TransitionUp"
            message={SnackBarMessage}
        />
      </main>
    )
      
}
export default Index;