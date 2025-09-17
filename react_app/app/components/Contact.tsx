import React, { useState } from "react";
import "../styles/contact.css";

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your name.");
      setStatus("error");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (!message.trim()) {
      setError("Please enter a message.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Simulate async submission
    await new Promise((res) => setTimeout(res, 800));

    // Simulate result
    const ok = Math.random() > 0.1;
    if (ok) {
      console.log("Contact submitted:", { name, email, message });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setError("Submission failed. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="contact-card mx-auto">
          <h3 className="contact-title">Contactez-nous</h3>
          <p className="contact-lead">
            Envoyez-nous un message et nous vous répondrons rapidement.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="contact-name" className="form-label">
                Nom
              </label>
              <input
                id="contact-name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact-email" className="form-label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                className="form-control"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </button>
              {status === "success" && (
                <div className="alert alert-success mb-0">
                  Message envoyé avec succès.
                </div>
              )}
              {status === "error" && error && (
                <div className="alert alert-danger mb-0">{error}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
