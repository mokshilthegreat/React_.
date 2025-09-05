import React from 'react'

const Navbar = () => {
  return (
     <header className="navbar">
      <h1 className="logo">Crypto M5</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">News</a></li>
          <li><button className="start-btn">Get Started</button></li>
        </ul>
      </nav>
    </header>
  )
}



export default Navbar