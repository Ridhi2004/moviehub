import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
 
      <footer className='footer'>
        <div className='footer_content'>
            <h2>MovieApp 🎬</h2>
            <p>Made with using TMDB API</p>
            <div className='footer_links'>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Privacy</a>
            </div>
            <p className='copyright'>© 2026 MovieApp. All rights reserved.</p>
        </div>
      </footer>
   
  )
}

export default Footer
