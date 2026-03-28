import React, { useState } from 'react'
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className='navbar'>

            <div className='nav-left'>
                <a href="/" className='logo'>
                    🎬 <span className='name'>Movie</span><span>Hub</span>
                </a>
            </div>

            <div className='nav-center'>
                <a href="/Home" className='nav-link'>
                    Home
                </a>
                <a href="/Home" className='nav-link'>
                    Shows
                </a>
                <a href="/Home" className='nav-link'>
                    Movies
                </a>
                <a href="/Home" className='nav-link'>
                    Games
                </a>
                <a href="/trending" className='nav-link'>
                    Trending
                </a>
                <a href="/top-rated" className='nav-link'>
                    Top Rated
                </a>
                <a href="/Home" className='nav-link'>
                    Browse by languages
                </a>
            </div>

            <div className='nav-right'>
                <input type="text" placeholder='Search...' />

            </div>
        </nav>

    )
}

export default Navbar

