import {Link} from 'react-router-dom';

const Partners=()=>(
    <>
        {/* Trade partner  */}
        <div className="tp-supporter__area tp-supporter__area-3 mb-120">
            <div className="container">
               <div className="tp-supporter__area-2-inner bg-white">
                  <div className="row no-gutters align-items-center">
                     <div className="col-xl-4">
                        <div className="tp-section-wrap">
                           <span><i className="flaticon-grass"></i></span>
                           <h3 className="tp-section-title">Trade Partners<br/>of Organic Prducts</h3>
                        </div>
                     </div>
                     <div className="col-xl-8">
                     <img style={{height:"100px",marginRight:"20px"}} src="assets/img/supporters/h2H.jpg" alt="client-1"/>
                     <img style={{height:"100px",marginRight:"20px"}} src="assets/img/supporters/bigBasket.png" alt="client-1"/>
                     <img style={{height:"100px",marginRight:"20px"}} src="assets/img/supporters/earthyWorthy.png" alt="client-1"/>
                     <img style={{height:"100px",marginRight:"20px"}} src="assets/img/supporters/khadiIndia.png" alt="client-1"/>
                     <img style={{height:"100px",marginRight:"20px"}} src="assets/img/supporters/vana.jpg" alt="client-1"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
          {/* Trade partner  */}
    </>
)

export default Partners;