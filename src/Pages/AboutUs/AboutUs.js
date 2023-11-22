import {Link} from 'react-router-dom';
import Partners from '../Index/Partners';
import Info from '../Index/Info';
import ReactPlayer from "react-player";
import video from '../../Assets/Video/organicVideo2.mp4';

const AboutUs =()=>(
    <>
    <main>
          {/* page__title -start  */}
         <div class="page__title align-items-center theme-bg-primary-h1 pt-140 pb-135">
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
                                          <span>About</span>
                                       </li>
                                    </ul>
                                 </nav> 
                              </nav>
                            </div>
                            <h3 class="breadcrumb-title breadcrumb-title-sd mt-30">About Organic Uttarakhand</h3>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
         {/* page__title -end */}

          {/* about-area-start  */}
         <div class="about-area pt-120 pb-110">
            <div class="container">
               <div class="row">
                  <div class="col-xl-6 col-lg-6">
                     <div class="tp-section-wrap">
                        <span class="asub-title grace-span">- Uttarakhand story</span>
                        <h3 class="tp-section-title"> Organic Uttarakhand Story</h3>
                     </div>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                     <div class="about-info">
                        <p>With the continuous increase in the number of organic activities and farmers through various
                            projects in Uttarakhand, a great need was felt to constitute an organization to promote, coordinate,
                             the dispersed organic activities and efforts for Organic Farming in the state. Uttarakhand Organic C
                             ommodity Board came into existence on 19 May 2003. The board was registered under the societies
                              registration act, 1860 and is acting as the nodal agency of the state to enhance organic activities 
                              in agriculture and allied sectors like Horticulture, Medicinal Aromatic Plants & Herbs, and animal husbandry
                               throughout the state. </p>
                           <p>On-going programs, many of which are funded externally presently provide the source for 
                               human resources for the technical and marketing activities.</p>
                        <div class="about-button mt-30">
                           <Link to={"/contactus"} class="tp-btn-ab">Get In Touch <i class="fal fa-long-arrow-right"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* about-area-end  */}

         <Info/>
         
         <div class="tp-supporter__area">
            <div class="container">
               <span class="tp-supporter-sub-title tp-supporter-sub-title-ab mb-25">Live Organic</span>
            </div>
         </div>

         {/* collaborative-area-start */}
         <div class="collaborative-area pt-60 pb-70">
            <div class="container">
               <div class="row">
                  <div class="col-xl-6 col-lg-6">
                     <div class="cp-info-right mb-30">
                        <h4 class="cp-title mb-15">Background</h4>
                        <p>It can be safely said that agriculture is the prime occupation of the people of uttarkahnad hills. 
                           Agriculture is largely rain-fed and traditional farming systems like ‘Barahanaja’ (twelve grains 
                           grown together and harvested at different time) have sustained man and animal in these parts over centuries.
                            Traditional natural resource management and farming systems are highlighted by the use of forest leaf litter
                             for compost marking, exchange of seeds and indigenous traditional knowledge. Due to socio-economic conditions 
                             women play a leading role in the agriculture systems.</p>
                     </div>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                     <div class="cp-info-left">
                        <h4 class="cp-title mb-15">State policy</h4>
                        <p>The prevalent agriculture scenario coupled with the mountain fragility and topography was thought to be best 
                           suited for ecologic friendly agriculture development by the state government. Keeping the available wealth of 
                           the agro-diversity in perspective organic agriculture approach was adopted where these high value crops could be
                            developed to assure livelihood for the rural communities.The state has been forthwith with its commitment to 
                            organic agriculture and over the period ot the last decade, programs and schemes have been supporting the will 
                            of the state to develop the agriculture systems for organics.Supporting agencies to take the movement in an
                             organized way have been set up.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
          {/* collaborative-area-end  */}

          {/* video-area-start  */}
         <div class="video-area-ab">
            <div class="container">
               <div class="chosse-video">
                  <div class="chosse-video-bg position-relative">
                     {/* <img src="assets/img/bg/video-bg-3.jpg" alt=""/> */}
                     {/* <Link to="https://www.youtube.com/watch?v=L4CpMr5BNls" class="play-icon play-icon-ab popup-video"><i class="fas fa-play"></i></Link> */}
                     <ReactPlayer url={video} playing={true} width={"100%"} height={"auto"} controls={false} autoplayStart loop muted></ReactPlayer>
                  </div>
               </div>
            </div>
         </div>
          {/* video-area-end  */}

         {/* award-area-start  */}
         <div class="award-area pt-120 pb-120">
            <div class="container">
               <div class="row align-items-center">
                  <div class="col-xl-5 col-lg-5">
                     <div class="award-image text-center">
                        <img style={{height:"450px",paddingTop:"0px"}} src="assets/img/organicShop2.jpg" alt="" class="img-fluid"/>
                     </div>
                  </div>
                  <div class="col-xl-7 col-lg-7">
                     <div class="tp-section-wrap tp-section-wrap-6">
                        <span class="asub-title grace-span">- Organic Board </span>
                        <h3 class="tp-section-title">Uttarakhand Organic Commodity Board </h3>
                        <p>Uttarakhand organic commodity board (UOCB) functions as the nodal agency for organics in the state. 
                           The board is a resource center for trained manpower in different aspects for organic agriculture. Uocb
                            has trained and experienced personnel’s for the production, quality control, marketing as well rural
                             development. UOCB is presently working as a service provider for different departments for the promotion 
                             of organic agriculture.</p>
                     </div>
                     <div class="awards-lists mt-50">
                        <div class="row">
                           <div class="col-xl-3 col-lg-6 col-md-6">
                              <div class="award-item text-center mb-30">
                                 <i class="flaticon-save"></i>
                                 <h5 class="award-title mt-15">Fresh Organic Vegetables</h5>
                              </div>
                           </div>
                           <div class="col-xl-3 col-lg-6 col-md-6">
                              <div class="award-item text-center mb-30">
                                 <i class="flaticon-digging"></i>
                                 <h5 class="award-title mt-15">Pure  Soil <br/>Making</h5>
                              </div>
                           </div>
                           <div class="col-xl-3 col-lg-6 col-md-6">
                              <div class="award-item text-center mb-30">
                                 <i class="flaticon-wheat-1"></i>
                                 <h5 class="award-title mt-15">Best Organic Crops</h5>
                              </div>
                           </div>
                           <div class="col-xl-3 col-lg-6 col-md-6">
                              <div class="award-item text-center mb-30">
                                 <i class="flaticon-box"></i>
                                 <h5 class="award-title mt-15">Nutrient-Denser Food</h5>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* award-area-end  */}

         <Partners/>
         

      </main>
    </>
)

export default AboutUs;
