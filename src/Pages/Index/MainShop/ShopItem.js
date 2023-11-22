import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ModalShop from '../../../Components/Modal/modalShop';
import { insertInWishlist } from '../../../Api/wishlist';

export default function ShopItem(props){
   const {item,index,addToCart,addToWishlist,removeWishlist,deleteFromCart} = props;

   return( 
      <>
         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="features-product-item text-center mb-30">
               <div className="product-item-image">
                  <img src={item.image} alt="" className="img-fluid"/>
                  <div className="product-item-action">
                     {item.wishlist_status==0?(
                        <button  style={{ padding:"8px"}}onClick={()=> addToWishlist(item.id)}><i className="fal fa-heart btn btn-light"/></button>
                     ):(
                        <button  style={{ padding:"8px"}}onClick={()=> removeWishlist(item.id)}><i className="fal fa-heart btn btn-dark"/></button>
                     )}
                     {item.cart_status==0?(
                        <button style={{ padding:"8px"}}  onClick={()=> addToCart(item.id)}><i className="fal fa-shopping-cart btn btn-light"/></button>
                     ):(
                        <button style={{ padding:"8px"}}  onClick={()=> deleteFromCart(item.id)}><i className="fal fa-shopping-cart btn btn-dark"/></button>
                     )}
                     <button style={{ padding:"8px"}} data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye btn btn-light"></i></button>
                  </div>
               </div>
               <h4 className="product-item-title">{item.name}</h4>
               <h5 className="product-item-price mb-35">Rs. {item.price}/kg</h5>
            </div>
         </div>
         <ModalShop item={item} index={index}/>
      </>
   )
    
}

// export default ShopItem;