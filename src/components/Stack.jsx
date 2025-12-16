
import React, { useState } from 'react';
import { Database, Server, Code, Zap, Globe, GitBranch, LayoutGrid, Box, Cloud, Layers, PackageCheck } from 'lucide-react';

const stackData = [
  { id: 1, name: "HTML5", category: "Frontend", color: "#E34F26", Icon: LayoutGrid, description: "Semantic web structure." },
  { id: 2, name: "CSS3", category: "Frontend", color: "#1572B6", Icon: LayoutGrid, description: "Styling for responsive designs." },
  { id: 3, name: "JavaScript", category: "Frontend", color: "#F7DF1E", Icon: Globe, description: "Core web language." },
  { id: 4, name: "React.js", category: "Frontend", color: "#61DAFB", Icon: Zap, description: "Library for building UI." },
  { id: 5, name: "Hook Form", category: "Frontend", color: "#61DAFB", Icon: Zap, description: "Simplified form handling." },
  { id: 6, name: "Tailwind", category: "Frontend", color: "#06B6D4", Icon: LayoutGrid, description: "Utility-first CSS framework." },
  { id: 7, name: "ShadCn", category: "Frontend", color: "#8B5CF6", Icon: Layers, description: "React UI components." },
  { id: 8, name: "Node.js", category: "Backend", color: "#83CD29", Icon: Code, description: "JS runtime for server-side." },
  { id: 9, name: "Express", category: "Backend", color: "#68A063", Icon: Server, description: "Fast Node.js framework." },
  { id: 10, name: "Spring Boot", category: "Backend", color: "#6DB33F", Icon: Server, description: "Java backend framework." },
  { id: 11, name: "MySQL", category: "Database", color: "#4479A1", Icon: Database, description: "Relational database." },
  { id: 12, name: "MongoDB", category: "Database", color: "#47A248", Icon: Database, description: "NoSQL document database." },
  { id: 13, name: "Mongoose", category: "Database", color: "#880000", Icon: Database, description: "MongoDB ODM." },
  { id: 14, name: "Clerk", category: "Auth", color: "#FF7F50", Icon: Box, description: "Authentication platform." },
  { id: 15, name: "Render", category: "Hosting", color: "#00BFFF", Icon: Cloud, description: "Cloud hosting." },
  { id: 16, name: "Netlify", category: "Hosting", color: "#00C7B7", Icon: Cloud, description: "Frontend hosting." },
  { id: 17, name: "Git", category: "Version Control", color: "#F05032", Icon: GitBranch, description: "Version control system." },
  { id: 18, name: "GitHub", category: "Version Control", color: "#F05032", Icon: GitBranch, description: "Host Git repositories." },
  { id: 19, name: "Redux", category: "State", color: "#764ABC", Icon: Box, description: "State management library." },
  { id: 20, name: "RTK", category: "State", color: "#764ABC", Icon: Box, description: "Redux Toolkit." },
  { id: 21, name: "Recharts", category: "Charts", color: "#FF6347", Icon: PackageCheck, description: "Charting library." },
  { id: 22, name: "Core Java", category: "Languages", color: "#007396", Icon: Code, description: "Java core concepts." },
  { id: 23, name: "Java", category: "Languages", color: "#007396", Icon: Code, description: "Java language." }
];

const categories = ["All", ...new Set(stackData.map(item => item.category))];

const StackKeyboard = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? stackData : stackData.filter(item => item.category === filter);

  return (
    <>
      <style>{`
        .keyboard-section {
          background: #0d0d0d;
          color: #fff;
          padding: 2rem 0.5rem; /* Reduced overall padding */
          text-align: center;
        }

        // .keyboard-heading {
        //   font-size: 2.5rem; /* Reduced heading size */
        //   font-weight: 700;
        //   margin-bottom: 1.5rem;
        //   background: linear-gradient(90deg, #BA0707, #FFFFFF, #BA0707);
        //   -webkit-background-clip: text;
        //   color: transparent;
        // }
        .keyboard-heading {
          font-size: 2.5rem; /* Reduced heading size */
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: white;       /* Changed from gradient to plain white */
          background: none;   /* Remove gradient background */
          -webkit-background-clip: unset; /* Disable background clipping */
        }
        
        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.3rem; /* Tighter filter gap */
          margin-bottom: 1.5rem;
        }

        .filter-button {
          background: #1a1a1a;
          border: 1px solid #555;
          border-radius: 8px; /* Slightly smaller border radius */
          padding: 0.3rem 0.6rem; /* Reduced padding */
          cursor: pointer;
          font-size: 0.8rem; /* Smaller font */
          color: #fff;
          transition: all 0.2s;
        }

        .filter-button.active, .filter-button:hover {
          background: #BA0707;
          color: #fff;
          border-color: #BA0707;
        }

        .keyboard-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.4rem; /* Tighter grid gap */
        }

        .key-button {
          background: #1a1a1a;
          border: 2px solid #555;
          border-radius: 8px; /* Smaller border radius */
          padding: 0.4rem 0.6rem; /* Significantly reduced padding */
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem; /* Smaller button font */
          color: #fff;
          min-width: 70px; /* Aggressive minimum width reduction */
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem; /* Reduced icon gap */
          perspective: 800px;
          transition: all 0.3s ease;
        }
        
        .key-button svg {
           width: 1rem; /* Smaller icon size */
           height: 1rem;
        }

        .key-button:hover, .key-button.active {
          transform: rotateX(10deg) rotateY(5deg) scale(1.05);
          border-color: #BA0707;
          box-shadow: 0 5px 15px rgba(255,255,255,0.1); /* Reduced shadow */
        }

        .key-details {
          margin-top: 1.5rem; /* Reduced margin */
          width: 95%; /* Use more available width */
          max-width: 400px; 
          margin-left: auto;
          margin-right: auto;
          perspective: 1000px;
        }

        .details-card {
          background: #1a1a1a;
          color: #fff;
          padding: 1.2rem; /* Reduced padding */
          border-radius: 12px; /* Reduced border radius */
          text-align: center;
          transform-style: preserve-3d;
          transition: transform 0.6s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(255,255,255,0.05);
        }

        .details-card.active {
          transform: rotateX(15deg) rotateY(15deg); /* Slightly less dramatic 3D */
          box-shadow: 0 8px 25px rgba(255,255,255,0.1);
        }

        .details-icon {
          width: 3rem; /* Reduced icon size */
          height: 3rem;
          margin-bottom: 0.8rem;
        }

        .details-title {
          font-size: 1.4rem; /* Reduced title size */
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .details-desc {
          font-size: 0.85rem; /* Smallest readable font size */
          line-height: 1.4;
          color: #ccc;
        }

        /* Responsive adjustments */
        @media (min-width: 481px) and (max-width: 768px) {
           .key-button {
              min-width: 90px;
              font-size: 0.9rem;
              padding: 0.5rem 0.8rem;
           }
           .key-button svg {
              width: 1.3rem;
              height: 1.3rem;
           }
           .details-card { width: 90%; padding: 1.5rem; }
        }

        @media (min-width: 769px) {
           /* Restore desktop view sizes for better usability */
           .keyboard-heading { font-size: 3rem; }
           .key-button { min-width: 110px; font-size: 1rem; padding: 0.8rem 1.2rem; }
           .key-button svg { width: 1.5rem; height: 1.5rem; }
        }
      `}</style>

      <section id='stack' className="keyboard-section">
        <h2 className="keyboard-heading">Tools & Tech Stack</h2>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-button ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Keyboard Grid */}
        <div className="keyboard-grid">
          {filteredItems.map(item => (
            <button
              key={item.id}
              className={`key-button ${activeKey?.id === item.id ? 'active' : ''}`}
              style={{ '--key-color': item.color }}
              onClick={() => setActiveKey(item)}
            >
              <item.Icon style={{ color: item.color }} />
              {item.name}
            </button>
          ))}
        </div>

        {/* 3D Info Card */}
        {activeKey && (
          <div className="key-details">
            <div className="details-card active">
              <activeKey.Icon className="details-icon" style={{ color: activeKey.color }} />
              <h3 className="details-title">{activeKey.name}</h3>
              <p className="details-desc">{activeKey.description}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default StackKeyboard;