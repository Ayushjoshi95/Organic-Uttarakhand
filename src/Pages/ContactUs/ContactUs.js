import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { insertContactusInfo } from '../../Api/contactus';
import { Snackbar } from '@mui/material';

export default function ContactUs(props){

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [number, setNumber] = useState('');
   const [description, setDescription] = useState('');
   const[SnackBarMessage, setSnackBarMessage] = useState("")
    const[isSnackBarShow, setIsSnackBarShow] = useState(false)

   const insertContactusInfoCallback = (response) => {
      if (response.msg === "success") { 
          setSnackBarMessage("Your query is sent to us.")
          setIsSnackBarShow(true)
      }
      else {
          setSnackBarMessage("Something went wrong")
          setIsSnackBarShow(true)
      }
  }

  const insertContactUs =()=>{ 
      insertContactusInfo(name,description,subject,number,email,(response)=>insertContactusInfoCallback(response));
  }

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
                                          <span>Contact</span>
                                       </li>
                                    </ul>
                                 </nav> 
                              </nav>
                            </div>
                            <h3 class="breadcrumb-title breadcrumb-title-sd mt-30">Contact Us</h3>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
        {/* page__title -end  */}

          {/* tp-contact-area-start  */}
         <div class="tp-contact-area pt-115">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-10">
                        <div class="tp-section-wrap">
                           <span><i class="flaticon-grass"></i></span>
                           <h3 class="tp-section-title">If you Have Any Query, Don’t Hesitate Contact with us </h3>
                        </div>
                     </div>
                  </div>
                  <div class="row mt-40">
                     <div class="col-lg-4">
                           <div class="row custom-mar-20">
                              <div class="col-lg-12 col-md-4 col-sm-6">
                                 <div class="tp-contact-info mb-40">
                                       <div class="tp-contact-info-icon">
                                          <i class="fas fa-map-marker-alt"></i>
                                       </div>
                                       <div class="tp-contact-info-text">
                                          <h4 class="tp-contact-info-title mb-15">Address</h4>
                                          <p>Dehradun <br/>Uttarakhand.</p>
                                       </div>
                                 </div>
                              </div>
                              <div class="col-lg-12 col-md-4 col-sm-6">
                                 <div class="tp-contact-info mb-40">
                                    <div class="tp-contact-info-icon">
                                       <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="tp-contact-info-text">
                                       <h4 class="tp-contact-info-title mb-15">Phone</h4>
                                       <p><Link to="tel:333888200">+91 9368877517</Link>
                                       <br/> <Link to="tel:333888200">+91 8349290595</Link></p>
                                    </div>
                              </div>
                              </div>
                              <div class="col-lg-12 col-md-4 col-sm-6">
                                 <div class="tp-contact-info mb-40">
                                    <div class="tp-contact-info-icon">
                                       <i class="fas fa-envelope-open"></i>
                                    </div>
                                    <div class="tp-contact-info-text">
                                       <h4 class="tp-contact-info-title mb-15">Email</h4>
                                       <p><Link to="https://themepure.net/cdn-cgi/l/email-protection#31585f575e714559545c54414443541f525e5c">ayushjoshi947@gmail.com</Link>
                                       <br/> <Link to="https://themepure.net/cdn-cgi/l/email-protection#0a63646c654a7e626f676f7a7f786f24696567">organicuk@gmail.com</Link></p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                     </div>
                     <div class="col-lg-8">
                           <div class="tp-contact-form">
                              <div class="row custom-mar-20">
                                 <div class="col-md-6 custom-pad-20">
                                       <div class="tp-contact-form-field mb-20">
                                          <input type="text" placeholder="Full name" onChange={(e)=>setName(e.target.value)}/>
                                       </div>
                                 </div>
                                 <div class="col-md-6 custom-pad-20">
                                       <div class="tp-contact-form-field mb-20">
                                          <input type="email" placeholder="Email Address"onChange={(e)=>setEmail(e.target.value)}/>
                                       </div>
                                 </div>
                                 <div class="col-md-6 custom-pad-20">
                                       <div class="tp-contact-form-field mb-20">
                                          <input type="text" placeholder="Phone" onChange={(e)=>setNumber(e.target.value)}/>
                                       </div>
                                 </div>
                                 <div class="col-md-6 custom-pad-20">
                                       <div class="tp-contact-form-field mb-20">
                                          <input type="text" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/>
                                       </div>
                                 </div>
                                 <div class="col-md-12 custom-pad-20">
                                       <div class="tp-contact-form-field mb-20">
                                          <textarea placeholder="Your Message" onChange={(e)=>setDescription(e.target.value)}></textarea>
                                       </div>
                                 </div>
                                 <div class="col-md-12 custom-pad-20">
                                       <div class="tp-contact-form-field">
                                          <button onClick={()=>insertContactUs()} class="read-btn sumit-btn"><i class="flaticon-enter"></i> Send Message</button>
                                       </div>
                                 </div>
                              </div>
                           </div>
                     </div>
                  </div>
               </div>
         </div>
          {/* tp-contact-area-end  */}

         {/* < tp-map-area-start  */}
         <div class="tp-map-area pt-115 pb-110">
               <div class="container">
                  <div class="row">
                     <div class="col-12">
                           <div class="tp-contact-map">
                              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976383964465!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1636888514620!5m2!1sen!2sbd" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe> */}
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999.543239507533!2d77.1268825!3d28.696477549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c2cb7a1825%3A0xe0fc842d3ce33843!2sSaraswati%20Vihar%2C%20Pitam%20Pura%2C%20Delhi%2C%20110034!5e0!3m2!1sen!2sin!4v1656703436725!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                           </div>
                     </div>
                  </div>
               </div>
         </div>
         {/* tp-map-area-end  */}

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

