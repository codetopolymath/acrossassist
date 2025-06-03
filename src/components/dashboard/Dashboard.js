import React, { useState, useMemo, useCallback } from 'react';
import WelcomeSection from './subcomponents/WelcomeSection';
import SearchBar from './subcomponents/SearchBar';
import FilterSection from './subcomponents/FilterSection';
import InsuranceCardGrid from './subcomponents/InsuranceCardGrid';
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

  const categories = useMemo(() => [...new Set(cardData.map(card => card.category))], []);

  return (
    <div className="dashboard-container" style={{ display: 'flex', height: '100vh', marginBottom: '40px' }}>
      <div className="dashboard-content" style={{ flexGrow: 1, padding: '20px', marginBottom: '40px' }}>
        <WelcomeSection 
          username="User"
          notifications={notifications}
          activePolicies={5}
          totalCoverage={1250000}
        />
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        
        <FilterSection 
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
          sortOption={sortOption}
          onSortChange={handleSortChange}
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceRangeChange={handlePriceRangeChange}
          cardsToShow={cardsToShow}
          onCardsToShowChange={handleCardsToShowChange}
          totalCards={filteredAndSortedCards.length}
        />

        <InsuranceCardGrid 
          cards={limitedCards}
          selectedCard={selectedCard}
          onCardClick={handleCardClick}
          insuranceDetails={insuranceDetails}
        />
        
        <div style={{ margin: '20px', padding: '20px' }}>
          <PlanBenefits />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;