
import React from 'react';
import { 
  Database, Server, Code, Zap, Globe, GitBranch, LayoutGrid, Box, Cloud, Layers, PackageCheck 
} from 'lucide-react';

// Full stack icons (all tools you listed)
const stackIcons = [
  { id: 1, name: "HTML5", Icon: LayoutGrid, color: "#E34F26" },
  { id: 2, name: "CSS3", Icon: LayoutGrid, color: "#1572B6" },
  { id: 3, name: "JavaScript", Icon: Globe, color: "#F7DF1E" },
  { id: 4, name: "React.js", Icon: Zap, color: "#61DAFB" },
  { id: 5, name: "React Hook Form", Icon: Zap, color: "#61DAFB" },
  { id: 6, name: "TailwindCSS", Icon: LayoutGrid, color: "#06B6D4" },
  { id: 7, name: "ShadCn", Icon: Layers, color: "#8B5CF6" },
  { id: 8, name: "Node.js", Icon: Code, color: "#83CD29" },
  { id: 9, name: "Express", Icon: Server, color: "#68A063" },
  { id: 10, name: "MongoDB", Icon: Database, color: "#47A248" },
  { id: 11, name: "Mongoose", Icon: Database, color: "#880000" },
  { id: 12, name: "Spring Boot", Icon: Server, color: "#6DB33F" },
  { id: 13, name: "MySQL", Icon: Database, color: "#4479A1" },
  { id: 14, name: "Clerk", Icon: Box, color: "#FF7F50" },
  { id: 15, name: "Render", Icon: Cloud, color: "#00BFFF" },
  { id: 16, name: "Netlify", Icon: Cloud, color: "#00C7B7" },
  { id: 17, name: "Git", Icon: GitBranch, color: "#F05032" },
  { id: 18, name: "GitHub", Icon: GitBranch, color: "#F05032" },
  { id: 19, name: "Redux", Icon: Box, color: "#764ABC" },
  { id: 20, name: "RTK", Icon: Box, color: "#764ABC" },
  { id: 21, name: "Recharts.js", Icon: PackageCheck, color: "#FF6347" },
  { id: 22, name: "Core Java", Icon: Code, color: "#007396" },
  { id: 23, name: "Java", Icon: Code, color: "#007396" }
];

const StackLoop = () => {
  return (
    <>
      <style>{`
        .stack-loop-container {
          overflow: hidden;
          width: 100%;
          background: #0d0d0d;
          padding: 1rem 0;
        }

        .stack-loop-track {
          display: flex;
          gap: 2rem;
          animation: scrollLoop 15s linear infinite;
        }

        .stack-loop-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          min-width: 80px;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .stack-loop-item:hover {
          transform: scale(1.3);
        }

        .stack-loop-icon {
          width: 4rem;
          height: 4rem;
          margin-bottom: 0.5rem;
        }

        .stack-loop-name {
          font-size: 0.85rem;
          color: #fff;
        }

        @keyframes scrollLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .stack-loop-track {
            animation: scrollLoop 10s linear infinite;
          }
          .stack-loop-icon { width: 3rem; height: 3rem; }
          .stack-loop-name { font-size: 0.75rem; }
        }
      `}</style>

      <div className="stack-loop-container">
        <div className="stack-loop-track">
          {[...stackIcons, ...stackIcons].map(item => (
            <div key={item.id + Math.random()} className="stack-loop-item">
              <item.Icon className="stack-loop-icon" style={{ color: item.color }} />
              <span className="stack-loop-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StackLoop;
