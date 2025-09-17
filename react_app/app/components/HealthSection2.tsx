import React from "react";

const Health2: React.FC = () => {
  return (
    <section className="health-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start lscontainer">
            <h2 className="health-title">Anytime, Any Place, Any Workout</h2>
            <p className="health-text">
              Take your routine at any time of your day, with the new videos and
              with the teachers who will guide you.
            </p>
            <a href="#" className="btn btn-routine">
              Get Started Free →
            </a>
          </div>
          <div className="col-lg-6 position-relative text-center mb-4 mb-lg-0">
            <img
              src="img/ls3.png"
              alt="Health Man"
              className="img-fluid health-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Health2;
