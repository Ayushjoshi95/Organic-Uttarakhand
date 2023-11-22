import {Link} from 'react-router-dom';

const Shop=props=>{
   const {item,index}=props;

   return(
      <>
            {/* features-product-start  */}
         <div className="features-product pt-40 pb-60">
            <div className="container">
               <div className="tp-section-wrap text-center">
                  <span><i className="flaticon-grass"></i></span>
                  <h3 className="tp-section-title">Our Products</h3>
                  <h4>Live Organic | Everything Here Grown by Nature</h4>
               </div>
               <div className="features-product-list mt-50">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="features-product-item text-center mb-30">
                           <div className="product-item-image">
                              <img src="assets/img/product/product-f-1.jpg" alt="" className="img-fluid"/>
                              <div className="product-item-action">
                                 <a href="wishlist.html"><i className="fal fa-exchange"></i></a>
                                 <a href="cart.html"><i className="fal fa-shopping-cart"></i></a>
                                 <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></a>
                              </div>
                           </div>
                           <h4 className="product-item-title"><a href="shop-details.html"></a></h4>
                           <h5 className="product-item-price mb-35">$19.00</h5>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="features-product-item text-center mb-30">
                           <div className="product-item-image">
                              <img src="assets/img/product/product-f-2.jpg" alt="" className="img-fluid"/>
                              <div className="product-item-action">
                                 <a href="wishlist.html"><i className="fal fa-exchange"></i></a>
                                 <a href="cart.html"><i className="fal fa-shopping-cart"></i></a>
                                 <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></a>
                              </div>
                           </div>
                           <h4  className="product-item-title"><a href="shop-details.html">Pure & Organic Carrot</a></h4>
                           <h5 className="product-item-price mb-35">$13.00</h5>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="features-product-item text-center mb-30">
                           <div className="product-item-image">
                              <img src="assets/img/product/product-f-3.jpg" alt="" className="img-fluid"/>
                              <div className="product-item-action">
                                 <a href="wishlist.html"><i className="fal fa-exchange"></i></a>
                                 <a href="cart.html"><i className="fal fa-shopping-cart"></i></a>
                                 <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></a>
                              </div>
                           </div>
                           <h4 className="product-item-title"><a href="shop-details.html">Pro Green Corn</a></h4>
                           <h5 className="product-item-price mb-35">$10.00</h5>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="features-product-item text-center mb-30">
                           <div className="product-item-image">
                              <img src="assets/img/product/product-f-4.jpg" alt="" className="img-fluid"/>
                              <div className="product-item-action">
                                 <a href="wishlist.html"><i className="fal fa-exchange"></i></a>
                                 <a href="cart.html"><i className="fal fa-shopping-cart"></i></a>
                                 <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></a>
                              </div>
                           </div>
                           <h4 className="product-item-title"><a href="shop-details.html">Organic Pure Grapes</a></h4>
                           <h5 className="product-item-price mb-35">$12.00</h5>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="features-product-list mt-20">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="features-product-item text-center mb-30">
                           <div className="product-item-image">
                              <img src="assets/img/product/product-f-1.jpg" alt="" className="img-fluid"/>
                              <div className="product-item-action">
                                 <a href="wishlist.html"><i className="fal fa-exchange"></i></a>
                                 <a href="cart.html"><i className="fal fa-shopping-cart"></i></a>
                                 <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></a>
                              </div>
                           </div>
                           <h4 className="product-item-title"><a href="shop-details.html">Organic Pure Tomato</a></h4>
                           <h5 className="product-item-price mb-35">$19.00</h5>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="features-product-item text-center mb-30">
                           <div className="product-item-image">
                              <img src="assets/img/product/product-f-2.jpg" alt="" className="img-fluid"/>
                              <div className="product-item-action">
                                 <a href="wishlist.html"><i className="fal fa-exchange"></i></a>
                                 <a href="cart.html"><i className="fal fa-shopping-cart"></i></a>
                                 <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></a>
                              </div>
                           </div>
                           <h4  className="product-item-title"><a href="shop-details.html">Pure & Organic Carrot</a></h4>
                           <h5 className="product-item-price mb-35">$13.00</h5>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="features-product-item text-center mb-30">
                           <div className="product-item-image">
                              <img src="assets/img/product/product-f-3.jpg" alt="" className="img-fluid"/>
                              <div className="product-item-action">
                                 <a href="wishlist.html"><i className="fal fa-exchange"></i></a>
                                 <a href="cart.html"><i className="fal fa-shopping-cart"></i></a>
                                 <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></a>
                              </div>
                           </div>
                           <h4 className="product-item-title"><a href="shop-details.html">Pro Green Corn</a></h4>
                           <h5 className="product-item-price mb-35">$10.00</h5>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="features-product-item text-center mb-30">
                           <div className="product-item-image">
                              <img src="assets/img/product/product-f-4.jpg" alt="" className="img-fluid"/>
                              <div className="product-item-action">
                                 <a href="wishlist.html"><i className="fal fa-exchange"></i></a>
                                 <a href="cart.html"><i className="fal fa-shopping-cart"></i></a>
                                 <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-eye"></i></a>
                              </div>
                           </div>
                           <h4 className="product-item-title"><a href="shop-details.html">Organic Pure Grapes</a></h4>
                           <h5 className="product-item-price mb-35">$12.00</h5>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="banner-button mt-30 mb-30 text-center">
                  <Link to={"/aboutUs"} class="tp-btn-h1">GO TO SHOP</Link>
                  </div>
            </div>
            <hr/>
         </div>
         
         
         {/* features-product-end  */}
      </>
   )
    
}

export default Shop;