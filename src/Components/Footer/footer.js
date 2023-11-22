import { Link } from "react-router-dom"

const Footer = () =>(
      <footer >
         <div className="footer-top footer-top-3 pt-80 pb-40">
            <div className="container">
               <div className="footer-features h3-gray-bg mb-70">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-1 col-lg-3 col-md-4 col-12">
                           <div className="footer-logo mb-20">
                              <Link to={"/"}><img style={{height: "60px"}} src="assets/img/organicUk2.png" alt=""/></Link>
                           </div>
                        </div> 
                        <div className="col-xl-5 col-lg-3 col-md- col-8">
                           <div className="logo">
                              <h3>ORGANIC UTTARAKHAND</h3>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                           <div className="footer-features-item mb-20">
                              <i className="flaticon-fields"></i>
                              <h5 className="footer-features-title">We Use <br/> New Technology</h5>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                           <div className="footer-features-item mb-20">
                              <i className="flaticon-sapling"></i>
                              <h5 className="footer-features-title">Some of the partners
                                <br/> and clients</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="footer-widget footer-col-1 mb-40">
                        <h5 className="footer-title mb-35">About Us</h5>
                        <p>We aim to achieve sustainable rural developmemt in the state of uttarakhand through organic farming and to make make Uttarakhand the organic capital of India</p>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                     <div className="footer-widget footer-col-5 mb-40">
                        <h5 className="footer-title-h1 footer-title mb-30 footer-sm-title">Services</h5>
                        <div className="footer-menu footer-menu-2">
                           <ul>
                               <li><Link to="#">Organic Food Delivery</Link></li>
                               <li><Link to="#">Natural Vegetables</Link></li>
                               <li><Link to="#">Pure Crops</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-4 col-sm-6">
                     <div className="footer-widget footer-col-5 mb-40">
                        <h5 className="footer-title-h1 footer-title mb-30 footer-sm-title">Essential Pages</h5>
                           <ul className="footer-menu-1 footer-menu footer-menu-2 footer-menu-c"> 
                               <li><Link to={"/aboutus"}>About</Link></li>
                               <li><Link to={"/wishlist"}>Wishlist</Link></li>
                               <li><Link to={"/cart"}>Cart</Link></li>
                               <li><Link to={"/contactus"}>Contact Us</Link></li>
                               <li><Link to={"/shop"}>Shop</Link></li>
                           </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="copy-right-area theme-bg-common pt-30">
            <div className="container">
               <div className="row align-items-center">
               <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <p className="mb-30 copy-right-text-1">design and copyright by <Link to="#">@ayushjoshi947</Link> - 2023</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
)

export default Footer;