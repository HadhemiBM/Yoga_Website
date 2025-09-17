import React from "react";

const Health1: React.FC = () => {
  return (
    <section className="health-section py-5">
      <div className="container">
        <div className="row align-items-center reverse">
          <div className="col-lg-6 position-relative text-center mb-4 mb-lg-0">
            <img
              src="img/ls2.png"
              alt="Health Man"
              className="img-fluid health-img"
            />
          </div>

          <div className="col-lg-6 text-center text-lg-start lscontainer">
            <h2 className="health-title">
              Bring Happiness To
              <br />
              Good Health!
            </h2>
            <p className="health-text">
              If you take care of your good health, take care of your mentality
              and lead a healthy life with positive thoughts every day.
            </p>
            <a href="#" className="btn btn-gradient">
              Let’s Start →
            </a>
          </div>
        </div>
      </div>
    </section>
    // <section className="health-section py-5">
    //   <div className="container">
    //     <div className="row align-items-center">
    //       <div className="col-lg-6 text-center text-lg-start lscontainer">
    //         <h2 className="health-title">Anytime, Any Place, Any Workout</h2>
    //         <p className="health-text">
    //           Take your routine at any time of your day, with the new videos and
    //           with the teachers who will guide you.
    //         </p>
    //         <a href="#" className="btn btn-routine">Get Started Free →</a>
    //       </div>
    //       <div className="col-lg-6 position-relative text-center mb-4 mb-lg-0">
    //         <img
    //           src="img/ls3.png"
    //           alt="Health Man"
    //           className="img-fluid health-img"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Health1;
