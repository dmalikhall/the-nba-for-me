export const liveOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '61f055d106msh0016cffd9a93878p153bacjsnd78fe1c5ff03',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.response
}