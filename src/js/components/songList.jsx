import React from "react";
import Song from "./song";

const SongList = () => {
    return (
        <div className="container">
            <h1 className="p-3 m-3">My Songs</h1>
            <div className="list-group">
                <Song></Song>
                <Song></Song>
                <Song></Song>
            </div>
            
        </div>

    )
}

export default SongList