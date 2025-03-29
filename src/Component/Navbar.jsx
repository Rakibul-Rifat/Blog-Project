import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  // State to handle the toggling of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <div >

     <nav className='header'>
      <div className="navbar">
      <div className="logo">
        <img className='brandLogo' src='https://noteroom.co/assets/android-chrome-192x192.png'/>
        <h3>NoteRoom</h3> 
      </div>
    
      {/* Hamburger icon for mobile view */}
      <button className="navbar-toggler" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"><i class='bx bx-menu'></i></span>
      </button>

      {/* Navbar menu */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/Blog">Support</a></li>
        <li><a href="/Blog">About</a></li>
        <li><a href="/Blog">join Team</a></li>
        <li><a href="/Blog">Blog</a></li>
        <li><a href="/Blog"><button className='signInbtn D-None'>Create account</button></a></li>
        <li><a href="/Blog"><button className='LogInbtn D-None'>Log in</button></a></li>
      </ul>
<div class='loginSignInbtn'>
<button className='signInbtn'>Create account</button>
<button className='LogInbtn'>Log in</button>
</div>


      </div>
    </nav>



   </div>
  );
};

export default Navbar;