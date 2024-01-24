import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    width: "200px",
                    marginRight: "10px",
                    borderRadius: "10px", // Add this line for border-radius
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Search
            </button>
        </div>
    );


}

export default SearchBar;
