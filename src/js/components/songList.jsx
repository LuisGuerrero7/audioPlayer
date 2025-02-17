import React, { useEffect, useState } from "react";
import Song from "./song";
import SearchBar from "./searchBar";

const SongList = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getSongsFromAPI = async () => {
            try {
                const response = await fetch("https://playground.4geeks.com/sound/songs");
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}, ${response.statusText}`);
                }
                const data = await response.json();
                setSongs(data.songs); // Guardamos las canciones en el estado
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        getSongsFromAPI();
    }, []);

    return (
        <div className="container">
            <h1 className="p-3 m-3">My Songs</h1>
            <SearchBar />
            <div className="list-group">
                {songs.length > 0 ? (
                    songs.map((song, index) => <Song key={song.id} song={song} index={index} />)
                ) : (
                    <p className="text-center">Loading songs...</p>
                )}
            </div>
        </div>
    );
};

export default SongList;
