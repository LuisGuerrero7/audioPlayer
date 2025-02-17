//fetch GET
//https://partner-content-api.epidemicsound.com/v0/genres
//DOCS OF API:
//https://developers.epidemicsound.com/docs/guides


const getSongs = async () => {
    const response = await fetch("https://playground.4geeks.com/sound/docs?_gl=1*1gwggm6*_gcl_au*ODgzNjEyOTY4LjE3Mzk4MDY3MzU.#/default/get_all_music_songs_get");
    if (response.ok) {
        const data = await response.json()
        return data
    }
    else {
        console.log("error: ", response.status, response.statusText)
        return {error: {status: response.status, statusText: response.statusText}}
    }
}
