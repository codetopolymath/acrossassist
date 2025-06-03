import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
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
        onChange={onSearchChange}
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
    </div>
  );
};

export default SearchBar;