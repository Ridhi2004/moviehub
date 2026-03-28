import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Trending from './Trending';
import Popular from './Popular';
import TopRated from './TopRated';
import Footer from './Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  )
}

export default App

