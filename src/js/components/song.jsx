import React from "react";

const Song = ({ song, index }) => {

    const audioUrl = `https://playground.4geeks.com${song.url}`

    return (
        <div className="container bg-dark border-bottom border-success rounded">
            <div className="d-flex text-center justify-content-between p-2 m-2 text-light">
                <div className="col-2">{index + 1}</div>
                <div className="col-6">{song.name}</div>
                <audio controls className="col-4">
                    <source src={audioUrl} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};



export default Song;
