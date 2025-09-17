import React from "react";

const Gallery: React.FC = () => {
  return (
   <section className="follow-section py-5">
      <div className="container">
        <div className="row mb-4 align-items-center">
          <div className="col-md-4 text-center">
            <img src="img/follow1.png" alt="Follow" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 text-center">
            <h2 className="follow-title1">Follow Us On Instagram</h2>
            <h2 className="follow-title2">#YOGA</h2>
          </div>
          <div className="col-md-4 text-center">
            <img src="img/follow2.png" alt="Follow" className="img-fluid rounded" />
          </div>
        </div>

        <div className="row mb-4 align-items-center justify-content-center">
          <div className="col-md-4 text-center">
            <img src="img/follow3.png" alt="Follow" className="img-fluid rounded" />
          </div>

          <div className="col-md-4 text-center">
            <img src="img/follow4.png" alt="Follow" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
