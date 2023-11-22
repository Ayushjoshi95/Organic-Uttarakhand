import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchWishlistItems,removeFromWishlist,insertInWishlist } from '../../Api/wishlist';
import { insertInCart } from '../../Api/cart';
import WishlistItem from './WishlistItem';
import { Snackbar } from '@mui/material';

export default function Wishlist(){

    const [wishlistData,setwishlistData] = useState([]);
    const[SnackBarMessage, setSnackBarMessage] = useState("")
    const[isSnackBarShow, setIsSnackBarShow] = useState(false)

    const fetchWishlistItemsCallback=(response)=>
    {
        if(response.msg==="success")
        {
            setwishlistData(response.data)
            console.log("Rohit".response);
        }
        else{
            return(
                <>
                    <h1>Rohit Chand is the Best</h1>
                </>
            )
        }
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

    useEffect(()=>{
        fetchWishlistItems(fetchWishlistItemsCallback);
      },[])

    
    useEffect(()=>{
        
    },[])

    const closeSnack=()=>{
        setIsSnackBarShow(false)
    }

   return(
      <>
           <main>
        {/* page__title -start  */}
         <div class="page__title align-items-center theme-bg-primary-h1 pt-140 pb-140">
            <div class="container">
                  <div class="row">
                     <div class="col-xl-12">
                        <div class="page__title-content text-center">
                            <div class="page_title__bread-crumb">
                              <nav aria-label="breadcrumb">
                                 <nav aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs">
                                    <ul>
                                       <li>
                                          <Link to={"/"}><span>Home</span></Link>
                                       </li>
                                       <li class="trail-item trail-end">
                                          <span>Wishlist</span>
                                       </li>
                                    </ul>
                                 </nav> 
                              </nav>
                            </div>
                            <h3 class="breadcrumb-title breadcrumb-title-sd mt-30">Your Wishlist</h3>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
         {/*  page__title -end  */}

            {/* Cart Area Strat */}
            <section class="cart-area pb-100 pt-100">
               <div class="container">
                   <div class="row">
                       <div class="col-12">
                           <form>
                               <div class="table-content table-responsive">
                                   <table class="table">
                                       <thead>
                                           <tr>
                                               <th class="product-thumbnail">Images</th>
                                               <th class="cart-product-name">Product</th>
                                               <th class="product-price">Unit Price</th>
                                               <th class="product-quantity">Quantity</th>
                                               <th class="product-subtotal">Total</th>
                                               <th class="product-remove">Remove</th>
                                           </tr>
                                       </thead>
                                       <tbody>
                                       {wishlistData.map((item,index)=>(
                                            <WishlistItem item={item} index={index} removeWishlist={removeWishlist} addToCart={addToCart}/>
                                        ))}
                                           {/* <WishlistItem/> */}
                                       </tbody>
                                   </table>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </section>
           {/* Cart Area End */}
            
           <Snackbar
                open={isSnackBarShow}
                onClose={(e)=>closeSnack(e)}
                TransitionComponent="TransitionUp"
                message={SnackBarMessage}
            />
      </main>
      </>
   )
    
}

// export default ShopItem;