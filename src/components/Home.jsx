
// import React from "react";
// import { Github, Linkedin } from "lucide-react";

// import NavIcon from "./NavIcon";
// import Message from "./Message";
// import About from "./About";
// import StackKeyboard from "./Stack";
// import StackLoop from "./StackLoop";
// import Gallery from "./Gallery";
// import Content from "./Content";
// import ContactCard from "./ContactCard";
// import Footer from "./Footer";

// function Home() {
//   return (
//     <>
//       <style>{`
//         /* ================= HERO BACKGROUND ================= */
//         .wave-bg {
//           background: linear-gradient(135deg, #BA0707, #020202);
//           background-size: 300% 300%;
//           animation: wave 6s ease-in-out infinite;
//           display: flex;
//           height: 100vh;
//           width: 100%;
//           color: white;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//         }

//         @keyframes wave {
//           0% { background-position: 0% 50%; }
//           25% { background-position: 50% 60%; }
//           50% { background-position: 100% 50%; }
//           75% { background-position: 50% 40%; }
//           100% { background-position: 0% 50%; }
//         }

//         /* ================= TEXT ================= */
//         .text-container {
//           flex: 1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           flex-direction: column;
//         }

//         .main-text {
//           font-size: 4rem;
//           font-weight: 800;
//           margin-bottom: 1rem;
//         }

//         @media (min-width: 640px) {
//           .main-text { font-size: 5rem; }
//         }

//         @media (min-width: 768px) {
//           .wave-bg {
//             flex-direction: row;
//             padding: 3rem;
//           }

//           .main-text {
//             font-size: 7rem;
//             text-align: left;
//           }

//           .text-container {
//             align-items: flex-start;
//           }
//         }

//         @media (min-width: 1024px) {
//           .main-text { font-size: 8rem; }
//         }

//         /* ================= SHINE NAME ================= */
//         .shine {
//           background: linear-gradient(90deg, #ffffff, #ff0000, #ffffff);
//           background-size: 200% 100%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: shine 2s linear infinite;
//           -webkit-text-stroke: 2px white;
//         }

//         @keyframes shine {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 200% 50%; }
//         }

//         /* ================= SOCIAL ICONS ================= */
//         .social-icons {
//           display: flex;
//           gap: 1.5rem;
//           margin-top: 1.5rem;
//         }

//         .social-icons a {
//           color: white;
//           transition: 0.3s ease;
//         }

//         .social-icons a:hover {
//           color: #ff0000;
//           transform: translateY(-4px) scale(1.1);
//         }

//         /* ================= IMAGE ================= */
//         .image-container {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         /* MOBILE IMAGE (ROUND) */
//         .image-container img {
//           width: 220px;
//           height: 220px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         /* TABLET + DESKTOP BASE */
//         @media (min-width: 768px) {
//           .image-container img {
//             width: 420px;
//             height: auto;
//             border-radius: 0;
//             object-fit: contain;
//             background: none;
//           }
//         }

//         /* ================= BIGGER IMAGE ON LARGE SCREENS ================= */
//         @media (min-width: 1024px) {
//           .image-container img {
//             width: 620px;
//           }
//         }

//         @media (min-width: 1280px) {
//           .image-container img {
//             width: 700px;
//           }
//         }

//         @media (min-width: 1536px) {
//           .image-container img {
//             width: 780px;
//           }
//         }

//         /* ================= NAV ================= */
//         .navbar-fixed {
//           position: fixed;
//           top: 1rem;
//           left: 1rem;
//           z-index: 50;
//         }
//       `}</style>

//       {/* NAV */}
//       <div className="navbar-fixed">
//         <NavIcon />
//       </div>

//       {/* HERO */}
//       <div className="wave-bg">
//         <div className="text-container">
//           <h1 className="main-text">
//             Hi, I am <span className="shine">Sharon</span>
//           </h1>

//           {/* SOCIAL ICONS */}
//           <div className="social-icons">
//             <a
//               href="https://github.com/shxrox"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Github size={34} />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/sharon-devasudan-1038b72a3"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Linkedin size={34} />
//             </a>
//           </div>
//         </div>

//         {/* IMAGE */}
//         <div className="image-container">
//           <img src="./images/profile-bg-wm.png" alt="Sharon" />
//         </div>
//       </div>

//       {/* OTHER SECTIONS */}
//       <Message />
//       <About />
//       <StackKeyboard />
//       <StackLoop />
//       <Content />
//       <Gallery />
//       <ContactCard />
//       <Footer />
//     </>
//   );
// }

// export default Home;
import React from "react";
import { Github, Linkedin, ArrowDown } from "lucide-react";

import NavIcon from "./NavIcon";
import Message from "./Message";
import About from "./About";
import StackKeyboard from "./Stack";
import StackLoop from "./StackLoop";
import Gallery from "./Gallery";
import Content from "./Content";
import ContactCard from "./ContactCard";
import Footer from "./Footer";

function Home() {
  // 1. Function moved INSIDE the component
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        /* ================= HERO BACKGROUND ================= */
        .wave-bg {
          background: linear-gradient(135deg, #BA0707, #020202);
          background-size: 300% 300%;
          animation: wave 6s ease-in-out infinite;
          display: flex;
          height: 100vh;
          width: 100%;
          color: white;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        @keyframes wave {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 60%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 40%; }
          100% { background-position: 0% 50%; }
        }

        /* ================= TEXT ================= */
        .text-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;
        }

        .main-text {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        @media (min-width: 640px) {
          .main-text { font-size: 5rem; }
        }

        @media (min-width: 768px) {
          .wave-bg {
            flex-direction: row;
            padding: 3rem;
          }

          .main-text {
            font-size: 7rem;
            text-align: left;
          }

          .text-container {
            align-items: flex-start;
          }
        }

        @media (min-width: 1024px) {
          .main-text { font-size: 8rem; }
        }

        /* ================= SHINE NAME ================= */
        .shine {
          background: linear-gradient(90deg, #ffffff, #ff0000, #ffffff);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2s linear infinite;
          -webkit-text-stroke: 2px white;
        }

        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* ================= SOCIAL ICONS ================= */
        .social-icons {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
          align-items: center;
        }

        .social-icons a.icon-link {
          color: white;
          transition: 0.3s ease;
          display: flex;
        }

        .social-icons a.icon-link:hover {
          color: #ff0000;
          transform: translateY(-4px) scale(1.1);
        }

        /* ================= CONTACT BUTTON STYLE ================= */
        /* Updated to support <button> tag */
        .contact-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.5rem;
          border: 2px solid white;
          border-radius: 50px;
          color: white;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          background: rgba(0,0,0,0.2); 
          cursor: pointer; /* Ensure pointer cursor shows */
          font-family: inherit; /* Inherit font from parent */
        }

        .contact-btn:hover {
          background: #ff0000;
          border-color: #ff0000;
          transform: translateY(-4px);
          box-shadow: 0 5px 15px rgba(255, 0, 0, 0.4);
        }

        /* ================= IMAGE ================= */
        .image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
        }

        @media (min-width: 768px) {
          .image-container img {
            width: 420px;
            height: auto;
            border-radius: 0;
            object-fit: contain;
            background: none;
          }
        }

        @media (min-width: 1024px) {
          .image-container img {
            width: 620px;
          }
        }

        @media (min-width: 1280px) {
          .image-container img {
            width: 700px;
          }
        }

        @media (min-width: 1536px) {
          .image-container img {
            width: 780px;
          }
        }

        /* ================= NAV ================= */
        .navbar-fixed {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 50;
        }
      `}</style>

      <div className="navbar-fixed">
        <NavIcon />
      </div>

      <div className="wave-bg">
        <div className="text-container">
          <h1 className="main-text">
            Hi, I am <span className="shine">Sharon</span>
          </h1>

          <div className="social-icons">
            <a
              href="https://github.com/shxrox"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Github size={34} />
            </a>

            <a
              href="https://www.linkedin.com/in/sharon-devasudan-1038b72a3"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Linkedin size={34} />
            </a>

            {/* --- FIXED CONTACT BUTTON --- */}
            <button 
              className="contact-btn" 
              onClick={handleScrollToContact}
            >
              <span>CONTACT ME</span>
              <ArrowDown size={20} />
            </button>
          </div>
        </div>

        <div className="image-container">
          <img src="./images/profile-bg-wm.png" alt="Sharon" />
        </div>
      </div>

      <Message />
      <About />
      <StackKeyboard />
      <StackLoop />
      <Content />
      <Gallery />

      {/* --- ADDED ID HERE SO SCROLL KNOWS WHERE TO GO --- */}
      <div id="contact">
        <ContactCard />
      </div>

      <Footer />
    </>
  );
}

export default Home;