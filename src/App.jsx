import React from 'react';
import Row from './rows/Row';
import requests from './requests/requests';
import './App.scss';

const App = () => {
  return (
   	<div className="App">
			<Row 
				title="NETFLIX ORIGINALS" 
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow/>
			<Row 
				title="Trending Now" 
				fetchUrl={requests.fetchTrending}
				isLargeRow={false}/>
			<Row 
				title="Top Rated" 
				fetchUrl={requests.fetchTopRated}
				isLargeRow={false}/>
			<Row 
				title="Action Movies" 
				fetchUrl={requests.fetchActionMovies}
				isLargeRow={false}/>
			<Row 
				title="Comedy Movies" 
				fetchUrl={requests.fetchComedyMovies}
				isLargeRow={false}/>
			<Row 
				title="Horror Movies" 
				fetchUrl={requests.fetchHorrorMovies}
				isLargeRow={false}/>
			<Row 
				title="Romance Movies" 
				fetchUrl={requests.fetchRomanceMovies}
				isLargeRow={false}/>
			<Row 
				title="Documentaries" 
				fetchUrl={requests.fetchDocumentaries}
				isLargeRow={false}/>
   	</div>
  );
};

export default App;
