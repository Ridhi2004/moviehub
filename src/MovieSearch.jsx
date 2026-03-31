
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const API_KEY = "c75f388fdcfba9aa613d3a24d3db027b";

  useEffect(() => {
    if (searchQuery === "") {
      setMovies([]);
      return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then(res => res.json())
      .then(data => setMovies(data.results || []))
      .catch(err => console.log(err));
  }, [searchQuery]);

  return (
    <div>
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        movies={movies}
      />
    </div>
  );
};

export default MovieSearch;
