import React, { useState, useEffect } from 'react';
import './Movies.css';

const Shows = () => {
  const [shows, setShows] = useState([]);
  const API_KEY = "c75f388fdcfba9aa613d3a24d3db027b";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => setShows(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="movies-page">
      <h2>TV Shows 📺</h2>
      <div className="movies-grid">
        {shows.map(show => (
          <div key={show.id} className="movie-card">
            <a
              href={`https://www.themoviedb.org/tv/${show.id}`}
              target='_blank'
              rel="noopener noreferrer"
              className='movie_card'
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
              <h3>{show.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shows;