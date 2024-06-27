import React, { useState, useMemo, useCallback } from 'react';
import { Search, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { User, Bell, Shield, Briefcase } from 'lucide-react';
import PlanBenefits from '../policy/PlanBenefits';
import { insuranceDetails } from './insuranceData';
import { cardData } from './CardData';

const Dashboard = ({ isSidebarOpen }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('alphabetical');
  const [priceRange, setPriceRange] = useState(500);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(8);
  const [notifications, setNotifications] = useState(3);

  console.log('isSidebarOpen', isSidebarOpen);

  const handleCardClick = useCallback((card) => {
    setSelectedCard(prevCard => prevCard?.id === card.id ? null : card);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }, []);

  const handleSortChange = useCallback((e) => {
    setSortOption(e.target.value);
  }, []);

  const handlePriceRangeChange = useCallback((e) => {
    setPriceRange(Number(e.target.value));
  }, []);

  const handleCardsToShowChange = useCallback((e) => {
    setCardsToShow(Number(e.target.value));
  }, []);

  const filteredAndSortedCards = useMemo(() => {
    let result = cardData.filter(card => 
      card.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(card.category)) &&
      Number(insuranceDetails[card.id].monthlyPremium.replace('$', '')) <= priceRange
    );

    switch (sortOption) {
      case 'alphabetical':
        return result.sort((a, b) => a.label.localeCompare(b.label));
      case 'priceAsc':
        return result.sort((a, b) => 
          Number(insuranceDetails[a.id].monthlyPremium.replace('$', '')) - 
          Number(insuranceDetails[b.id].monthlyPremium.replace('$', ''))
        );
      case 'priceDesc':
        return result.sort((a, b) => 
          Number(insuranceDetails[b.id].monthlyPremium.replace('$', '')) - 
          Number(insuranceDetails[a.id].monthlyPremium.replace('$', ''))
        );
      default:
        return result;
    }
  }, [searchTerm, selectedCategories, sortOption, priceRange]);

  const limitedCards = useMemo(() => {
    return filteredAndSortedCards.slice(0, cardsToShow);
  }, [filteredAndSortedCards, cardsToShow]);

  const cardRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < limitedCards.length; i += 4) {
      rows.push(limitedCards.slice(i, i + 4));
    }
    return rows;
  }, [limitedCards]);

  const renderCardRow = useCallback((rowCards, rowIndex) => (
    <React.Fragment key={rowIndex}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {rowCards.map((card) => (
          <div 
            key={card.id}
            className={`insurance-card ${card.className}`} 
            style={{ 
              flex: '1 1 calc(25% - 20px)', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '20px', 
              borderRadius: '10px', 
              cursor: 'pointer', 
              transition: 'transform 0.3s, box-shadow 0.3s', 
              backgroundColor: card.backgroundColor,
              boxShadow: selectedCard?.id === card.id ? '0 0 10px rgba(0,0,0,0.2)' : 'none',
              transform: selectedCard?.id === card.id ? 'scale(1.05)' : 'scale(1)'
            }}
            onClick={() => handleCardClick(card)}
          >
            <div className="icon" style={{ fontSize: '40px', marginBottom: '10px' }}>{card.icon}</div>
            <div className="label" style={{ fontSize: '18px', color: '#333' }}>{card.label}</div>
            <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>{insuranceDetails[card.id].monthlyPremium}/month</div>
          </div>
        ))}
      </div>
      {selectedCard && rowCards.some(card => card.id === selectedCard.id) && (
        <div style={{ 
          margin: '0 20px 20px', 
          padding: '20px', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '10px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h2 style={{ fontSize: '24px', color: '#333' }}>{insuranceDetails[selectedCard.id].title}</h2>
          </div>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '15px' }}>{insuranceDetails[selectedCard.id].description}</p>
          <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Key Features:</h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
            {insuranceDetails[selectedCard.id].keyFeatures.map((feature, index) => (
              <li key={index} style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>{feature}</li>
            ))}
          </ul>
          <p style={{ fontSize: '16px', color: '#333', marginBottom: '5px' }}>
            <strong>Coverage Amount:</strong> {insuranceDetails[selectedCard.id].coverageAmount}
          </p>
          <p style={{ fontSize: '16px', color: '#333' }}>
            <strong>Monthly Premium:</strong> {insuranceDetails[selectedCard.id].monthlyPremium}
          </p>
        </div>
      )}
    </React.Fragment>
  ), [handleCardClick, selectedCard]);

  const categories = useMemo(() => [...new Set(cardData.map(card => card.category))], []);

  return (
    <div className="dashboard-container" style={{ display: 'flex', height: '100vh', marginBottom: '40px' }}>
      <div className="dashboard-content" style={{ flexGrow: 1, padding: '20px', marginBottom: '40px' }}>
        <div style={{
          backgroundColor: '#e6f7ff',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '30px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '28px', color: '#2c3e50', fontWeight: 'bold' }}>
              Welcome back, User!
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ position: 'relative', cursor: 'pointer' }}>
                <Bell size={24} color="#2c3e50" />
                {notifications > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px'
                  }}>
                    {notifications}
                  </span>
                )}
              </div>
              <User size={24} color="#2c3e50" style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
            <div style={{
              flex: 1,
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Shield size={30} color="#27ae60" />
              <div>
                <h3 style={{ margin: 0, color: '#2c3e50' }}>Active Policies</h3>
                <p style={{ margin: 0, color: '#27ae60', fontWeight: 'bold' }}>5</p>
              </div>
            </div>
            <div style={{
              flex: 1,
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Briefcase size={30} color="#3498db" />
              <div>
                <h3 style={{ margin: 0, color: '#2c3e50' }}>Total Coverage</h3>
                <p style={{ margin: 0, color: '#3498db', fontWeight: 'bold' }}>$1,250,000</p>
              </div>
            </div>
          </div>
          <button style={{
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            alignSelf: 'flex-start'
          }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#27ae60'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2ecc71'}>
            Explore New Policies
          </button>
        </div>
        <div style={{ 
          backgroundColor: '#f0f2f5', 
          padding: '20px', 
          borderRadius: '10px', 
          marginBottom: '20px'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '15px'
          }}>
            <Search size={20} style={{ marginRight: '10px', color: '#666' }} />
            <input
              type="text"
              placeholder="Search insurance..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px'
              }}
            />
            <select 
              value={sortOption} 
              onChange={handleSortChange}
              style={{
                marginLeft: '10px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px',
                backgroundColor: 'white'
              }}
            >
              <option value="alphabetical">Sort: A-Z</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              style={{
                marginLeft: '10px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                background: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <SlidersHorizontal size={20} style={{ marginRight: '5px', color: '#666' }} />
              {isFilterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          {isFilterOpen && (
            <>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontSize: '16px', color: '#333' }}>Filter by Category:</span>
                {categories.map(category => (
                  <label key={category} style={{ marginLeft: '10px', userSelect: 'none' }}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      style={{ marginRight: '5px' }}
                    />
                    {category}
                  </label>
                ))}
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '16px', color: '#333', display: 'block', marginBottom: '5px' }}>
                  Max Monthly Premium: ${priceRange}
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange}
                  onChange={handlePriceRangeChange}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label style={{ fontSize: '16px', color: '#333', marginRight: '10px' }}>
                  Cards to show:
                </label>
                <input
                  type="number"
                  min="1"
                  max={filteredAndSortedCards.length}
                  value={cardsToShow}
                  onChange={handleCardsToShowChange}
                  style={{
                    width: '60px',
                    padding: '5px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                  }}
                />
                <span style={{ marginLeft: '10px', fontSize: '14px', color: '#666' }}>
                  of {filteredAndSortedCards.length} available
                </span>
              </div>
            </>
          )}
        </div>

        <div className="insurance-options" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cardRows.map((row, index) => renderCardRow(row, index))}
        </div>
        
        <div style={{ margin: '20px', padding: '20px' }}>
          <PlanBenefits />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;