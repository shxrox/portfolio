

import React, { useState, useEffect, useRef, useCallback } from "react";
import TiltedCard from "./TiltedCard"; // Make sure this path is correct
import aboutImage from "../assets/about-wm.jpeg";
// --- UPDATED INTERACTIVE SCRAMBLE TEXT COMPONENT ---
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const animationRef = useRef(null);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+=[]{}<>,.";

  // Use useCallback to ensure animate is only recreated when its dependencies change
  const animate = useCallback((originalText) => {
    let frame = 0;
    const totalFrames = 30; // Control the duration of the scramble
    const scrambleSpeed = 4; // Scramble every 4 frames

    const runAnimation = () => {
      let newText = "";
      let completedCount = Math.floor((frame / totalFrames) * originalText.length);

      for (let i = 0; i < originalText.length; i++) {
        if (i < completedCount) {
          // If this character is "completed", use the original letter
          newText += originalText[i];
        } else if (frame % scrambleSpeed === 0) {
          // Scramble it every few frames
          const randomIndex = Math.floor(Math.random() * characters.length);
          newText += characters[randomIndex];
        } else {
          // Otherwise, keep the previous scrambled character for continuity
          // Fallback to the original character if displayText hasn't fully loaded yet
          newText += displayText[i] || originalText[i];
        }
      }

      setDisplayText(newText);

      if (frame < totalFrames) {
        frame++;
        animationRef.current = requestAnimationFrame(runAnimation);
      } else {
        // Ensure the final text is exactly the original text
        setDisplayText(originalText);
        setIsScrambling(false); // Reset scrambling state
      }
    };

    animationRef.current = requestAnimationFrame(runAnimation);
  }, [characters, displayText]); // Dependency on displayText is mainly for the fallback 

  // Reset to original text and clear animation on mouse leave if it's currently scrambling
  const handleMouseLeave = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setDisplayText(text); // Reset immediately on leave
    setIsScrambling(false);
  };

  // Start the scramble animation on mouse enter
  const handleMouseEnter = () => {
    if (!isScrambling) {
      setIsScrambling(true);
      animate(text);
    }
  };

  // Set the initial state to the original text
  useEffect(() => {
    setDisplayText(text);
  }, [text]);


  return (
    <p
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Add a visual cue to show it's interactive
      style={{ cursor: 'pointer', transition: 'color 0.3s ease-out' }}
    >
      {displayText}
    </p>
  );
};
// ------------------------------------

function About() {
  const lastParagraph = "Now I’m in my final year. My stack is MERN, and I have a solid foundation. I believe that soon I will land my dream job, and I can’t wait to see where this journey takes me next.";

  return (
    <>
      <style>{`
        /* About Section Base */
        .about-section {
          background-color: #ff0000; /* Red background */
          color: white;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 2rem;
        }

        .about-content {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .about-image {
          flex: 1 1 350px;
          max-width: 400px;
          display: flex;
          justify-content: center;
        }

        .about-text {
          flex: 2 1 350px;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Heading Style */
        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
            text-align: center;
            letter-spacing: 2px;
        }

        /* Highlight the scrambled text section */
        /* Changed selector to target the ScrambleText component's p tag */
        .about-text p:last-of-type {
            font-weight: bold;
            color: #ffff80; /* Bright yellow for emphasis */
            margin-top: 1.5rem;
            /* Added text shadow on hover to make it feel more interactive */
            transition: text-shadow 0.3s ease-out, color 0.3s ease-out;
        }

        .about-text p:last-of-type:hover {
            text-shadow: 0 0 10px rgba(255, 255, 128, 0.8);
        }


        /* Mobile: stacked layout */
        @media (max-width: 640px) {
          .about-section {
            padding: 1.5rem;
          }

          .about-image, .about-text {
            flex: 1 1 90%;
            max-width: 90%;
          }

          .about-text {
            font-size: 0.9rem;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1024px) {
          .about-section {
            padding: 2rem 3rem;
          }

          .about-image {
            flex: 1 1 45%;
          }

          .about-text {
            flex: 1 1 50%;
            font-size: 1rem;
          }
        }

        /* Desktop */
        @media (min-width: 1025px) {
          .about-section {
            padding: 4rem 6rem;
          }

          .about-image {
            flex: 1 1 400px;
          }

          .about-text {
            flex: 2 1 400px;
            font-size: 1.15rem;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-content">

          <div className="about-image" style={{ maxWidth: '400px', width: '100%' }}>
            <TiltedCard
              // imageSrc="../images/about-wm.jpeg"
              imageSrc={aboutImage}
              altText="Sharon"
              captionText="Sharon"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>

          <div className="about-text">
            <h2>My Journey</h2> {/* Simple heading for structure */}
            <p>
              I never thought I would end up loving technology this much. Back then, I was
              all about football, mobile games, and music. Coding wasn’t even on my radar.
            </p>

            <p>
              Everything changed during the lockdown. I didn’t have a laptop, only my
              mobile phone, and a lot of free time. I started watching tech videos, not
              knowing they would spark something big in me. Those videos pulled me in.
              I didn’t understand everything at first, but I was curious and wanted to try.
            </p>

            <p>
              That’s when I discovered HTML and CSS. I remember building my very first
              basic web page. It wasn’t fancy; it actually took me three whole weeks to
              make it look right. But when I saw it come together, I felt something I
              hadn’t felt before: pride. That little page told me, “You can do this.”
            </p>

            <p>
              Of course, the journey hasn’t been easy. I’ve had moments when I wanted to
              give up, especially after internship interviews didn’t go my way. Rejections
              are tough. But I’ve been lucky to have people around me who remind me why I
              started. Every time I learn a new technology, that “wow” feeling comes back
              stronger.
            </p>


            <p style={{ fontWeight: 'bold', color: '#ffff80', marginTop: '1.5rem' }}>
              Now I’m in my final year. My stack is MERN, and I have a solid foundation. I believe that soon I will land my dream job, and I can’t wait to see where this journey takes me next.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;