import React, { useState, useEffect } from 'react';
import ShopItem from './ShopItem';
import { fetchShopItems } from '../../../Api/shop';
import { insertInWishlist,removeFromWishlist } from '../../../Api/wishlist';
import { insertInCart,removeFromCart } from '../../../Api/cart';
import {Link} from 'react-router-dom';
import { Snackbar } from '@mui/material';
 
const MainShop = ()=>{

    const [shopData,setShopsData] = useState([]);
    const[SnackBarMessage, setSnackBarMessage] = useState("")
    const[isSnackBarShow, setIsSnackBarShow] = useState(false)

    const fetchShopItemsCallback=(response)=>
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
        fetchShopItems(fetchShopItemsCallback);
      },[])


    const closeSnack=()=>{
        setIsSnackBarShow(false)
    }

    return (
        <div>
            {/* page__title -start  */}
            <div className="page__title align-items-center theme-bg-primary-h1 pt-140 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__title-content text-center">
                                <div className="page_title__bread-crumb">
                                <nav aria-label="breadcrumb">
                                    <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                        <ul>
                                        <li>
                                            <Link to={"/"}><span>Home</span></Link>
                                        </li>
                                        <li>
                                            <span>Product Shop</span>
                                        </li>
                                        </ul>
                                    </nav> 
                                </nav>
                                </div>
                                <h3 className="breadcrumb-title breadcrumb-title-sd mt-30">Product Showcase</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          {/* page__title -end */}

            {/* <ShopItem /> */}

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
            </div>
            <hr/>
         </div>
         
            {/* <ModalShop /> */}
            <Snackbar
                open={isSnackBarShow}
                onClose={(e)=>closeSnack(e)}
                TransitionComponent="TransitionUp"
                message={SnackBarMessage}
            />
        </div>

        
    )
}

export default MainShop;