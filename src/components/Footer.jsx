import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {currentYear} <span className="highlight">SHARON</span></p>
        </div>
        
        <div className="footer-center">
          <p>
            MADE WITH <Heart size={16} className="heart-icon" /> BY <span className="highlight">SHARON</span>
          </p>
        </div>

        <div className="footer-right">
          <p>MERN STACK <span className="highlight">DEVELOPER</span></p>
        </div>
      </div>

      <style>{`
        .footer-container {
          background-color: #000000;
          color: #ffffff;
          padding: 3rem 2rem;
          font-family: 'Segoe UI', system-ui, sans-serif;
          border-top: 1px solid #111; /* Subtle divider */
          width: 100%;
          box-sizing: border-box;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-content p {
          margin: 0;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .highlight {
          color: #ffff80; /* YOUR ACCENT YELLOW */
          opacity: 1 !important;
        }

        .heart-icon {
          color: #ff0000; /* YOUR JOURNEY RED */
          display: inline;
          vertical-align: middle;
          margin: 0 4px;
          filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.4));
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          15% { transform: scale(1.2); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-container {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;