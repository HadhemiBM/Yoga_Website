import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="containerHero">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-left">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span className="line">Choose Your</span>
                <span className="line">
                  Best <span className="badge-yoga">Yoga</span>
                </span>
                <span className="line">Teacher</span>
              </h1>
              <p className="hero-lead">
                Calm your mind and body with the best yoga teachers available,
                relax your day and stay positive.
              </p>

              <div className="d-flex align-items-center gap-3 mt-4">
                <a href="#" className="btn btn-cta">
                  Get Started Free <span className="ms-2">➜</span>
                </a>
              </div>

              <div className="stats-row d-flex gap-5 mt-5">
                <div className="stat text-center">
                  <div className="stat-number">300+</div>
                  <div className="stat-label">Yoga className</div>
                </div>
                <div className="stat text-center">
                  <div className="stat-number">40+</div>
                  <div className="stat-label">Participants</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual position-relative d-flex justify-content-center">
              <div className="petal"></div>
              <img
                src="img/HeadRight.png"
                alt="yoga"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
