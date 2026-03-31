import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieSearch from './MovieSearch';
import Hero from './Hero';
import Trending from './Trending';
import Popular from './Popular';
import TopRated from './TopRated';
import Footer from './Footer';
import Movies from './Movies';
import Shows from "./Shows";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <MovieSearch />
              <Hero />
              <Trending />
              <Popular />
              <TopRated />
              <Footer />
            </div>
          } 
        />
        <Route path="/movies" element={<Movies />} />
         <Route path="/shows" element={<Shows />} />
      </Routes>
    </Router>
  );
};

export default App;

