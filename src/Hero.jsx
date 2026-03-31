import React, { useEffect, useState } from 'react'
import './Hero.css'


const Hero = () => {
   const [movies, setMovies] = useState([])
   const [currentIndex, setCurrentIndex] = useState(0)
 
   const API_KEY="c75f388fdcfba9aa613d3a24d3db027b"

   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then((response)=>response.json())
    .then((data=>{
        console.log(data.results);
        setMovies(data.results.slice(0,7))}
    ))
    .catch((error)=>{
        console.log("Error:",error)
    })
   },[])

 useEffect(()=>{
  const interval=setInterval(()=>{
    setCurrentIndex(prevIndex=>{
      if(movies.length > 0){
        return(prevIndex+1)%movies.length
      }
      else{
        return 0
      }
    })
  },4000)
    return ()=>clearInterval(interval)
 },[movies])

  
  const movie = movies[currentIndex] || {
  title: "Loading...",
  release_date: "----",
  vote_average: "--",
  overview: "Loading movie...",
  backdrop_path: null
}
return (
  <div 
    className='hero-section'
    style={{
      backgroundImage: movie.backdrop_path
        ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`
        : 'black'
    }}
  >
    <div className='hero-details'>
      <div className='inline'>
        <span className='feature'>FEATURED</span>
        <span className='rate'> ⭐{movie.vote_average}</span>
        <span className='date'>📅{movie.release_date}</span>
      </div>

      <h1 className='title'>{movie.title}</h1>

      <p className='description'>
        {movie.overview 
          ? movie.overview.slice(0,150) + "..." 
          : "No description"}
      </p>

      <div className='watch'>
        <a href="" className='watchnow'>Watch Now ▶</a>
        <a href="" className='watchlist'>Add to WatchList </a>
      </div>
    </div>
  </div>
)
}

export default Hero

