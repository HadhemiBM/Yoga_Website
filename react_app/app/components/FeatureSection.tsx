import React from "react";

const Feature: React.FC = () => {
  return (
    <section className="feature-section py-5">
      <div className="containerFeature">
        <div className="row align-items-center gy-4 justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <div className="feature-left d-flex flex-row align-items-center justify-content-center gap-3">
              <div className="feature-index">#01</div>
              <div className="feature-pill">
                <img
                  src="img/List1.png"
                  alt="feature"
                  className="img-fluid feature-img"
                />
              </div>
            </div>
          </div>

          <div className="hh col-12 col-lg-6">
            <div className="feature-copy d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3">
              <p className="feature-text mb-0">
                Get a list of specific influencers in your niche at your
                fingertips so you can focus on managing your status.
              </p>
              <div className="mt-2 d-flex justify-content-center">
                <a
                  href="#"
                  className="next-oval d-inline-flex align-items-center justify-content-center"
                >
                  Next <span className="ms-2 m-4">➜</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
