import React from 'react';
import InsuranceCard from './InsuranceCard';
import CardDetails from './CardDetails';

const InsuranceCardGrid = ({ cards, selectedCard, onCardClick, insuranceDetails }) => {
  const cardRows = [];
  for (let i = 0; i < cards.length; i += 4) {
    cardRows.push(cards.slice(i, i + 4));
  }

  return (
    <div className="insurance-options" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {cardRows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            {row.map((card) => (
              <InsuranceCard 
                key={card.id} 
                card={card} 
                isSelected={selectedCard?.id === card.id}
                onClick={() => onCardClick(card)}
                monthlyPremium={insuranceDetails[card.id].monthlyPremium}
              />
            ))}
          </div>
          {selectedCard && row.some(card => card.id === selectedCard.id) && (
            <CardDetails 
              card={selectedCard} 
              details={insuranceDetails[selectedCard.id]} 
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InsuranceCardGrid;