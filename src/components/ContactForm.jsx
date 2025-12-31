import React, { useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const MY_EMAIL = "sharondeva8@gmail.com";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!", { className: "custom-toast" });
      return;
    }

    const subject = `Contact form submission from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const mailtoLink = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast.success("Opening your email client...", {
      className: "custom-toast",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  /* ================= COPY EMAIL TO CLIPBOARD ================= */
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(MY_EMAIL);
      toast.success("Email address copied 📧", {
        className: "custom-toast",
      });
    } catch {
      toast.error("Failed to copy email 😕", {
        className: "custom-toast",
      });
    }
  };

  return (
    <div className="contact-massive-wrapper">
      <div className="contact-header">
        <h2>
          LET'S WORK <span className="highlight">TOGETHER</span>
        </h2>
        <p>Currently accepting new projects and opportunities.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form-massive">
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

        <div className="form-actions">
          <button type="submit" className="send-btn-massive">
            SEND MESSAGE
          </button>

          <button
            type="button"
            className="copy-btn"
            onClick={handleCopyEmail}
          >
            COPY MY EMAIL
          </button>
        </div>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
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

        input,
        textarea {
          padding: 1.8rem;
          background-color: #111;
          border: 1px solid #222;
          color: #ffffff;
          font-size: 1.1rem;
          border-radius: 10px;
        }

        input::placeholder,
        textarea::placeholder {
          color: #ffffff;
          opacity: 0.5;
          font-weight: 700;
        }

        .form-actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .send-btn-massive {
          background-color: #ffffff;
          color: #000;
          font-weight: 900;
          padding: 1.2rem 2.5rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          letter-spacing: 2px;
          transition: 0.3s ease;
        }

        .send-btn-massive:hover {
          background-color: #e22c2c;
          color: #fff;
          transform: translateY(-4px);
        }

        .copy-btn {
          background: transparent;
          color: #ffff80;
          border: 2px dashed #ffff80;
          padding: 1.2rem 2.5rem;
          border-radius: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .copy-btn:hover {
          background: #ffff80;
          color: #000;
          transform: translateY(-4px);
        }

        .custom-toast {
          background: #000 !important;
          color: #ffff80 !important;
          border: 1px solid #ffff80 !important;
          border-radius: 12px !important;
        }

        @media (max-width: 768px) {
          .input-row {
            grid-template-columns: 1fr;
          }
          .form-actions {
            flex-direction: column;
          }
          .send-btn-massive,
          .copy-btn {
            width: 100%;
          }
          .contact-header h2,
          .contact-header p {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
