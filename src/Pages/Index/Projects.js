import {Link} from 'react-router-dom';

const Projects=()=>(
    <>
            {/* company-features-start  */}
         <div className="company-features pt-80 pb-40">
            <div className="container">
               <div className="tp-section-wrap text-center">
                  <span><i className="flaticon-grass"></i></span>
                  <h3 className="tp-section-title">Our Ongoing Projects</h3>
                  <p>Organic farming is not just another fashion trend. It is a sustainable lifestyle that has many benefits and uttrakhand
                     has launched variety of organic shops, schemes and haats.</p>
               </div>
               <div className="company-features-list mt-50">
                  <div className="row">
                     <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="company-features-item mb-30">
                           <div className="features-item text-center">
                              <h1 className="features-item-title">MAIN SCHEMES</h1>
                              <img style={{ height:"100px"}} src="assets/img/features/rkvy.jpg" alt=""/>
                              <h4 className="features-item-title">Rashtriya Krishi Vikas Yojana</h4>
                              <p>RKVY scheme is responsible for planning and executing programs for incentivizing investment in agriculture 
                                 by providing the states considerable flexibility and autonomy.</p>
                           </div>
                           <div className="features-item-btton">
                              <h1 href="" className="features-btn"> </h1>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="company-features-item mb-30">
                           <div className="features-item text-center">
                              <h1 className="features-item-title">ORGANIC SHOP </h1>
                              <img style={{ height:"100px"}} src="assets/img/features/shop1.jpg" alt=""/>
                              <h4 className="features-item-title">Shops in various parts of state</h4>
                                 <p>- Organic Shop IT Park</p>
                                 <p>- Organic Shop Thano</p>
                                 <p>- Organic Shop Sahiya</p>
                                 <p>- Organic Shop Rudraprayag</p>
                           </div>
                           <div className="features-item-btton">
                           <h1 href="" className="features-btn"> </h1>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="company-features-item mb-30">
                           <div className="features-item text-center">
                              <h1 className="features-item-title">ORGANIC HAAT </h1>
                              <img style={{ height:"100px"}} src="assets/img/features/haat.jpg" alt=""/>
                              <h4 className="features-item-title">Uttarakhand Handicraft</h4>
                                 <p>Kisan Bhawan</p>
                                 <p>- (Thursday) (3pm-6pm)</p>
                                 <p>Vikash Bhawan</p>
                                 <p>- (Sunday) (8am-1pm)</p>
                           </div>
                           <div className="features-item-btton">
                           <h1 href="" className="features-btn"></h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* company-features-en */}
    </>
)

export default Projects;