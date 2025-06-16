import React, { useState } from 'react';
import './Library.css';

const Library = ({ onBookClick }) => {
  const [fallingBook, setFallingBook] = useState(null);

  const books = [
    { title: "React Mastery", volume: "Vol. 1", color: 220, thickness: 65 },
    { title: "JavaScript Pro", volume: "Vol. 2", color: 180, thickness: 70 },
    { title: "CSS Wizardry", volume: "Vol. 3", color: 300, thickness: 60 },
    { title: "Node.js Guide", volume: "Vol. 4", color: 120, thickness: 75 },
    { title: "MongoDB Tips", volume: "Vol. 5", color: 60, thickness: 55 },
    { title: "Web Design", volume: "Vol. 6", color: 0, thickness: 68 },
    { title: "Full Stack", volume: "Vol. 7", color: 240, thickness: 62 },
    { title: "API Mastery", volume: "Vol. 8", color: 280, thickness: 58 }
  ];

  const handleBookClick = (index) => {
    setFallingBook(index);
    
    // Wait for animation to complete before transitioning
    setTimeout(() => {
      if (onBookClick) {
        onBookClick(index);
      }
      setFallingBook(null);
    }, 1000);
  };

  return (
    <section className="library-section" id="library">
      <div className="library-container">
        <div className="library-header">
          <h1>📚 My Portfolio Library</h1>
          <p>Click any book to explore my skills and projects</p>
        </div>
        
        <div className="bookshelf">
          <div className="shelf-wood"></div>
          <div className="shelf-support-left"></div>
          <div className="shelf-support-right"></div>
          
          <div className="books-row">
            {books.map((book, index) => (
              <div
                key={index}
                className={`book-spine ${fallingBook === index ? 'falling' : ''} ${
                  index === books.length - 1 ? 'leaning-book' : ''
                }`}
                onClick={() => handleBookClick(index)}
                style={{ 
                  '--book-hue': book.color,
                  '--book-width': `${book.thickness}px`,
                  '--fall-delay': `${index * 0.1}s`
                }}
              >
                <div className="book-cover">
                  <div className="spine-text">
                    <span className="spine-title">{book.title}</span>
                    <span className="spine-volume">{book.volume}</span>
                    <span className="spine-author">Mondayp</span>
                  </div>
                  <div className="book-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-line"></div>
                  </div>
                </div>
                
                {/* Book pages effect */}
                <div className="book-pages"></div>
              </div>
            ))}
          </div>
          
          <div className="shelf-shadow"></div>
        </div>
        
        <div className="library-footer">
          <div className="library-stats">
            <div className="stat-item">
              <span className="stat-number">{books.length}</span>
              <span className="stat-label">Skills</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;