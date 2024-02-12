import React, {useState, useEffect} from "react";
import axios from "../axios" //instance

import "./Row.scss"

const Row = ({title, fetchUrl, isLargeRow}) => {

	const [movies, setMovies] = useState([]);

	const _baseUrl = "https://image.tmdb.org/t/p/original/";

	const fetchData = async () => {
		const request = await axios.get(fetchUrl);
		setMovies(request.data.results);
		return request;
	};

	const renderMovies = () => {
		return movies.map((movie) => {
         return (
            <div className="row__poster" key={movie.id}>
               <img 
						className={`row__poster_img ${isLargeRow && "row__poster_large"}`} 
						src={`${_baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}  
						alt={movie.title} />
            </div>
         );
      });
	};

	useEffect(() => {
		fetchData();
	}, [fetchUrl]);

	return(
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{renderMovies()}
			</div>
		</div>
	);
}

export default Row;