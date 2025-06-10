import React from 'react';
import './PlayingCard.css';

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
    >
      {/* Card Front */}
      <div className={`card-front ${getSuitColor(suit) === '#dc2626' ? 'suit-red' : 'suit-black'}`}>
        {/* Top corner */}
        <div className="card-corner">
          <div className="card-corner-value">{getCardValue(value)}</div>
          <div className="card-corner-suit">{getSuitSymbol(suit)}</div>
        </div>

        {/* Center content */}
        <div className="card-center">
          <div className="card-center-symbol">{getSuitSymbol(suit)}</div>
          <div className="card-center-theme">
            {getSuitTheme(suit)}
          </div>
        </div>

        {/* Bottom corner (rotated) */}
        <div className="card-corner bottom">
          <div className="card-corner-value">{getCardValue(value)}</div>
          <div className="card-corner-suit">{getSuitSymbol(suit)}</div>
        </div>
      </div>

      {/* Card Back - Portfolio Content */}
      <div className="card-back">
        <div className="card-back-content">
          <div className="card-back-title">
            {title}
          </div>
          <div className="card-back-description">
            {description}
          </div>
        </div>

        {/* Skill level indicator */}
        <div className="skill-level-container">
          <div className="skill-level-label">
            Skill Level
          </div>
          <div className="skill-level-stars">
            {[1,2,3,4,5].map(star => (
              <span 
                key={star}
                className={`skill-star ${star <= skillLevel ? 'filled' : 'empty'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="card-back-brand">
          Mondayp
        </div>
      </div>
    </div>
  );
};

export default PlayingCard;