import React from 'react';
import './DeckCard.css';

// Deck Card Component for the animated cards
const DeckCard = ({ suit, value, isJoker = false, jokerColor = 'red', index, isSpread, onClick }) => {
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
    return value.toString();
  };

  // Calculate position and rotation for spread animation
  const getCardTransform = () => {
    if (!isSpread) {
      // Stacked position with slight offset
      return `translateX(${index * 2}px) translateY(${index * -2}px) rotate(${index * 2}deg)`;
    } else {
      // Semi-circular spread
      const angle = (index - 2.5) * 25; // Spread from -62.5° to +62.5°
      const radius = 180;
      const x = Math.sin((angle * Math.PI) / 180) * radius;
      const y = Math.cos((angle * Math.PI) / 180) * radius - radius;
      return `translateX(${x}px) translateY(${y}px) rotate(${angle}deg)`;
    }
  };

  return (
    <div 
      className={`deck-card ${isSpread ? 'spread' : 'stacked'} ${isJoker ? `joker-${jokerColor}` : ''}`}
      onClick={onClick}
      style={{
        transform: getCardTransform(),
        zIndex: isSpread ? 10 + index : 6 - index,
      }}
    >
      <div className={`deck-card-inner ${isJoker ? (jokerColor === 'red' ? 'deck-card-red' : 'deck-card-black') : (getSuitColor(suit) === '#dc2626' ? 'deck-card-red' : 'deck-card-black')}`}>
        {isJoker ? (
          <>
            {/* Joker Design */}
            <div className="deck-card-corner">
              <div className="deck-card-corner-value">J</div>
              <div className="deck-card-corner-joker">🃏</div>
            </div>
            <div className="deck-card-center">
              <div className="deck-card-center-joker">
                🃏
                <div className="deck-card-joker-label">JOKER</div>
              </div>
            </div>
            <div className="deck-card-corner bottom">
              <div className="deck-card-corner-value">J</div>
              <div className="deck-card-corner-joker">🃏</div>
            </div>
          </>
        ) : (
          <>
            {/* Ace Design */}
            <div className="deck-card-corner">
              <div className="deck-card-corner-value">{getCardValue(value)}</div>
              <div className="deck-card-corner-suit">{getSuitSymbol(suit)}</div>
            </div>
            <div className="deck-card-center">
              <div className="deck-card-center-symbol">
                {getSuitSymbol(suit)}
              </div>
            </div>
            <div className="deck-card-corner bottom">
              <div className="deck-card-corner-value">{getCardValue(value)}</div>
              <div className="deck-card-corner-suit">{getSuitSymbol(suit)}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DeckCard;