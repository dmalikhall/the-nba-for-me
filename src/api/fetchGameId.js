export const gameIdOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/games',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
};

export const fetchTheGameId = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.response
}