import { Link } from "react-router-dom";

const Header = () => (
  <>
    {/* pre loader area start  */}
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="loading-icon text-center d-sm-flex align-items-center justify-content-center">
            <img
              className="loading-logo mr-10"
              src="assets/img/organicUk.png"
              alt=""
            />
            <img src="assets/img/preloader.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

    {/* // back to top start --> */}
    <div className="progress-wrap">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>

    <header>
      <div id="navbar" className="header__area header-area-white">
        <div
          className="header-white-area theme-bg-secondary-h1"
          id="header-sticky"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm d-flex align-items-center justify-content-end">
                <div className="main-menu-h1 main-menu main-menu-white text-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link to="/"> Home</Link>
                      </li>
                      <li>
                        <Link to={"/aboutus"}>About</Link>
                      </li>
                      <li>
                        <Link to={"/wishlist"}>Wishlist</Link>
                      </li>
                      <li>
                        <Link to={"/cart"}> Cart</Link>
                      </li>
                      <li>
                        <Link to={"/contactus"}>Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="side-menu-icon d-lg-none text-end">
                  <Link
                    to="javascript:void(0)"
                    className="info-toggle-btn f-right sidebar-toggle-btn"
                  >
                    <i className="fal fa-bars"></i>
                  </Link>
                </div>
              </div>
              <div className="col-sm d-flex ml-50 align-items-center">
                <div>
                  <div className="logo">
                    <Link to={"/"}>
                      <img
                        style={{ height: "80px" }}
                        src="assets/img/organicUk2.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-1 col-lg-3 col-md- col-8 ml-20">
                  <div className="logo">
                    <h3>ORGANIC UTTARAKHAND</h3>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md- col-8">
                  <div className="banner-button ml-200">
                    <Link to={"/shop"} className=" tp-btn-h1">
                      Go to Shop
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* sidebar area start  */}
    <div className="sidebar__area">
      <div className="sidebar__wrapper">
        <div className="sidebar__close">
          <button className="sidebar__close-btn" id="sidebar__close-btn">
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="sidebar__content">
          <div className="sidebar__logo mb-40">
            <Link to={"/"}>
              <img src="assets/img/logo/logo-2.png" alt="logo" />
            </Link>
          </div>
          <div className="sidebar__search mb-25">
            <form action="#">
              <input type="text" placeholder="What are you searching for?" />
              <button type="submit">
                <i className="far fa-search"></i>
              </button>
            </form>
          </div>
          <div className="mobile-menu fix"></div>
          <div className="sidebar__text d-none d-lg-block">
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and will give you a complete
              account of the system and expound the actual teachings of the
              great explore
            </p>
          </div>
          <div className="sidebar__img d-none d-lg-block mb-20">
            <div className="row gx-2">
              <div className="col-4">
                <div className="sidebar__single-img w-img mb-10">
                  <Link
                    className="image-popups"
                    to="assets/img/project/project-7.jpg"
                  >
                    <img src="assets/img/project/project-7.jpg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-img w-img mb-10">
                  <Link
                    className="image-popups"
                    to="assets/img/project/project-8.jpg"
                  >
                    <img src="assets/img/project/project-8.jpg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-img w-img mb-10">
                  <Link
                    className="image-popups"
                    to="assets/img/project/project-9.jpg"
                  >
                    <img src="assets/img/project/project-9.jpg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-img w-img mb-10">
                  <Link
                    className="image-popups"
                    to="assets/img/project/project-10.jpg"
                  >
                    <img src="assets/img/project/project-10.jpg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-img w-img mb-10">
                  <Link
                    className="image-popups"
                    to="assets/img/project/project-13.jpg"
                  >
                    <img src="assets/img/project/project-13.jpg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-img w-img mb-10">
                  <Link
                    className="image-popups"
                    to="assets/img/project/project-12.jpg"
                  >
                    <img src="assets/img/project/project-12.jpg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__map d-none d-lg-block mb-15">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"></iframe>
          </div>
          <div className="sidebar__contact mt-30 mb-20">
            <h4>Contact Info</h4>

            <ul>
              <li className="d-flex align-items-center">
                <div className="sidebar__contact-icon mr-15">
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div className="sidebar__contact-text">
                  <Link
                    target="_blank"
                    to="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                  >
                    12/A, Mirnada City Tower, NYC
                  </Link>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="sidebar__contact-icon mr-15">
                  <i className="far fa-phone"></i>
                </div>
                <div className="sidebar__contact-text">
                  <Link to="tel:+012-345-6789">088889797697</Link>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="sidebar__contact-icon mr-15">
                  <i className="fal fa-envelope"></i>
                </div>
                <div className="sidebar__contact-text">
                  <Link to="https://themepure.net/cdn-cgi/l/email-protection#c2b1b7b2b2adb0b682a5afa3abaeeca1adaf">
                    <span
                      className="__cf_email__"
                      data-cfemail="d3a0a6a3a3bca1a793beb2babffdb0bcbe"
                    >
                      [email&#160;protected]
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar__social">
            <ul>
              <li>
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="body-overlay"></div>
    {/* sidebar area end  */}
  </>
);
export default Header;
