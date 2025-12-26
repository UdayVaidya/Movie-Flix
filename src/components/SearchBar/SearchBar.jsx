import React from "react";
import "./SearchBar.css";
import MenuIcon from "../../assets/icons/MenuIcon";

const SearchBar = ({ query, setQuery, onMenuClick }) => {
  return (
    <div className="search-bar">
      {/* Mobile menu button */}
      <button className="menu-btn" onClick={onMenuClick}>
        <MenuIcon />
      </button>

      {/* Search input */}
      <div className="search">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="m29.43 25.39-6.9-6.9A10.86 10.86 0 0 0 24 13a11 11 0 1 0-5.5 9.52l6.91 6.9a2.06 2.06 0 0 0 1.48.59 3.18 3.18 0 0 0 2.17-1 2.6 2.6 0 0 0 .37-3.62z" />
        </svg>

        <input
          type="text"
          placeholder="Search for directors, films or actors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Profile section */}
      <div className="profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#dbdbdb"
            d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20h-5.611a4.502 4.502 0 0 1-8.777 0H2v-4.303l2-3V8Zm5.708 12a2.5 2.5 0 0 0 4.584 0H9.708ZM12 2a6 6 0 0 0-6 6v5.303l-2 3V18h16v-1.697l-2-3V8a6 6 0 0 0-6-6Z"
          />
        </svg>

        <div className="profile-image">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
