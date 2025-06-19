import React, { useState, useEffect } from 'react';
import PlayingCard from './PlayingCard';
import DeckCard from './DeckCard';
import './Cards.css';

// Main Cards Component
const Cards = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [isDeckSpread, setIsDeckSpread] = useState(false);

  // Deck cards data (4 Aces + 2 Jokers)
  const deckCards = [
    { suit: 'hearts', value: 1, title: 'Ace of Hearts', isJoker: false },
    { suit: 'diamonds', value: 1, title: 'Ace of Diamonds', isJoker: false },
    { suit: 'clubs', value: 1, title: 'Ace of Clubs', isJoker: false },
    { suit: 'spades', value: 1, title: 'Ace of Spades', isJoker: false },
    { title: 'Red Joker', isJoker: true, jokerColor: 'red' },
    { title: 'Black Joker', isJoker: true, jokerColor: 'black' }
  ];

  // Auto-spread animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeckSpread(true);
    }, 1000); // Wait 1 second then spread

    return () => clearTimeout(timer);
  }, []);

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

  const handleDeckClick = () => {
    setIsDeckSpread(!isDeckSpread);
  };

  return (
    <section id="portfolio-cards" className="portfolio-cards-section">
      <h1 className="portfolio-header">
        <span>🎴 My Skills & Experience Deck</span>
      </h1>

      {/* Animated Deck of Cards */}
      <div className="deck-container">
        <div 
          className="deck_of_cards"
          onClick={handleDeckClick}
        >
          {deckCards.map((card, index) => (
            <DeckCard
              key={index}
              suit={card.suit}
              value={card.value}
              title={card.title}
              isJoker={card.isJoker}
              jokerColor={card.jokerColor}
              index={index}
              isSpread={isDeckSpread}
              onClick={handleDeckClick}
            />
          ))}
        </div>
      </div>

      {/* Instructions for deck animation */}
      <div className="deck-instructions">
        <p>🎯 <strong>Click the deck above to {isDeckSpread ? 'stack' : 'spread'} the cards!</strong></p>
      </div>

      {/* <p className="portfolio-description">
        Click any card below to reveal detailed information about my skills and experience. Each suit represents a different aspect of my expertise.
      </p> */}

      {/* Suit Legend */}
      {/* <div className="suit-legend">
        <div className="legend-item legend-hearts">♥ <strong>Hearts:</strong> Frontend Skills</div>
        <div className="legend-item legend-diamonds">♦ <strong>Diamonds:</strong> Projects</div>
        <div className="legend-item legend-clubs">♣ <strong>Clubs:</strong> Experience</div>
        <div className="legend-item legend-spades">♠ <strong>Spades:</strong> Backend Skills</div>
      </div> */}

      {/* Cards Grid */}
      {/* <div className="cards-grid">
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
      </div> */}

      {/* Interactive Instructions */}
      {/* <div className="interactive-instructions">
        <p>💡 <strong>Tip:</strong> Hover over cards for preview, click to flip and see details!</p>
      </div> */}
    </section>
  );
};

export default Cards;