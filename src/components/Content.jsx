

import React, { useState } from "react";
import { Lock, ExternalLink, Bot, Code, Zap, List } from "lucide-react";
import CardSwap, { Card } from './CardSwap';

const projectData = [
    { id: 1, name: "VoltVision | Energy System", url: "https://volt-vision.netlify.app/", status: "active", icon: Zap },
    { id: 2, name: "Next Project | AI Assistant", status: "locked", icon: Bot },
    { id: 3, name: "Future Project | Dev Tool", status: "locked", icon: Code },
];

const Content = () => {
    const [listView, setListView] = useState(false);

    const cardDistanceDesktop = 120; 
    const verticalDistanceDesktop = 120;
    const cardDistanceMobile = 60; 
    const verticalDistanceMobile = 60;

    return (
        <>
            <style>{`
                .projects-section {
                    display: flex;
                    min-height: 100vh;
                    background: #0d0d0d;
                    color: white;
                    padding: 4rem 2rem;
                    gap: 2rem;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                    overflow: hidden;
                    position: relative;
                }

                .projects-container {
                    display: flex;
                    width: 100%;
                    max-width: 1400px;
                    align-items: center;
                    gap: 4rem;
                }

                .projects-left {
                    flex: 1;
                    display: flex; 
                    flex-direction: column;
                    z-index: 10;
                }

                .projects-left h3 {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 800;
                    margin-bottom: 1rem;
                    color: white;
                }

                .projects-left p {
                    color: #888;
                    font-size: clamp(1rem, 1.2vw, 1.25rem);
                    line-height: 1.6;
                    max-width: 500px;
                    margin-bottom: 2rem; 
                }

                .projects-right {
                    flex: 1.2;
                    height: 650px; 
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 200px; 
                    padding-top: 200px;
                }

                .custom-card-wrapper {
                    width: 100%;
                    height: 100%;
                    background: #141414;
                    border-radius: 28px;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    padding: 0 1.5rem;
                    height: 65px;
                    background: linear-gradient(135deg, #BA0707 0%, #600000 100%);
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 700;
                }

                .card-body {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    background: #000;
                }

                .card-body iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: #000;
                }

                .visit-link {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    padding: 0.7rem 1.2rem; 
                    background: #BA0707; 
                    border-radius: 12px;
                    color: white;
                    text-decoration: none;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    z-index: 30;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                }

                .locked-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    color: #333;
                }

                /* LIST VIEW ONLY */
                .project-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 100%;
                    max-width: 600px;
                }
                .project-item {
                    background: #141414;
                    padding: 1rem 1.5rem;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    border: 1px solid rgba(255,255,255,0.1);
                    transition: transform 0.3s ease, background 0.3s ease;
                    cursor: pointer;
                }
                .project-item:hover {
                    transform: translateY(-4px);
                    background: #1a1a1a;
                }
                .list-toggle-btn {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: #BA0707;
                    border: none;
                    border-radius: 12px;
                    color: white;
                    padding: 0.5rem 1rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    z-index: 50;
                    transition: background 0.3s ease;
                }
                .list-toggle-btn:hover {
                    background: #e22c2c;
                }
            `}</style>

            <section id="projects" className="projects-section">
                {/* Floating Button */}
                <button className="list-toggle-btn" onClick={() => setListView(!listView)}>
                    <List size={18} /> {listView ? 'Card View' : 'List View'}
                </button>

                <div className="projects-container flex flex-col lg:flex-row items-center justify-center">
                    
                    {/* Left Text Block */}
                    <div className="projects-left flex flex-col items-center lg:items-start">
                        <h3>
                            My Full-Stack Journey <br /> in Action
                        </h3>
                        <p>
                            An engaging showcase of live applications and projects under development.
                            Experience the innovation and craftsmanship behind each build.
                        </p>
                    </div>

                    {/* Right Block */}
                    <div className="projects-right w-full flex justify-center items-center">
                        {listView ? (
                            <div className="project-list">
                                {projectData.map(project => (
                                    <div key={project.id} className="project-item">
                                        <span>{project.name}</span>
                                        {project.status === "active" ? (
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{color: '#BA0707'}}>
                                                Live <ExternalLink size={16} />
                                            </a>
                                        ) : (
                                            <Lock size={24} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // ORIGINAL CARD VIEW (UNCHANGED)
                            <CardSwap
                                cardDistance={window?.innerWidth < 640 ? cardDistanceMobile : cardDistanceDesktop}
                                verticalDistance={window?.innerWidth < 640 ? verticalDistanceMobile : verticalDistanceDesktop}
                                delay={5000}
                                pauseOnHover={true}
                            >
                                {projectData.map((project) => (
                                    <Card key={project.id}>
                                        <div className="custom-card-wrapper">
                                            <div className="card-header">
                                                <span>{project.name}</span>
                                            </div>

                                            <div className="card-body">
                                                {project.status === "active" ? (
                                                    <>
                                                        <iframe
                                                            src={project.url}
                                                            title={project.name}
                                                            loading="lazy"
                                                            sandbox="allow-scripts allow-same-origin allow-popups"
                                                        />
                                                        <a
                                                            href={project.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="visit-link"
                                                        >
                                                            Live Demo <ExternalLink size={16} />
                                                        </a>
                                                    </>
                                                ) : (
                                                    <div className="locked-content">
                                                        <Lock size={60} strokeWidth={1} />
                                                        <p style={{ color: '#444', fontWeight: '600' }}>LOCKED</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </CardSwap>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Content;
