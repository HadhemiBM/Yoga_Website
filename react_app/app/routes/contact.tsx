import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "~/components/Navbar";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

const ContactPage: React.FC = () => {
  return (
    <>
      <main className="py-5">
        <Contact />
      </main>
    </>
  );
};

export default ContactPage;
