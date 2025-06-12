import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Book2.css';

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
    }
];

function Book() {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const bookRef = useRef(null);

    useEffect(() => {
        if (bookRef.current) {
            try {
                const pageCount = bookRef.current.getPageFlip().getPageCount();
                setTotalPages(pageCount);
            } catch (error) {
                console.log('Error getting page count:', error);
            }
        }
    }, []);

    const handlePageFlip = (e) => {
        setCurrentPage(e.data);
    };

    const goToNextPage = () => {
        if (bookRef.current) {
            bookRef.current.getPageFlip().flipNext();
        }
    };

    const goToPrevPage = () => {
        if (bookRef.current) {
            bookRef.current.getPageFlip().flipPrev();
        }
    };

    return (
        <div className="book-container">
            <div className="book-header">
                <h1>📚 My Portfolio Book</h1>
                <p>Click and drag to flip through the pages</p>
            </div>

            <div className="book-wrapper">
                <HTMLFlipBook
                    ref={bookRef}
                    width={400}
                    height={500}
                    size="fixed"
                    minWidth={400}
                    maxWidth={400}
                    minHeight={500}
                    maxHeight={500}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={handlePageFlip}
                    className="portfolio-book"
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={false}
                    startPage={0}
                    autoSize={false}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    {/* Front Cover */}
                    <div className="page cover-page front-cover">
                        <div className="cover-content">
                            <h1>📖 Portfolio</h1>
                            <h2>Software & Mechanical Engineer</h2>
                            <div className="cover-image">
                                <img src="https://via.placeholder.com/300x200/4f46e5/ffffff?text=Portfolio" alt="Portfolio" />
                            </div>
                            <p className="author">by <strong>Mondayp</strong></p>
                            <div className="cover-decoration">✨</div>
                        </div>
                    </div>

                    {/* Welcome Page */}
                    <div className="page content-page">
                        <div className="page-content">
                            <h2 className="page-title">👋 Welcome</h2>
                            <div className="welcome-image">
                                <img src="https://via.placeholder.com/300x150/4f46e5/ffffff?text=Welcome" alt="Welcome" />
                            </div>
                            <div className="welcome-text">
                                <p>Welcome to my interactive portfolio! This book showcases my journey as a Software and Mechanical Engineer.</p>
                                <p>Each page represents different aspects of my expertise and passion for technology.</p>
                                <p>Explore to discover how I bridge digital and physical worlds through innovative solutions.</p>
                            </div>
                            <div className="page-number">1</div>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="page content-page">
                        <div className="page-content">
                            <h2 className="page-title">📋 Contents</h2>
                            <div className="toc">
                                {portfolioData.map((item, index) => (
                                    <div key={index} className="toc-item">
                                        <span className="toc-title">{item.title}</span>
                                        <span className="toc-dots">................................</span>
                                        <span className="toc-page-number">{index + 3}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="page-number">2</div>
                        </div>
                    </div>

                    {/* Portfolio Pages */}
                    {portfolioData.map((item, index) => (
                        <div key={index} className="page content-page">
                            <div className="page-content">
                                <h2 className="page-title">{item.title}</h2>
                                
                                <div className="portfolio-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                
                                <div className="portfolio-text">
                                    <p>{item.content}</p>
                                </div>
                                
                                <div className="skills-section">
                                    <h4>Technologies & Skills:</h4>
                                    <div className="skills-list">
                                        {item.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-badge">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="page-number">{index + 3}</div>
                            </div>
                        </div>
                    ))}

                    {/* Back Cover */}
                    <div className="page cover-page back-cover">
                        <div className="cover-content">
                            <h2>🎯 Let's Connect!</h2>
                            <p>Ready to build something amazing together?</p>
                            
                            <div className="contact-section">
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
                            
                            <div className="back-quote">
                                <em>"Innovation distinguishes between a leader and a follower."</em>
                                <small>- Steve Jobs</small>
                            </div>
                            
                            <div className="logo">MP</div>
                        </div>
                    </div>
                </HTMLFlipBook>
            </div>

            <div className="book-controls">
                <button 
                    className="control-button" 
                    onClick={goToPrevPage}
                    disabled={currentPage === 0}
                >
                    ← Previous
                </button>
                
                <div className="page-info">
                    Page {currentPage + 1} of {totalPages}
                </div>
                
                <button 
                    className="control-button" 
                    onClick={goToNextPage}
                    disabled={currentPage >= totalPages - 1}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}

export default Book;