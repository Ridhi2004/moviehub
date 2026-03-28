import React, { useEffect, useRef, useState } from 'react';


const Popular = () => {
    const[movies,setMovies]=useState([])
    const carouselRef=useRef(null);
   
    useEffect(()=>{
        const API_KEY="c75f388fdcfba9aa613d3a24d3db027b";
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((res)=>res.json())
        .then((data)=>setMovies(data.results))
    },[])

    const scroll=(direction)=>{
        const container=carouselRef.current;
        const scrollAmount=1320;
        if(direction==='left'){
            container.scrollLeft -= scrollAmount;
        }
        else{
            container.scrollRef += scrollAmount;
        }
    }
  return (
    <div className='row'>
        <h2>Popular 🌟
            <div className='carousel_buttons'>
                <button className='carousel_button left' onClick={()=>scroll('left')}>‹</button>
                <button className='carousel_button right' onClick={()=>scroll('right')}>›</button>
            </div>
        </h2>
        <div className='movies_container'>
            {movies.map((movie)=>(
            <a key= {movie.id }href={`https://www.themoviedb.org/movie/${movie.id}`}
            target='_blank'
            rel='noopener noreferrer'
            className='movie_card'
            >
            <img 
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
             alt={movie.original_title} 
             className='movie_poster'
             />
            <div className="movie_details">
              <h3 className='movie_details_heading'>{movie.original_title}</h3>
              <div className="movie_date_rate">
                <p>{movie.release_date}</p>
                <p>⭐{movie.vote_average}</p>
              </div>
              <p className='movie_description'>{movie.overview.slice(0, 100) + "..."}</p>
            </div>
            </a>

            ))}


        </div>
      
    </div>
  )
}

export default Popular
