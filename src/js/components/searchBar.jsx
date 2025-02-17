import React from "react";
import SongList from "./songList";

const SearchBar = () => {

    // const [input,setInput] = useState([])

    // const handleInputChange = (e) =>{
    //     setInput(e.target.value)
    // };

    // const songFiltered = songs.filter(s => s.includes(input))

    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
            // onChange={handleInputChange}
            />
        </div>   
    )
}

export default SearchBar