
import React, { useEffect, useRef } from "react";

const textLines = ["I started", "with", "a simple", "'Hello World'"];

function Message() {
  const sectionRef = useRef(null);
  const lettersRef = useRef([]);
  const rafRef = useRef(null);

  lettersRef.current = [];
  let currentIndex = 0;

  useEffect(() => {
    const animate = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollRange = rect.height + viewportHeight;
      const scrolledDistance = viewportHeight - rect.top;

      const progress = Math.min(
        Math.max(scrolledDistance / scrollRange, 0),
        1
      );

      const letters = lettersRef.current.filter(Boolean);
      const total = letters.length;

      letters.forEach((letter, index) => {
        const delay = index / total;
        const revealPoint = progress - delay * 0.6;

        const visible = revealPoint > 0;

        letter.style.opacity = visible ? "1" : "0.15";
        letter.style.transform = visible
          ? "translateY(0)"
          : "translateY(12px)";
        letter.style.color = visible ? "#ffffff" : "#ff0000";
      });
    };

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        animate();
        rafRef.current = null;
      });
    };

    animate();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .message-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
          padding: 0;
        }

        .message-text {
          font-weight: 900;
          text-transform: uppercase;
          text-align: center;
          line-height: 0.95;
          font-size: clamp(2.5rem, 8vw, 8rem);
        }

        .message-text > div {
          white-space: normal;
        }

        .letter {
          display: inline-block;
          transition:
            opacity 0.4s ease,
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            color 0.4s ease;
          will-change: transform, opacity;
        }

        @media (max-width: 480px) {
          .message-section {
            min-height: 90vh;
          }

          .message-text {
            font-size: clamp(2rem, 9vw, 4rem);
            line-height: 1.05;
          }
        }
      `}</style>

      <section ref={sectionRef} className="message-section">
        <div className="message-text">
          {textLines.map((line, lineIndex) => (
            <div key={lineIndex}>
              {line.split("").map((char, charIndex) => {
                const indexToAssign = currentIndex;
                currentIndex++;

                return (
                  <span
                    key={charIndex}
                    ref={(el) =>
                      (lettersRef.current[indexToAssign] = el)
                    }
                    className="letter"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Message;
