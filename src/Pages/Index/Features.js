import {Link} from 'react-router-dom';

const Features=()=>(
    <>
            {/* tp-features-list-area-start  */}
         <div className="tp-features-list-area mb-10">
            <div className="container">
               <div className="row justify-content-end">
                  <div className="col-xl-7 col-lg-8">
                     <div className="tp-features-list">
                        <div className="tp-list-item mb-30">
                           <i className="flaticon-wheat-1"></i>
                           <h5 className="features-title">Agriculture Products</h5>
                        </div>
                        <div className="tp-list-item mb-30">
                           <i className="flaticon-vegetable"></i>
                           <h5 className="features-title">Fresh Vegetables</h5>
                        </div>
                        <div className="tp-list-item mb-30">
                           <i className="flaticon-cow"></i>
                           <h5 className="features-title">Cow Milk<br/> & Milk Products</h5>
                        </div>
                        <div className="tp-list-item mb-30">
                           <i className="flaticon-house"></i>
                           <h5 className="features-title">Warehouse <br/> & Stock</h5>
                        </div>
                        <div className="tp-list-item mb-30">
                           <i className="flaticon-tractor-1"></i>
                           <h5 className="features-title">Training  <br/> Cells</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* tp-features-list-area-end  */}

         {/* orgainc-product-start */}
         <div className="orgainc-product pt-10 pb-60 h2-gray-bg position-relative">
            <div className="project-bg">
               <img src="assets/img/project/project-bg.png" className="img-fluid" alt=""/>
            </div>
            <div className="overlay-bg">
                  <img src="assets/img/project/product-bg-o.jpg" alt=""/>
            </div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                     <div className="organic-image">
                        <img style={{ height:"450px"}}src="assets/img/project/organicShop.jpg" className="img-fluid" alt=""/>
                        <div className="organic-meta">
                           <h5>46,320</h5>
                           <span>Registered Farmers</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="organic-product-content pl-80 mt-50">
                        <div className="tp-section-wrap">
                           <span><i className="flaticon-grass"></i></span>
                           <h3 className="tp-section-title">Vision Statement of Organic Product</h3>
                           <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers so they are 
                              best for human body consumption.</p>
                        </div>
                        <h5 className="organic-product-title mt-40">Role of Board</h5>
                        <div className="row g-0">
                           <div className="col-xl-6 col-lg-6">
                              <p className="organic-features-info">The role of the Board in the promotion of Organic Farming in the state is assisted by articles 
                                                of association which describes the UOCB as a promoting and facilitating organization.</p>
                           </div>
                           <div className="col-xl-6 col-lg-6">
                              <div className="organic-features-list">
                                 <a href="#">-   To Make Uttarakhand the Organic Capital of India.</a>
                                 <a href="#">-   To Achieve Sustainable Rural Development in the State of Uttarakhand through Organic Farming.</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
          {/* orgainc-product-end */}
    </>
)

export default Features;