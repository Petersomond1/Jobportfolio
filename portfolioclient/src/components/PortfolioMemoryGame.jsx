// PortfolioMemoryGame.jsx - Fixed Version
import React, { useState, useEffect } from 'react';
import './PortfolioMemoryGame.css';

const PortfolioMemoryGame = () => {
  const [gameBoard, setGameBoard] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(new Set());
  const [gameWon, setGameWon] = useState(false);
  const [winCondition, setWinCondition] = useState('');
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Your original portfolio cards data
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

  // Helper functions
  const getDisplayValue = (value) => {
    if (value === 1) return 'A';
    if (value === 11) return 'J';
    if (value === 12) return 'Q';
    if (value === 13) return 'K';
    return value;
  };

  const getSuitSymbol = (suit) => {
    const symbols = {
      hearts: '♥',
      diamonds: '♦',
      clubs: '♣',
      spades: '♠'
    };
    return symbols[suit];
  };

  // Initialize game board
  const initializeGame = () => {
    const shuffled = [...portfolioCards].sort(() => Math.random() - 0.5);
    setGameBoard(shuffled);
    setFlippedCards([]);
    setMatchedPairs(new Set());
    setGameWon(false);
    setWinCondition('');
    setMoves(0);
    setGameStarted(true);
  };

  // Check for line wins
  const checkLineWin = (newMatchedPairs) => {
    const matchedPositions = Array.from(newMatchedPairs);
    
    // Check horizontal lines
    for (let row = 0; row < 4; row++) {
      const rowPositions = [];
      for (let col = 0; col < 4; col++) {
        const position = row * 4 + col;
        if (matchedPositions.includes(position)) {
          rowPositions.push(position);
        }
      }
      if (rowPositions.length === 4) {
        return 'Horizontal Line Win! 🎯';
      }
    }

    // Check vertical lines
    for (let col = 0; col < 4; col++) {
      const colPositions = [];
      for (let row = 0; row < 4; row++) {
        const position = row * 4 + col;
        if (matchedPositions.includes(position)) {
          colPositions.push(position);
        }
      }
      if (colPositions.length === 4) {
        return 'Vertical Line Win! 🎯';
      }
    }

    // Check diagonal lines
    const diagonal1 = [0, 5, 10, 15];
    const diagonal2 = [3, 6, 9, 12];
    
    if (diagonal1.every(pos => matchedPositions.includes(pos))) {
      return 'Diagonal Line Win! 🎯';
    }
    
    if (diagonal2.every(pos => matchedPositions.includes(pos))) {
      return 'Diagonal Line Win! 🎯';
    }

    return null;
  };

  // Handle card flip
  const handleCardFlip = (index) => {
    console.log('Card clicked:', index, 'Game started:', gameStarted, 'Game won:', gameWon);
    console.log('Flipped cards:', flippedCards);
    console.log('Matched pairs:', Array.from(matchedPairs));
    
    if (!gameStarted || gameWon || flippedCards.includes(index) || matchedPairs.has(index)) {
      console.log('Card flip blocked - Game started:', gameStarted, 'Game won:', gameWon, 'Already flipped:', flippedCards.includes(index), 'Already matched:', matchedPairs.has(index));
      return;
    }

    console.log('Flipping card at index:', index);
    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);
    setMoves(prev => prev + 1);

    const card = gameBoard[index];
    const newMatchedPairs = new Set([...matchedPairs, index]);
    setMatchedPairs(newMatchedPairs);
    
    // Check for line win
    const lineWin = checkLineWin(newMatchedPairs);
    if (lineWin) {
      setGameWon(true);
      setWinCondition(lineWin);
      return;
    }

    // Check for specific skill wins
    if (card.title === 'React.js') {
      setGameWon(true);
      setWinCondition('🎯 React.js Master Found! Perfect skill match!');
      return;
    }

    // Check if all cards are revealed
    if (newMatchedPairs.size === 16) {
      setGameWon(true);
      setWinCondition('🧠 Portfolio Master! All skills and experiences revealed!');
    }
  };

  // Initialize game on component mount
  useEffect(() => {
    initializeGame();
  }, []);

  const testFlip = () => {
    console.log('Test flip triggered');
    setFlippedCards([0, 1, 2]); // Force flip first 3 cards
  };

  return (
    <div className="portfolio-memory-game-container">
      {/* Game Header */}
      <div className="pmg-game-header">
        <h1 className="pmg-game-title">
          🎴 Portfolio Skills Memory Game
        </h1>
        <p className="pmg-game-subtitle">
          Flip playing cards to reveal skills & experiences. Find the sought skill or arrange 4 in a line to win!
        </p>
        
        {/* Game Stats */}
        <div className="pmg-game-stats">
          <div className="pmg-stat-item">
            <strong>Moves: {moves}</strong>
          </div>
          <div className="pmg-stat-item">
            <strong>Revealed: {matchedPairs.size}/16</strong>
          </div>
        </div>

        {/* Win Message */}
        {gameWon && (
          <div className="pmg-win-message">
            <h2 className="pmg-win-title">
              🎉 Congratulations! 🎉
            </h2>
            <p className="pmg-win-text">
              {winCondition}
            </p>
          </div>
        )}

        {/* New Game Button */}
        <button
          onClick={initializeGame}
          className="pmg-new-game-btn"
        >
          🎮 New Game
        </button>
      </div>

      <button onClick={testFlip} style={{margin: '10px', padding: '10px'}}>
  🧪 Test Flip
</button>

      {/* Suit Legend */}
      <div className="pmg-suit-legend">
        <div className="pmg-legend-item pmg-hearts">♥ Hearts: Frontend Skills</div>
        <div className="pmg-legend-item pmg-diamonds">♦ Diamonds: Projects</div>
        <div className="pmg-legend-item pmg-clubs">♣ Clubs: Experience</div>
        <div className="pmg-legend-item pmg-spades">♠ Spades: Backend Skills</div>
      </div>

      {/* Game Instructions */}
      <div className="pmg-game-instructions">
        <h3 className="pmg-instructions-title">How to Win:</h3>
        <p className="pmg-instruction-item">🎯 <strong>Skill Hunt:</strong> Find a specific sought skill (like React.js)</p>
        <p className="pmg-instruction-item">🎯 <strong>Line Win:</strong> Arrange 4 revealed cards in a line (horizontal, vertical, or diagonal)</p>
        <p className="pmg-instruction-item">🧠 <strong>Master Win:</strong> Reveal all 16 skills and experiences</p>
      </div>

      {/* Game Board */}
      <div className="pmg-game-board">
        {gameBoard.map((card, index) => {
          const isFlipped = flippedCards.includes(index) || matchedPairs.has(index);
          const isMatched = matchedPairs.has(index);
          const suitClass = card.suit;
          
          return (
            <div
              key={`${card.suit}-${card.value}-${index}`}
              className={`pmg-card-container ${isMatched ? 'pmg-matched' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCardFlip(index);
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className={`pmg-card ${isFlipped ? 'pmg-flipped' : ''}`}>
                {/* Playing Card Front */}
                <div className={`pmg-card-face pmg-card-front pmg-${suitClass}`}>
                  <div className="pmg-card-corner pmg-top-left">
                    <div className="pmg-card-value">{getDisplayValue(card.value)}</div>
                    <div className="pmg-card-suit">{getSuitSymbol(card.suit)}</div>
                  </div>
                  
                  <div className="pmg-card-center">
                    {getSuitSymbol(card.suit)}
                  </div>
                  
                  <div className="pmg-card-corner pmg-bottom-right">
                    <div className="pmg-card-value">{getDisplayValue(card.value)}</div>
                    <div className="pmg-card-suit">{getSuitSymbol(card.suit)}</div>
                  </div>
                </div>
                
                {/* Skill/Experience Back */}
                <div className="pmg-card-face pmg-card-back">
                  <div className="pmg-skill-title">
                    {card.title}
                  </div>
                  <div className="pmg-skill-description">
                    {card.description}
                  </div>
                  <div className="pmg-skill-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`pmg-star ${i < card.skillLevel ? 'pmg-filled' : ''}`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Debug Info - Remove this in production */}
      <div style={{
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '10px',
        fontSize: '12px',
        borderRadius: '5px',
        zIndex: 9999
      }}>
        <div>Game Started: {gameStarted ? 'Yes' : 'No'}</div>
        <div>Game Won: {gameWon ? 'Yes' : 'No'}</div>
        <div>Flipped Cards: [{flippedCards.join(', ')}]</div>
        <div>Matched Cards: [{Array.from(matchedPairs).join(', ')}]</div>
        <div>Total Cards: {gameBoard.length}</div>
      </div>
    </div>
  );
};

export default PortfolioMemoryGame;