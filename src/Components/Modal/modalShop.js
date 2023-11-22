import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function ModalShop(props){
   const {item,index}=props;

   return(
      <>
      {/* shop modal of extra information  */}
      <div className="modal fade" id="productModalId" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered product__modal" role="document">
             <div className="modal-content">
                <div className="product__modal-wrapper p-relative">
                      <div className="product__modal-close p-absolute">
                         <button data-bs-dismiss="modal"><i className="fal fa-times"></i></button>
                      </div>
                      <div className="product__modal-inner">
                         <div className="row">
                         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="product__modal-box">
                                  <div className="tab-content" id="modalTabContent">
                                     <div className="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                                        <div className="product__modal-img w-img">
                                              <img src="assets/img/product/quick-view/quick-view-1.jpg" alt=""/>
                                        </div>
                                     </div>
                                  </div>
                            </div>
                         </div>
                         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="product__modal-content">
                                  <h4><a href="shop-details.html">Smashed Potato with green chili Regular (± 50 gm)</a></h4>
                                  <div className="product__modal-des mb-40">
                                     <p>Organic products are good for health and is best for daily consumption and for environment also.</p>
                                  </div>
                                  <div className="product__stock">
                                     <span>Availability :</span>
                                     <span>In Stock</span>
                                  </div>
                                  <div className="product__stock sku mb-30">
                                     <span>SKU:</span>
                                     <span>Samsung C49J89: £875, Debenhams Plus</span>
                                  </div>
                                  <div className="product__review d-sm-flex">
                                     <div className="rating rating__shop mb-15 mr-35">
                                     <ul>
                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                     </ul>
                                     </div>
                                     <div className="product__add-review mb-15">
                                     <span><a href="shop-details.html">1 Review</a></span>
                                     <span><a href="shop-details.html">Add Review</a></span>
                                     </div>
                                  </div>
                                  <div className="product__price">
                                     <span>$560.00</span>
                                  </div>
                                  <div className="product__modal-form">
                                     <form action="#">
                                     <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity mr-20 mb-25">
                                              <div className="cart-plus-minus p-relative"><input type="text" value="1" /></div>
                                        </div>
                                        <div className="pro-cart-btn mb-25">
                                              <button className="tp-btn-h1" type="submit">Add to cart</button>
                                        </div>
                                     </div>
                                     </form>
                                  </div>
                                  <div className="product__modal-links">
                                     <ul>
                                     <li><a href="wishlist.html" title="Add to Wishlist"><i className="fal fa-heart"></i></a></li>
                                     <li><a href="shop-details.html" title="Compare"><i className="far fa-sliders-h"></i></a></li>
                                     <li><a href="cart.html" title="Print"><i className="fal fa-print"></i></a></li>
                                     <li><a href="checkout.html" title="Share"><i className="fal fa-share-alt"></i></a></li>
                                     </ul>
                                  </div>
                            </div>
                         </div>
                         </div>
                      </div>
                </div>
             </div>
          </div>
       </div>
  </>
   )
}
    


// export default ModalShop;