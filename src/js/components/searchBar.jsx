import React, { useState } from "react";

const SearchBar = ({ songs, setFilteredSongs }) => {
    const [input, setInput] = useState(""); // Inicializar como un string

    const handleInputChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setInput(searchTerm);

        // Filtramos las canciones según el nombre
        const filtered = songs.filter(song => song.name.toLowerCase().includes(searchTerm));
        setFilteredSongs(filtered);
    };

    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
            <input 
                type="text" 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                value={input}
                onChange={handleInputChange}
            />
        </div>   
    );
};

export default SearchBar;
