import React from 'react';
import '../styles/searchBar.css';

/**
 * This component renders a search bar that allows the user to filter tasks by title.
 * It takes a setSearch function as a prop, which is called whenever the user types something in the search bar.
 * The setSearch function is expected to update the state of the parent component with the new search query.
 */
function SearchBar({ setSearch }) {
  return (
    <div className="search-bar">
      {/* This input field allows the user to type in a search query */}
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => {
          /* When the user types something, call the setSearch function with the new search query */
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
