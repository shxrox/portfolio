import React from "react";
import ContactForm from "./ContactForm";

const ContactCard = () => {
  return (
    <>
      <section className="contact-card-section">
        <ContactForm />
      </section>

      <style>{`
        /* FULL SECTION BACKGROUND — MATCHES YOUR ABOUT PAGE RED */
        .contact-card-section {
          background-color: #ff0000;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* Responsive spacing for smaller screens */
        @media (max-width: 640px) {
          .contact-card-section {
            padding: 1rem;
            align-items: flex-start; /* Start higher up on mobile */
            padding-top: 4rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactCard;