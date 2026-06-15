import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h1>GRANDEUR</h1>
        </div>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`navbar-overlay${isMenuOpen ? ' is-open' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>

        {/* Navigation Links */}
        <ul className={`navbar-links${isMenuOpen ? ' is-open' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#rooms" onClick={closeMenu}>Rooms</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Book Now Button */}
        <button className="navbar-btn">Book Now</button>
      </div>
    </nav>
  )
}
