import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../integration-bootstrap/styleMobile.css";
import "../../../integration-bootstrap/styleDark.css";
import "../../../integration-bootstrap/style.css";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Hero from "~/components/HeroSection";
import Feature from "~/components/FeatureSection";
import Health1 from "~/components/HealthSection";
import Health2 from "~/components/HealthSection2";
import Gallery from "~/components/GallerySection";
import News from "~/components/News";

const Home: React.FC = () => {
  useEffect(() => {
    const toggle = document.querySelector(".theme-toggle");
    const icon = document.getElementById("theme-icon");

    const setDark = () => document.body.classList.add("dark-mode");
    const setLight = () => document.body.classList.remove("dark-mode");

    if (localStorage.getItem("theme") === "dark") setDark();

    const handleToggle = () => {
      const isDark = document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      if (icon) {
        if (isDark) {
          icon.innerHTML =
            '<circle cx="12" cy="12" r="5"></circle><g stroke="currentColor" stroke-width="2"><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></g>';
        } else {
          icon.innerHTML =
            '<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />';
        }
      }
    };

    toggle?.addEventListener("click", handleToggle);

    const navHome = document.querySelector(".nav-home-dropdown");
    const dropdownMenu = navHome?.querySelector(
      ".custom-dropdown-menu"
    ) as HTMLElement | null;

    const showMenu = () => {
      if (dropdownMenu) dropdownMenu.style.display = "block";
    };
    const hideMenu = () => {
      if (dropdownMenu) dropdownMenu.style.display = "none";
    };

    navHome?.addEventListener("mouseenter", showMenu);
    navHome?.addEventListener("mouseleave", hideMenu);

    return () => {
      toggle?.removeEventListener("click", handleToggle);
      navHome?.removeEventListener("mouseenter", showMenu);
      navHome?.removeEventListener("mouseleave", hideMenu);
    };
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter submitted!");
  };

  return (
    <>
      {/* <Navbar /> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand yoga-logo" href="#">
            Yoga
          </a>

          <button
            className="grid-btn btn btn-link p-0 ms-2 d-lg-none"
            aria-label="Open menu grid"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={false}
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 11.5C5.90905 11.5 5.32389 11.3836 4.77792 
11.1575C4.23196 10.9313 3.73588 10.5998 3.31802 10.182C2.90016
 9.76412 2.56869 9.26804 2.34254 8.72208C2.1164 8.17611 2 7.59095
  2 7C2 6.40905 2.1164 5.82389 2.34254 5.27792C2.56869 4.73196 2.90016
   4.23588 3.31802 3.81802C3.73588 3.40016 4.23196 3.06869 4.77792 2.84254C5.32389 
   2.6164 5.90905 2.5 6.5 2.5C7.69347 2.5 8.83807 2.97411 9.68198 3.81802C10.5259
   4.66193 11 5.80653 11 7C11 8.19347 10.5259 9.33807 9.68198 10.182C8.83807 
   11.0259 7.69347 11.5 6.5 11.5ZM7 21.5C5.80653 21.5 4.66193 21.0259 3.81802 
   20.182C2.97411 19.3381 2.5 18.1935 2.5 17C2.5 15.8065 2.97411 14.6619 3.81802
    13.818C4.66193 12.9741 5.80653 12.5 7 12.5C8.19347 12.5 9.33807 12.9741 10.182
     13.818C11.0259 14.6619 11.5 15.8065 11.5 17C11.5 18.1935 11.0259 19.3381
      10.182 20.182C9.33807 21.0259 8.19347 21.5 7 21.5ZM17 11.5C16.4091 11.5
       15.8239 11.3836 15.2779 11.1575C14.732 10.9313 14.2359 10.5998 13.818 
       10.182C13.4002 9.76412 13.0687 9.26804 12.8425 8.72208C12.6164 8.17611
        12.5 7.59095 12.5 7C12.5 6.40905 12.6164 5.82389 12.8425 5.27792C13.0687 
        4.73196 13.4002 4.23588 13.818 3.81802C14.2359 3.40016 14.732 3.06869 15.2779 2.84254C15.8239 2.6164 16.4091
         2.5 17 2.5C18.1935 2.5 19.3381 2.97411 20.182 3.81802C21.0259 4.66193 21.5 5.80653 21.5 7C21.5 8.19347 21.0259
          9.33807 20.182 10.182C19.3381 11.0259 18.1935 11.5 17 11.5ZM17 21.5C15.8065 21.5 14.6619 21.0259 13.818 20.182C12.9741 19.3381 12.5 18.1935 12.5 17C12.5 15.8065 12.9741 14.6619 13.818 13.818C14.6619 12.9741 15.8065 12.5 17 12.5C18.1935 12.5 19.3381 12.9741 20.182 13.818C21.0259 14.6619 21.5 15.8065 21.5 17C21.5 18.1935 21.0259 19.3381 20.182 20.182C19.3381 21.0259 18.1935 21.5 17 21.5ZM6.5 9.5C7.16304 9.5 7.79893 9.23661 8.26777 8.76777C8.73661 8.29893 9 7.66304 9 7C9 6.33696 8.73661 5.70107 8.26777 5.23223C7.79893 4.76339 7.16304 4.5 6.5 4.5C5.83696 4.5 5.20107 4.76339 4.73223 5.23223C4.26339 5.70107 4 6.33696 4 7C4 7.66304 4.26339 8.29893 4.73223 8.76777C5.20107 9.23661 5.83696 9.5 6.5 9.5ZM7 19.5C7.66304 19.5 8.29893 19.2366 8.76777 18.7678C9.23661 18.2989 9.5 17.663 9.5 17C9.5 16.337 9.23661 15.7011 8.76777 15.2322C8.29893 14.7634 7.66304 14.5 7 14.5C6.33696 14.5 5.70107 14.7634 5.23223 15.2322C4.76339 15.7011 4.5 16.337 4.5 17C4.5 17.663 4.76339 18.2989 5.23223 18.7678C5.70107 19.2366 6.33696 19.5 7 19.5ZM17 9.5C17.663 9.5 18.2989 9.23661 18.7678 8.76777C19.2366 8.29893 19.5 7.66304 19.5 7C19.5 6.33696 19.2366 5.70107 18.7678 5.23223C18.2989 4.76339 17.663 4.5 17 4.5C16.337 4.5 15.7011 4.76339 15.2322 5.23223C14.7634 5.70107 14.5 6.33696 14.5 7C14.5 7.66304 14.7634 8.29893 15.2322 8.76777C15.7011 9.23661 16.337 9.5 17 9.5ZM17 19.5C17.663 19.5 18.2989 19.2366 18.7678 18.7678C19.2366 18.2989 19.5 17.663 19.5 17C19.5 16.337 19.2366 15.7011 18.7678 15.2322C18.2989 14.7634 17.663 14.5 17 14.5C16.337 14.5 15.7011 14.7634 15.2322 15.2322C14.7634 15.7011 14.5 16.337 14.5 17C14.5 17.663 14.7634 18.2989 15.2322 18.7678C15.7011 19.2366 16.337 19.5 17 19.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item position-relative nav-home-dropdown">
                <a className="nav-link active" href="#" id="homeDropdown">
                  Home
                </a>
                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="homeDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                  <a className="dropdown-item" href="#">
                    Option 4
                  </a>
                  <a className="dropdown-item" href="#">
                    Option 5
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            className="theme-toggle btn btn-link p-0 ms-3"
            aria-label="Toggle theme"
          >
            <span className="navbar-icon">
              <svg
                id="theme-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
              </svg>
            </span>
          </button>
        </div>
      </nav>
      <Hero />
      <Feature />
      <Health1 />
      <Health2 />
      <Gallery />
      <News />
 
      {/* Footer */}
      {/* <footer className="site-footer py-5">
        <div className="containerfooter">
          <div className="row g-4 py-2">
            <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column justify-content-center">
              <h4 className="footer-logo">Yoga</h4>
              <p className="footer-desc">
                Take care of your health and your mind with the best Yoga
                classes.
              </p>
            </div>
            <div className="col-12 col-md-8 d-flex flex-row justify-content-between footercall">
              <div className="footer-group col-12 col-md-4 d-flex flex-column text-md-start mb-4 mb-md-0">
                <h5 className="footer-heading">Address</h5>
                <p className="footer-item">
                  12345 M/01 Sol
                  <br />
                  Avenue, Lima, Peru
                </p>
              </div>
              <div className="footer-group col-12 col-md-4 d-flex flex-column align-items-md-start mb-4 mb-md-0">
                <h5 className="footer-heading">Contact</h5>
                <p className="footer-item">
                  +123 456 7890
                  <br />
                  yoga@email.com
                </p>
              </div>
              <div className="footer-group col-12 col-md-4 d-flex flex-column align-items-md-start">
                <h5 className="footer-heading">Office</h5>
                <p className="footer-item">
                  Monday - Saturday
                  <br />
                  9AM - 10PM
                </p>
              </div>
            </div>
          </div>

          <hr className="footer-sep" />

          <div className="row align-items-center">
            <div className="col-6 col-md-6 d-flex gap-5 footer-social">
              <img
                src="img/facebook.png"
                alt="Facebook"
                className="social-circle"
              />
              <img
                src="img/insta.png"
                alt="Instagram"
                className="social-circle"
              />
              <img src="img/twi.png" alt="Facebook" className="social-circle" />
              <img
                src="img/yout.png"
                alt="Instagram"
                className="social-circle"
              />
            </div>
            <div className="col-6 col-md-6 text-end">
              <small className="copyright">
                © Copyright Bedimcode. All rights reserved
              </small>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer />
    </>
  );
};

export default Home;
