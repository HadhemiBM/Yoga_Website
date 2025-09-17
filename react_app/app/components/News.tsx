import React from "react";
import "../styles/newsletter.css";

const News: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter submitted!");
  };

  return (
    <section className="newsletter-section py-5">
      <div className="container">
        <div className="newsletter-card mx-auto">
          <h3 className="newsletter-title">Join our newsletter</h3>
          <p className="newsletter-lead">
            Subscribe to our newsletter to be aware of many things on discounts,
            gifts, training and much more. Just enter your email.
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <div className="newsletter-input-wrap">
              <input
                id="newsletter-email"
                type="email"
                className="newsletter-input"
                placeholder="For latest update send mail"
              />
              <button className="btn btn-subscribe" type="submit">
                Subscribe <span className="ms-2">➜</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default News;
