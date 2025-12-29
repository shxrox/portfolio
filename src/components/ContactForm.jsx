

import React, { useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!", { className: "custom-toast" });
      return;
    }

    // 2. Configuration: REPLACE THIS WITH YOUR EMAIL
    const myEmail = "your-email@example.com"; 

    // 3. Construct the email details
    const subject = `Contact form submission from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // 4. Create mailto link
    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // 5. Open the email client
    window.location.href = mailtoLink;

    toast.success("Opening your email client...", {
      className: "custom-toast",
    });
    
    // Optional: Clear form after opening
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-massive-wrapper">
      <div className="contact-header">
        <h2>
          LET'S WORK <span className="highlight">TOGETHER</span>
        </h2>
        <p>Currently accepting new projects and opportunities.</p>
      </div>

      <form onSubmit={handleSubmit} id="contact" className="contact-form-massive">
        <div className="input-row">
          <input
            type="text"
            name="name"
            placeholder="YOUR FULL NAME"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL ADDRESS"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="HOW CAN I HELP YOU?"
          value={formData.message}
          onChange={handleChange}
          rows="8"
        />

        <button type="submit" className="send-btn-massive">
          SEND MESSAGE
        </button>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        transition={Slide}
        toastClassName="custom-toast"
      />

      <style>{`
        .contact-massive-wrapper {
          width: 100%;
          max-width: 1000px;
          padding: 2rem;
          margin: 0 auto;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        /* HEADER */
        .contact-header {
          margin-bottom: 4rem;
        }

        .contact-header h2 {
          font-size: clamp(3rem, 10vw, 5.5rem);
          color: #ffffff;
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -3px;
          margin: 0;
        }

        .highlight {
          color: #ffff80;
        }

        .contact-header p {
          color: #ffffff;
          font-size: 1.35rem;
          margin-top: 1.2rem;
          opacity: 0.85;
        }

        /* FORM */
        .contact-form-massive {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .contact-form-massive input,
        .contact-form-massive textarea {
          padding: 1.8rem;
          background-color: #111;
          border: 1px solid #222;
          color: #ffffff;
          font-size: 1.1rem;
          outline: none;
          width: 100%;
          box-sizing: border-box;
          border-radius: 10px;
          transition: 0.3s ease;
        }

        .contact-form-massive input::placeholder,
        .contact-form-massive textarea::placeholder {
          color: #ffffff;
          opacity: 0.5;
          font-weight: 700;
        }

        .contact-form-massive input:-webkit-autofill {
          -webkit-text-fill-color: #fff;
          -webkit-box-shadow: 0 0 0px 1000px #111 inset;
        }

        /* BUTTON */
        .send-btn-massive {
          background-color: #ffffff;
          color: #000000;
          font-weight: 900;
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
          letter-spacing: 2px;
          cursor: pointer;
          border: none;
          border-radius: 12px;
          transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          text-transform: uppercase;
          width: fit-content;
          align-self: flex-start;
        }

        .send-btn-massive:hover {
          background-color: #e22c2c;
          transform: translateY(-5px);
          color: white;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }

        /* TOAST */
        .custom-toast {
          background: #000 !important;
          color: #ffff80 !important;
          border: 1px solid #ffff80 !important;
          border-radius: 12px !important;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .input-row {
            grid-template-columns: 1fr;
          }
          .send-btn-massive {
            width: 100%;
            align-self: center;
          }
          .contact-header h2 {
            font-size: 3.5rem;
            text-align: center;
          }
          .contact-header p {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;