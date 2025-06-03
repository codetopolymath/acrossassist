import React from 'react';
import { SlidersHorizontal, ChevronUp, ChevronDown } from 'lucide-react';

const FilterSection = ({ 
  isOpen, 
  onToggle, 
  sortOption, 
  onSortChange, 
  categories, 
  selectedCategories, 
  onCategoryChange, 
  priceRange, 
  onPriceRangeChange,
  cardsToShow,
  onCardsToShowChange,
  totalCards
}) => {
  return (
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
        <select 
          value={sortOption} 
          onChange={onSortChange}
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
          onClick={onToggle}
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
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isOpen && (
        <>
          <div style={{ marginBottom: '15px' }}>
            <span style={{ fontSize: '16px', color: '#333' }}>Filter by Category:</span>
            {categories.map(category => (
              <label key={category} style={{ marginLeft: '10px', userSelect: 'none' }}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
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
              onChange={onPriceRangeChange}
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
              max={totalCards}
              value={cardsToShow}
              onChange={onCardsToShowChange}
              style={{
                width: '60px',
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px'
              }}
            />
            <span style={{ marginLeft: '10px', fontSize: '14px', color: '#666' }}>
              of {totalCards} available
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterSection;