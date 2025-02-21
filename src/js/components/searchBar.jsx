import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const SearchBar = ({ songs, setFilteredSongs }) => {
    const [input, setInput] = useState(""); // Estado para la entrada del usuario
    const debounceText = useDebounce(input, 1000); // Aplicamos debounce al input

    const handleInputChange = (e) => {
        setInput(e.target.value.toLowerCase());
    };

    // Filtramos cuando debounceText cambia
    useEffect(() => {
        const filtered = songs.filter(song => song.name.toLowerCase().includes(debounceText));
        setFilteredSongs(filtered);
    }, [debounceText, songs, setFilteredSongs]);

    return (
        <div className="input-group mb-3 pb-3">
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
