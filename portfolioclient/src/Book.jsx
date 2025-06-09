import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Book.css';

function Book() {
    const [isLibraryView, setIsLibraryView] = useState(false);

    const portfolioData = [
        {
            title: "About Me",
            content: "I'm a passionate Software and Mechanical Engineer with expertise in modern web technologies and engineering solutions.",
            image: "https://via.placeholder.com/400x200/4f46e5/ffffff?text=About+Me",
            skills: ["React", "JavaScript", "Node.js", "Python"]
        },
        {
            title: "Frontend Skills",
            content: "Specializing in modern frontend technologies and responsive design.",
            image: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=Frontend",
            skills: ["React.js", "Vue.js", "TypeScript", "Tailwind CSS"]
        },
        {
            title: "Backend Development",
            content: "Building robust server-side applications and APIs.",
            image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Backend",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
        },
        {
            title: "Engineering Projects",
            content: "Mechanical engineering solutions and automation systems.",
            image: "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Engineering",
            skills: ["CAD Design", "Automation", "IoT", "Robotics"]
        },
        {
            title: "Mobile Development",
            content: "Cross-platform mobile applications for iOS and Android.",
            image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Mobile",
            skills: ["React Native", "Flutter", "Swift", "Kotlin"]
        },
        {
            title: "DevOps & Cloud",
            content: "Infrastructure management and cloud deployment strategies.",
            image: "https://via.placeholder.com/400x200/ef4444/ffffff?text=DevOps",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Data Science",
            content: "Analytics, machine learning, and data visualization.",
            image: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=Data+Science",
            skills: ["Python", "TensorFlow", "Pandas", "D3.js"]
        },
        {
            title: "Recent Projects",
            content: "Showcase of my latest work and accomplishments.",
            image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Projects",
            skills: ["E-commerce Platform", "IoT Dashboard", "Mobile App", "AI Tool"]
        }
    ];

    const toggleView = () => {
        setIsLibraryView(!isLibraryView);
    };

    if (isLibraryView) {
        return (
            <div className="library-container">
                <div className="library-header">
                    <h1>📚 Portfolio Library</h1>
                    <button className="view-toggle" onClick={toggleView}>
                        📖 Open Single Book
                    </button>
                </div>
                <div className="bookshelf">
                    <div className="shelf-wood"></div>
                    <div className="books-row">
                        {[...Array(10)].map((_, index) => (
                            <div 
                                key={index} 
                                className={`book-spine book-${index + 1}`}
                                onClick={toggleView}
                                style={{ '--book-hue': index * 36 }}
                            >
                                <div className="spine-text">
                                    <span className="spine-title">Portfolio</span>
                                    <span className="spine-volume">Vol. {index + 1}</span>
                                    <span className="spine-author">Mondayp</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="shelf-shadow"></div>
                </div>
                <div className="library-footer">
                    <p>✨ Click any book to open and explore the portfolio</p>
                </div>
            </div>
        );
    }

    return (
        <div className="book-container">
            <div className="book-header">
                <button className="view-toggle" onClick={toggleView}>
                    📚 View Library
                </button>
            </div>
            
            <div className="flipbook-wrapper">
                <HTMLFlipBook 
                    width={550} 
                    height={620} 
                    maxShadowOpacity={0.5} 
                    drawShadow={true} 
                    showCover={true} 
                    mobileScrollSupport={true} 
                    size='fixed'
                    className="flipbook"
                >
                    {/* Front Hard Cover */}
                    <div className="page hard-cover front-cover">
                        <div className="cover-content">
                            <div className="cover-title">
                                <h1>📖 My Portfolio</h1>
                                <div className="cover-subtitle">Software & Mechanical Engineer</div>
                            </div>
                            <div className="cover-image">
                                <img 
                                    src="https://via.placeholder.com/300x200/4f46e5/ffffff?text=Portfolio+Cover" 
                                    alt="Portfolio Cover" 
                                />
                            </div>
                            <div className="cover-author">
                                <p>by <strong>Mondayp</strong></p>
                            </div>
                            <div className="cover-ornament">✨</div>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="page content-page">
                        <div className="page-content">
                            <h2>📋 Table of Contents</h2>
                            <div className="toc-list">
                                {portfolioData.map((item, index) => (
                                    <div key={index} className="toc-item">
                                        <span className="toc-title">{item.title}</span>
                                        <span className="toc-dots">........................</span>
                                        <span className="toc-page">{index + 3}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="page-number">2</div>
                        </div>
                    </div>

                    {/* Portfolio Content Pages */}
                    {portfolioData.map((item, index) => (
                        <div key={index} className="page content-page">
                            <div className="page-content">
                                <div className="page-header">
                                    <h2>{item.title}</h2>
                                    <div className="page-ornament">🔹</div>
                                </div>
                                
                                <div className="content-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                
                                <div className="content-text">
                                    <p>{item.content}</p>
                                </div>
                                
                                <div className="skills-section">
                                    <h4>Key Skills & Technologies:</h4>
                                    <div className="skills-grid">
                                        {item.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="page-number">{index + 3}</div>
                            </div>
                        </div>
                    ))}

                    {/* Back Hard Cover */}
                    <div className="page hard-cover back-cover">
                        <div className="cover-content">
                            <div className="back-cover-text">
                                <h3>🎯 Ready to Build Something Amazing?</h3>
                                <p>Let's connect and discuss how we can work together to bring your ideas to life.</p>
                                
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <span>📧</span> contact@mondayp.dev
                                    </div>
                                    <div className="contact-item">
                                        <span>🌐</span> www.mondayp.portfolio
                                    </div>
                                    <div className="contact-item">
                                        <span>💼</span> LinkedIn/mondayp
                                    </div>
                                </div>
                                
                                <div className="back-cover-quote">
                                    <em>"Innovation distinguishes between a leader and a follower."</em>
                                    <br />
                                    <small>- Steve Jobs</small>
                                </div>
                            </div>
                            
                            <div className="back-cover-logo">
                                <div className="logo-circle">MP</div>
                            </div>
                        </div>
                    </div>
                </HTMLFlipBook>
            </div>
            
            <div className="book-controls">
                <div className="flip-instruction">
                    💡 <strong>Tip:</strong> Click on the right edge to flip pages forward, left edge to go back
                </div>
            </div>
        </div>
    );
}

export default Book;
