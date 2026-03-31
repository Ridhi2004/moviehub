import React, { useEffect, useState } from "react";
import "./Movies.css"; 

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "c75f388fdcfba9aa613d3a24d3db027b"; 
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="movies-page">
      <h2>Movies 🍿</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <a
            key={movie.id}
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target='_blank'
            rel="noopener noreferrer"
            className='movie_card'
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </a>
            
          </div>
        ))}
      </div>
    </div>

  );
};

export default Movies;