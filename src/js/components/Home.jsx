import React from "react";

import SongList from "./songList";
import Control from "./control";
import SearchBar from "./searchBar";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            
			<SongList/>
			
			<Control/>

		</div>
	);
};

export default Home;