// Error.jsx
import React from "react";
import { Link } from "react-router-dom"; // If using React Router

const Error = () => {
  return (
    <>
      <style>{`
        .error-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #0d0d0d;
          color: #fff;
          text-align: center;
          padding: 2rem;
        }

        .error-code {
          font-size: 6rem;
          font-weight: bold;
          background: linear-gradient(90deg, #BA0707, #FFFFFF, #BA0707);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .error-message {
          font-size: 1.5rem;
          color: #ccc;
          margin-bottom: 2rem;
        }

        .home-button {
          background: #BA0707;
          color: #fff;
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .home-button:hover {
          background: #ff1a1a;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .error-code {
            font-size: 4rem;
          }
          .error-message {
            font-size: 1.2rem;
          }
          .home-button {
            padding: 0.7rem 1.5rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .error-code {
            font-size: 3rem;
          }
          .error-message {
            font-size: 1rem;
          }
          .home-button {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="error-page">
        <div className="error-code">404</div>
        <div className="error-message">
          Oops! The page you are looking for doesn't exist.
        </div>
        <Link to="/" className="home-button">
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default Error;
