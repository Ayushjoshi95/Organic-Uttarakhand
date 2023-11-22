import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchCartItems,getTotalCartCost,removeFromCart } from '../../Api/cart';
import CartItem from './CartItem';
import { Snackbar } from '@mui/material';

export default function Cart(props){

   const [cartData,setCartDataData] = useState([]);
   const [totalCost,setTotalCost] = useState('');
   const[SnackBarMessage, setSnackBarMessage] = useState("")
    const[isSnackBarShow, setIsSnackBarShow] = useState(false)

    const fetchCartItemsCallback=(response)=>
    {
        if(response.msg==="success")
        {
            setCartDataData(response.data)
        }
        else{
            return(
                <>
                    <h1>Rohit is the Best</h1>
                </>
            )
        }
    }

    const getTotalCartCostCallback=(response) =>
    {
      if(response.msg === "success")
      {
         setTotalCost(response.data);
      }
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
      fetchCartItems(fetchCartItemsCallback);
      getTotalCartCost(getTotalCartCostCallback); 
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
                                          <span>Cart</span>
                                       </li>
                                    </ul>
                                 </nav> 
                              </nav>
                            </div>
                            <h3 class="breadcrumb-title breadcrumb-title-sd mt-30">Your Cart</h3>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
         {/* < page__title -end  */}

         {/* Cart Area Strat */}
         <section class="cart-area pt-100 pb-100">
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
                                       {cartData.map((item,index)=>(
                                            <CartItem item={item} index={index} deleteFromCart={deleteFromCart}/>
                                        ))}
                                    </tbody>
                              </table>
                           </div>
                           <div class="row">
                              <div class="col-12">
                                    <div class="coupon-all">
                                       <div class="coupon">
                                          <Link to={"/cart"}><button class="tp-btn-h1" name="update_cart">Update cart</button></Link>
                                       </div>
                                    </div>
                              </div>
                           </div>
                           <div class="row justify-content-end">
                              <div class="col-md-5">
                                    <div class="cart-page-total">
                                       <h2>Cart total</h2>
                                       <ul class="mb-20">
                                          <li>Total <span>Rs. {totalCost.price}</span></li>
                                       </ul>
                                       <Link to={"/checkout"}class="tp-btn-h1">Proceed to checkout</Link>
                                    </div>
                              </div>
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