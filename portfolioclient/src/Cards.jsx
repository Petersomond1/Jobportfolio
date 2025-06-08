import React, { useState } from 'react';

// Individual Playing Card Component
const PlayingCard = ({ suit, value, title, description, isFlipped = false, onClick, skillLevel = 5 }) => {
  const getSuitSymbol = (suit) => {
    const symbols = {
      hearts: '♥',
      diamonds: '♦',
      clubs: '♣',
      spades: '♠'
    };
    return symbols[suit];
  };

  const getSuitColor = (suit) => {
    return suit === 'hearts' || suit === 'diamonds' ? '#dc2626' : '#000';
  };

  const getCardValue = (value) => {
    if (value === 1) return 'A';
    if (value === 11) return 'J';
    if (value === 12) return 'Q';
    if (value === 13) return 'K';
    return value.toString();
  };

  const getSuitTheme = (suit) => {
    const themes = {
      hearts: 'Frontend Skills',
      diamonds: 'Projects',
      clubs: 'Experience',
      spades: 'Backend Skills'
    };
    return themes[suit];
  };

  return (
    <div 
      className={`playing-card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
      style={{
        width: '140px',
        height: '200px',
        borderRadius: '12px',
        position: 'relative',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
        transition: 'all 0.6s ease',
        margin: '15px'
      }}
    >
      {/* Card Front */}
      <div 
        className="card-front"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          backgroundColor: '#fff',
          border: '3px solid #333',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '12px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          color: getSuitColor(suit),
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        {/* Top corner */}
        <div style={{ alignSelf: 'flex-start', textAlign: 'center', lineHeight: '1' }}>
          <div style={{ fontSize: '18px' }}>{getCardValue(value)}</div>
          <div style={{ fontSize: '20px' }}>{getSuitSymbol(suit)}</div>
        </div>

        {/* Center content */}
        <div style={{ 
          alignSelf: 'center', 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          color: '#333'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>{getSuitSymbol(suit)}</div>
          <div style={{ fontSize: '10px', fontWeight: 'normal', opacity: 0.7 }}>
            {getSuitTheme(suit)}
          </div>
        </div>

        {/* Bottom corner (rotated) */}
        <div style={{ 
          alignSelf: 'flex-end', 
          textAlign: 'center', 
          lineHeight: '1',
          transform: 'rotate(180deg)'
        }}>
          <div style={{ fontSize: '18px' }}>{getCardValue(value)}</div>
          <div style={{ fontSize: '20px' }}>{getSuitSymbol(suit)}</div>
        </div>
      </div>

      {/* Card Back - Portfolio Content */}
      <div 
        className="card-back"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          backgroundColor: 'var(--second-background)',
          border: '3px solid var(--primary-color)',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '12px',
          boxShadow: '0 8px 16px rgba(0,255,157,0.3)',
          color: '#fff',
          fontSize: '12px'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '14px', 
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            {title}
          </div>
          <div style={{ 
            fontSize: '10px', 
            lineHeight: '1.4',
            height: '60px',
            overflow: 'hidden'
          }}>
            {description}
          </div>
        </div>

        {/* Skill level indicator */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '10px', marginBottom: '5px', opacity: 0.8 }}>
            Skill Level
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2px' }}>
            {[1,2,3,4,5].map(star => (
              <span 
                key={star}
                style={{ 
                  color: star <= skillLevel ? 'var(--primary-color)' : '#333',
                  fontSize: '12px'
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div style={{ 
          textAlign: 'center',
          color: 'var(--primary-color)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>
          Mondayp
        </div>
      </div>

      <style jsx>{`
        .playing-card.flipped {
          transform: rotateY(180deg);
        }
        .playing-card:hover {
          transform: translateY(-10px) scale(1.05) ${isFlipped ? 'rotateY(180deg)' : ''};
          box-shadow: 0 12px 24px rgba(0,255,157,0.4);
        }
      `}</style>
    </div>
  );
};

// Main Cards Component
const Cards = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  // Portfolio cards data
  const portfolioCards = [
    // Hearts - Frontend Skills
    { suit: 'hearts', value: 1, title: 'React.js', description: 'Building dynamic user interfaces with modern React patterns, hooks, and state management.', skillLevel: 5 },
    { suit: 'hearts', value: 11, title: 'JavaScript', description: 'ES6+, async/await, DOM manipulation, and modern JavaScript development practices.', skillLevel: 5 },
    { suit: 'hearts', value: 12, title: 'CSS/Tailwind', description: 'Responsive design, animations, Flexbox, Grid, and modern CSS frameworks.', skillLevel: 4 },
    { suit: 'hearts', value: 13, title: 'HTML5', description: 'Semantic markup, accessibility, and modern web standards implementation.', skillLevel: 5 },

    // Diamonds - Projects
    { suit: 'diamonds', value: 1, title: 'E-Commerce App', description: 'Full-stack shopping platform with payment integration and admin dashboard.', skillLevel: 5 },
    { suit: 'diamonds', value: 11, title: 'Task Manager', description: 'React-based productivity app with real-time updates and team collaboration.', skillLevel: 4 },
    { suit: 'diamonds', value: 12, title: 'Portfolio Site', description: 'This responsive portfolio showcasing skills with video integration and animations.', skillLevel: 5 },
    { suit: 'diamonds', value: 13, title: 'Weather App', description: 'API-integrated weather application with location services and forecasting.', skillLevel: 4 },

    // Clubs - Experience
    { suit: 'clubs', value: 1, title: 'Team Leadership', description: 'Led development teams and mentored junior developers in agile environments.', skillLevel: 4 },
    { suit: 'clubs', value: 11, title: 'Client Relations', description: 'Direct client communication, requirement gathering, and project delivery.', skillLevel: 4 },
    { suit: 'clubs', value: 12, title: 'Code Reviews', description: 'Conducted thorough code reviews and established best practices for teams.', skillLevel: 5 },
    { suit: 'clubs', value: 13, title: 'Agile/Scrum', description: 'Experienced in sprint planning, daily standups, and iterative development.', skillLevel: 4 },

    // Spades - Backend Skills
    { suit: 'spades', value: 1, title: 'Node.js', description: 'Server-side JavaScript development with Express.js and RESTful API design.', skillLevel: 4 },
    { suit: 'spades', value: 11, title: 'Database', description: 'MongoDB, MySQL, and database design with optimization and indexing.', skillLevel: 4 },
    { suit: 'spades', value: 12, title: 'AWS/Cloud', description: 'Cloud deployment, serverless functions, and scalable infrastructure setup.', skillLevel: 3 },
    { suit: 'spades', value: 13, title: 'APIs/Auth', description: 'RESTful APIs, JWT authentication, and secure backend development practices.', skillLevel: 4 }
  ];

  const handleCardClick = (cardId) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(cardId)) {
      newFlipped.delete(cardId);
    } else {
      newFlipped.add(cardId);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <section id="portfolio-cards" style={{
      padding: '60px 5%',
      backgroundColor: 'var(--third-background)',
      textAlign: 'center'
    }}>
      <h1 className='header' style={{ marginBottom: '20px' }}>
        <span>🎴 My Skills & Experience Deck</span>
      </h1>
      <p style={{ 
        color: 'white', 
        fontSize: '1.2em', 
        marginBottom: '40px',
        maxWidth: '800px',
        margin: '0 auto 40px'
      }}>
        Click any card to reveal detailed information about my skills and experience. Each suit represents a different aspect of my expertise.
      </p>

      {/* Suit Legend */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto 40px',
        padding: '20px',
        backgroundColor: 'rgba(0, 255, 157, 0.1)',
        borderRadius: '15px',
        border: '2px solid var(--primary-color)'
      }}>
        <div style={{ color: '#dc2626' }}>♥ <strong>Hearts:</strong> Frontend Skills</div>
        <div style={{ color: '#dc2626' }}>♦ <strong>Diamonds:</strong> Projects</div>
        <div style={{ color: '#000', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>♣ <strong>Clubs:</strong> Experience</div>
        <div style={{ color: '#000', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>♠ <strong>Spades:</strong> Backend Skills</div>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        justifyItems: 'center'
      }}>
        {portfolioCards.map((card) => {
          const cardId = `${card.suit}-${card.value}`;
          return (
            <PlayingCard
              key={cardId}
              suit={card.suit}
              value={card.value}
              title={card.title}
              description={card.description}
              skillLevel={card.skillLevel}
              isFlipped={flippedCards.has(cardId)}
              onClick={() => handleCardClick(cardId)}
            />
          );
        })}
      </div>

      {/* Interactive Instructions */}
      <div style={{
        marginTop: '40px',
        color: 'var(--primary-color)',
        fontSize: '1.1em'
      }}>
        <p>💡 <strong>Tip:</strong> Hover over cards for preview, click to flip and see details!</p>
      </div>
    </section>
  );
};

export default Cards;