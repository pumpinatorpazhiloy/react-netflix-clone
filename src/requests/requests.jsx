const _apiKey = "b1773a9b1d2e3dac5b505149588a916c";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${_apiKey}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${_apiKey}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${_apiKey}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${_apiKey}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${_apiKey}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${_apiKey}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${_apiKey}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${_apiKey}&with_genres=99`,
};

export default requests;