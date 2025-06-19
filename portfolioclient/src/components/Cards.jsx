import React, { useState, useEffect } from 'react';
// import PlayingCard from './PlayingCard';
import DeckCard from './DeckCard';
import './Cards.css';

// Main Cards Component
const Cards = () => {
  // const [flippedCards, setFlippedCards] = useState(new Set());
  const [isDeckSpread, setIsDeckSpread] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [displayedCard, setDisplayedCard] = useState(null);

  // Deck cards data (4 Aces + 2 Jokers)
  const deckCards = [
    { suit: 'hearts', value: 1, title: 'Ace of Hearts', isJoker: false },
    { suit: 'diamonds', value: 1, title: 'Ace of Diamonds', isJoker: false },
    { suit: 'clubs', value: 1, title: 'Ace of Clubs', isJoker: false },
    { suit: 'spades', value: 1, title: 'Ace of Spades', isJoker: false },
    { title: 'Red Joker', isJoker: true, jokerColor: 'red' },
    { title: 'Black Joker', isJoker: true, jokerColor: 'black' }
  ];

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

  // Auto-spread animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeckSpread(true);
    }, 1000); // Wait 1 second then spread

    return () => clearTimeout(timer);
  }, []);

  // Set default displayed card when deck spreads
  useEffect(() => {
    if (isDeckSpread && !displayedCard) {
      // Show the first portfolio card (React.js) as default
      setDisplayedCard(portfolioCards[0]);
      setSelectedCardIndex(0);
    } else if (!isDeckSpread) {
      // Clear displayed card when deck is stacked
      setDisplayedCard(null);
      setSelectedCardIndex(null);
    }
  }, [isDeckSpread]);

  const handleDeckClick = () => {
    setIsDeckSpread(!isDeckSpread);
  };

  // Handle individual card clicks when deck is spread
  const handleCardClick = (cardIndex, event) => {
    if (isDeckSpread) {
      event.stopPropagation(); // Prevent deck click event
      
      // Map deck card to portfolio card
      const portfolioCardIndex = getPortfolioCardIndex(cardIndex);
      if (portfolioCardIndex !== -1) {
        setDisplayedCard(portfolioCards[portfolioCardIndex]);
        setSelectedCardIndex(portfolioCardIndex);
      }
    }
  };

  // Map deck card index to portfolio card index
  const getPortfolioCardIndex = (deckCardIndex) => {
    const deckCard = deckCards[deckCardIndex];
    
    if (deckCard.isJoker) {
      // For jokers, show a special message or return -1
      return -1;
    }
    
    // Map suit to portfolio category
    const suitToStartIndex = {
      'hearts': 0,   // Frontend Skills (indices 0-3)
      'diamonds': 4, // Projects (indices 4-7)
      'clubs': 8,    // Experience (indices 8-11)
      'spades': 12   // Backend Skills (indices 12-15)
    };
    
    const startIndex = suitToStartIndex[deckCard.suit];
    return startIndex; // Return the first card of each suit for simplicity
  };

  // Render skill level stars
  const renderSkillLevel = (level) => {
    return '⭐'.repeat(level) + '☆'.repeat(5 - level);
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
              onClick={(event) => handleCardClick(index, event)}
              isSelected={selectedCardIndex === getPortfolioCardIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Portfolio Card Display */}
      <div className="portfolio-display">
        {isDeckSpread && displayedCard ? (
          <div className="displayed-card">
            <h3 className="card-title">{displayedCard.title}</h3>
            <p className="card-description">{displayedCard.description}</p>
            <div className="card-skill-level">
              <span className="skill-label">Skill Level: </span>
              <span className="skill-stars">{renderSkillLevel(displayedCard.skillLevel)}</span>
            </div>
          </div>
        ) : isDeckSpread ? (
          <div className="displayed-card">
            <h3 className="card-title">Select a Card</h3>
            <p className="card-description">Click on any card above to see detailed information about my skills and experience.</p>
          </div>
        ) : (
          <div className="displayed-card stacked">
            <h3 className="card-title">Deck Stacked</h3>
            <p className="card-description">Click the deck to spread the cards and explore my portfolio!</p>
          </div>
        )}
      </div>

      {/* Instructions for deck animation */}
      <div className="deck-instructions">
        <p>🎯 <strong>Click the deck above to {isDeckSpread ? 'stack' : 'spread'} the cards!</strong></p>
        {isDeckSpread && (
          <p className="card-click-instruction">
            💡 <strong>Click individual cards to see detailed information!</strong>
          </p>
        )}
      </div>
    </section>
  );
};

export default Cards;