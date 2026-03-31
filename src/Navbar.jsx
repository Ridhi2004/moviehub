import './Navbar.css';

const Navbar = ({ searchQuery, setSearchQuery, movies }) => {
  return (
    <nav className='navbar'>

      <div className='nav-left'>
        <a href="/" className='logo'>
          🎬 <span className='name'>Movie</span><span>Hub</span>
        </a>
      </div>

      <div className='nav-center'>
        <a href="/" className='nav-link'>Home</a>
        <a href="/Movies" className='nav-link'>Movies</a>
        <a href="/Shows" className='nav-link'>Shows</a>
        <a href="/Home" className='nav-link'>Genre</a>
        <a href="/" className='nav-link'>Trending</a>
        <a href="/" className='nav-link'>Top Rated</a>
      </div>

      <div className='nav-right'>

        <div className='search-container'>
          <input 
            type="text" 
            placeholder='Search...'
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
          />

          {movies.length > 0 && (
            <div className="search-dropdown">
              {movies.map(movie => (
                <div key={movie.id} className="search-item">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                        : 'https://via.placeholder.com/50x75'
                    }
                    alt={movie.title}
                  />
                  <div>
                    <h4>{movie.title}</h4>
                    <p>{movie.release_date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
        

      </div>

    </nav>
  );
};

export default Navbar;