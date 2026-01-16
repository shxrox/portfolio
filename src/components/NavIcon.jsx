


import React, { useState } from "react";
import { Link } from "react-router-dom";

const AnimatedMenuIcon = ({ isOpen, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-500"
    onClick={onClick}
    style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
  >
    <line
      x1="5"
      x2="19"
      y1="9"
      y2="9"
      style={{
        transform: isOpen ? "translateY(3px) rotate(45deg)" : "none",
        transformOrigin: "center",
        transition: "0.5s",
      }}
    />
    <line
      x1="5"
      x2="19"
      y1="15"
      y2="15"
      style={{
        transform: isOpen ? "translateY(-3px) rotate(-45deg)" : "none",
        transformOrigin: "center",
        transition: "0.5s",
      }}
    />
  </svg>
);

const NavIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToAbout = () => {
    setIsOpen(false);
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToStack = () => {
    setIsOpen(false);
    const section = document.getElementById("stack");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToPics = () => {
    setIsOpen(false);
    const section = document.getElementById("pics");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    setIsOpen(false);
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    setIsOpen(false);
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

    const handleScrollToCertificate = () => {
    setIsOpen(false);
    const section = document.getElementById("certificate");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* MENU BUTTON */}
      <button
        className="p-4 rounded-full bg-red-500 hover:bg-white transition-colors duration-300 shadow-lg fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Navigation Menu"
      >
        <AnimatedMenuIcon isOpen={isOpen} />
      </button>

      {/* OVERLAY MENU */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-40"
          onClick={() => setIsOpen(false)}
        >
          <ul
            className="text-white text-2xl md:text-4xl space-y-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ABOUT → SCROLL */}
            <li
              className="cursor-pointer hover:text-red-500 transition-all"
              onClick={handleScrollToAbout}
            >
              About Me
            </li>

            <li
              className="cursor-pointer hover:text-red-500 transition-all"
              onClick={handleScrollToStack}
            >
              Technologies
            </li>

            <li
              className="cursor-pointer hover:text-red-500 transition-all"
              onClick={handleScrollToProjects}
            >
              Own Projects
            </li>

            <li
              className="cursor-pointer hover:text-red-500 transition-all"
              onClick={handleScrollToPics}
            >
              Photography
            </li>


            <li
              className="cursor-pointer hover:text-red-500 transition-all"
              onClick={handleScrollToContact}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavIcon;
