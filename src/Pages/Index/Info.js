import {Link} from 'react-router-dom';
import video from '../../Assets/Video/organicVideo1.mp4';

const Info=()=>(
    <>
            {/* info-area-2-start  */}
         <div className="video-area-2 position-relative mt-60">
            <div className="video-area play-area" data-background="assets/img/bg/ideo-bg-2.jpg">
               <video width="900" height="auto" loop autoPlay muted>
                  <source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
               </video>
            </div>
            <div className="row g-0 justify-content-end">
               <div className="col-xl-6 col-lg-6 video-col col-md-6 col-12">
                  <div className="video-box theme-bg pt-30 pb-90">
                     <div className="video-content pl-60" >
                        <div className="tp-section-wrap tp-section-wrap-video">
                           <span><i className="flaticon-grass"></i></span>
                           <h3 className="tp-section-title">Advantages of organic food and farming</h3>
                           <p>Organic farming helps to conserve the soil and water. Another advantage of organic foods is that they have good taste and
                               increased nutritious values as compared to non-organic foods. Organic foods have natural flavor since they do not contain
                                additives which gives non-organic foods a different taste.</p>
                        </div>
                        <div className="video-features-list mt-50">
                           <div className="row">
                              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                                 <div className="video-features-item mb-30">
                                    <i className="flaticon-save"></i>
                                    <h5 className="video-features-title">Organic Vegetables</h5>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                                 <div className="video-features-item mb-30">
                                    <i className="flaticon-digging"></i>
                                    <h5 className="video-features-title">Pure Soil Making</h5>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                                 <div className="video-features-item mb-30">
                                    <i className="flaticon-wheat-1"></i>
                                    <h5 className="video-features-title">Organic Crops</h5>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                                 <div className="video-features-item mb-30">
                                    <i className="flaticon-box"></i>
                                    <h5 className="video-features-title">Nutrient-Denser Food</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="video-bg-image">
                           <img src="assets/img/bg/bg-img-1.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
          {/* info-area-2-end  */} 
    </>
)

export default Info;