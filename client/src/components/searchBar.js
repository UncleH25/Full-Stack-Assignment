import React from 'react';
import '../styles/searchBar.css';

function SearchBar({ setSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;