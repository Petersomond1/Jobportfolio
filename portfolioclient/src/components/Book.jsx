import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Book.css';

// Book.jsx - Version 8 - Properly Closed Book Implementation
function Book() {
    const [isLibraryView, setIsLibraryView] = useState(false);
    const [isBookClosed, setIsBookClosed] = useState(true);
    const flipBookRef = useRef();

    const portfolioData = [
        {
            title: "About Me",
            content: "I'm a passionate Software and Mechanical Engineer with expertise in modern web technologies and engineering solutions. My journey combines traditional engineering principles with cutting-edge software development.",
            image: "https://via.placeholder.com/400x200/4f46e5/ffffff?text=About+Me",
            skills: ["React", "JavaScript", "Node.js", "Python"]
        },
        {
            title: "Frontend Skills",
            content: "Specializing in modern frontend technologies and responsive design. I create intuitive user interfaces that provide exceptional user experiences across all devices.",
            image: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=Frontend",
            skills: ["React.js", "Vue.js", "TypeScript", "Tailwind CSS"]
        },
        {
            title: "Backend Development",
            content: "Building robust server-side applications and APIs. I focus on scalable architecture, database optimization, and secure authentication systems.",
            image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Backend",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
        },
        {
            title: "Engineering Projects",
            content: "Mechanical engineering solutions and automation systems. I bridge the gap between physical systems and digital control interfaces.",
            image: "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Engineering",
            skills: ["CAD Design", "Automation", "IoT", "Robotics"]
        },
        {
            title: "Mobile Development",
            content: "Cross-platform mobile applications for iOS and Android. I develop native-feeling apps that work seamlessly across different devices and platforms.",
            image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Mobile",
            skills: ["React Native", "Flutter", "Swift", "Kotlin"]
        },
        {
            title: "DevOps & Cloud",
            content: "Infrastructure management and cloud deployment strategies. I implement CI/CD pipelines and manage scalable cloud architectures for optimal performance.",
            image: "https://via.placeholder.com/400x200/ef4444/ffffff?text=DevOps",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Data Science",
            content: "Analytics, machine learning, and data visualization. I transform raw data into actionable insights using modern data science tools and techniques.",
            image: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=Data+Science",
            skills: ["Python", "TensorFlow", "Pandas", "D3.js"]
        },
        {
            title: "Recent Projects",
            content: "Showcase of my latest work and accomplishments. These projects demonstrate my ability to deliver complete solutions from concept to deployment.",
            image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Projects",
            skills: ["E-commerce Platform", "IoT Dashboard", "Mobile App", "AI Tool"]
        }
    ];

    const toggleView = () => {
        setIsLibraryView(!isLibraryView);
    };

    const handleBookOpen = () => {
        setIsBookClosed(false);
    };

    const handleFlip = (e) => {
        // Keep track of book state
        if (e.data === 0) {
            setIsBookClosed(true);
        } else {
            setIsBookClosed(false);
        }
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

    // Render closed book when book is closed
    if (isBookClosed) {
        return (
            <div className="book-container">
                <div className="book-header">
                    <button className="view-toggle" onClick={toggleView}>
                        📚 View Library
                    </button>
                </div>
                
                <div className="closed-book-wrapper">
                    <div className="closed-book" onClick={handleBookOpen}>
                        {/* Book Spine */}
                        <div className="book-spine-left"></div>
                        
                        {/* Front Cover */}
                        <div className="closed-book-cover">
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
                        
                        {/* Book Edge */}
                        <div className="book-edge-right"></div>
                        
                        {/* Click to Open Hint */}
                        <div className="closed-book-hint">
                            👆 Click to Open
                        </div>
                    </div>
                </div>
                
                <div className="book-controls">
                    <div className="flip-instruction">
                        💡 <strong>Click the book cover to open and start reading!</strong>
                    </div>
                </div>
            </div>
        );
    }

    // Render open flipbook when book is opened
    return (
        <div className="book-container">
            <div className="book-header">
                {/* <button className="view-toggle" onClick={toggleView}>
                    📚 View Library
                </button> */}
                <button className="close-book-btn" onClick={() => setIsBookClosed(true)}>
                    📖 Close Book
                </button>
            </div>
            
            <div className="flipbook-wrapper">
                <HTMLFlipBook 
                    ref={flipBookRef}
                    width={550} 
                    height={800} 
                    maxShadowOpacity={0.5} 
                    drawShadow={true} 
                    showCover={true}
                    mobileScrollSupport={true} 
                    size='fixed'
                    className="flipbook open-book"
                    startPage={0}
                    flippingTime={800}
                    usePortrait={true} // Use portrait mode for better mobile experience
                    startZIndex={0}
                    autoSize={false}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                    onFlip={handleFlip}
                    onChangeOrientation={() => {
                        // Handle orientation change if needed
                    }}

                    onPageChange={(e) => {
                        // Handle page change if needed
                        console.log(`Page changed to: ${e.data}`);
                    }}
                >
                    {/* Welcome Page (Left side when opened) */}
                    <div className="page content-page left-page">
                        <div className="page-content">
                            <h2>👋 Welcome to My Portfolio</h2>
                            <div className="intro-content">
                                <div className="intro-image">
                                    <img 
                                        src="https://via.placeholder.com/300x200/4f46e5/ffffff?text=Welcome" 
                                        alt="Welcome" 
                                    />
                                </div>
                                <div className="intro-text">
                                    <p>Thank you for taking the time to explore my portfolio. This interactive book showcases my journey as a Software and Mechanical Engineer.</p>
                                    <p>Each page represents a different aspect of my expertise and passion for technology.</p>
                                    <p>From frontend development to mechanical engineering solutions, discover how I bridge the digital and physical worlds.</p>
                                </div>
                            </div>
                            <div className="page-number">2</div>
                        </div>
                    </div>

                    {/* Table of Contents (Right side when opened) */}
                    <div className="page content-page right-page">
                        <div className="page-content">
                            <h2>📋 Table of Contents</h2>
                            <div className="toc-list">
                                {portfolioData.map((item, index) => (
                                    <div key={index} className="toc-item">
                                        <span className="toc-title">{item.title}</span>
                                        <span className="toc-dots">........................</span>
                                        <span className="toc-page">{index + 4}</span>
                                    </div>
                                ))}
                                <div className="toc-item">
                                    <span className="toc-title">Contact & Conclusion</span>
                                    <span className="toc-dots">........................</span>
                                    <span className="toc-page">12</span>
                                </div>
                            </div>
                            <div className="page-number">3</div>
                        </div>
                    </div>

                    {/* Portfolio Content Pages - Now in pairs */}
                    {portfolioData.reduce((pairs, item, index) => {
                        if (index % 2 === 0) {
                            const nextItem = portfolioData[index + 1];
                            pairs.push(
                                <React.Fragment key={`pair-${index}`}>
                                    {/* Left Page */}
                                    <div className="page content-page left-page">
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
                                            
                                            <div className="page-number">{index + 4}</div>
                                        </div>
                                    </div>
                                    
                                    {/* Right Page */}
                                    {nextItem && (
                                        <div className="page content-page right-page">
                                            <div className="page-content">
                                                <div className="page-header">
                                                    <h2>{nextItem.title}</h2>
                                                    <div className="page-ornament">🔹</div>
                                                </div>
                                                
                                                <div className="content-image">
                                                    <img src={nextItem.image} alt={nextItem.title} />
                                                </div>
                                                
                                                <div className="content-text">
                                                    <p>{nextItem.content}</p>
                                                </div>
                                                
                                                <div className="skills-section">
                                                    <h4>Key Skills & Technologies:</h4>
                                                    <div className="skills-grid">
                                                        {nextItem.skills.map((skill, skillIndex) => (
                                                            <span key={skillIndex} className="skill-tag">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                <div className="page-number">{index + 5}</div>
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        }
                        return pairs;
                    }, [])}

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
                                    <div className="contact-item">
                                        <span>📱</span> +1 (555) 123-4567
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
                    💡 <strong>Tip:</strong> Click on the right edge to flip pages forward, left edge to go back. The book shows two pages at once when open!
                </div>
            </div>
        </div>
    );
}

export default Book;