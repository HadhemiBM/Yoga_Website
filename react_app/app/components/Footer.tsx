import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer py-5">
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
            <img src="img/insta.png" alt="Instagram" className="social-circle" />
            <img src="img/twi.png" alt="Twitter" className="social-circle" />
            <img src="img/yout.png" alt="YouTube" className="social-circle" />
          </div>
          <div className="col-6 col-md-6 text-end">
            <small className="copyright">
              © Copyright Bedimcode. All rights reserved
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
