import { useState,useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  FiBriefcase,
  FiChevronRight,
  FiFacebook,
  FiHome,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiTwitter,
  FiUser,
  FiX,
  FiYoutube
} from 'react-icons/fi'
import { FaBed } from 'react-icons/fa'

import { motion } from 'framer-motion'

import ThemeToggle from '../../common/ThemeToggle/ThemeToggle'

import './Navbar.css'

function GrandeurCrest() {
  return (
    <svg className="drawer-crest" viewBox="0 0 120 132" aria-hidden="true">
      <defs>
        <linearGradient id="crestGold" x1="22" y1="10" x2="104" y2="119" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f7df89" />
          <stop offset="0.48" stopColor="#d4af37" />
          <stop offset="1" stopColor="#9c7824" />
        </linearGradient>
      </defs>
      <path className="crest-crown" d="M31 23l12 10 17-22 17 22 12-10 5 28H26l5-28z" />
      <path className="crest-shield" d="M60 30c16 10 30 12 43 13v35c0 24-16 42-43 52-27-10-43-28-43-52V43c13-1 27-3 43-13z" />
      <path className="crest-inner" d="M60 43c12 7 22 9 32 10v25c0 17-11 30-32 39-21-9-32-22-32-39V53c10-1 20-3 32-10z" />
      <path className="crest-flourish left" d="M22 68c-10 5-14 15-10 25 6-7 13-10 22-9" />
      <path className="crest-flourish right" d="M98 68c10 5 14 15 10 25-6-7-13-10-22-9" />
      <text x="60" y="88" textAnchor="middle" className="crest-letter">G</text>
    </svg>
  )
}

export default function Navbar({ theme,toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection,setActiveSection]=useState('home')
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)
  const navItems = [
    { label:'Home', to:'/', section:'home', icon:FiHome },
    { label:'Rooms', to:'/#rooms', section:'rooms', icon:FaBed },
    { label:'About', to:'/about', section:'about', icon:FiUser },
    { label:'Services', to:'/#services', section:'services', icon:FiBriefcase },
    { label:'Contact', to:'/', section:'contact', icon:FiMail }
  ]
  useEffect(()=>{

if (location.pathname === '/about') {
setActiveSection('about')
return undefined
}

if (location.pathname === '/contact') {
setActiveSection('contact')
return undefined
}

if (location.pathname === '/grandeur') {
setActiveSection('contact')
return undefined
}

const sections=document.querySelectorAll('section[id]')

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

setActiveSection(entry.target.id)

}

})

},

{

threshold:0.4

}

)

sections.forEach(section=>

observer.observe(section)

)

return ()=>observer.disconnect()

},[location.pathname])

 return (

<motion.nav

className="navbar"

initial={{

opacity:0,

y:-80

}}

animate={{

opacity:1,

y:0

}}

transition={{

duration:0.8,

ease:'easeOut'

}}

>

<div className="navbar-container">

{/* Logo */}

<Link to="/" className="navbar-logo" aria-label="Grandeur contact page">

<span className="navbar-logo-title">GRANDEUR</span>

<span className="navbar-logo-subtitle">LUXURY HOTEL</span>

</Link>

<button

className="navbar-toggle"

type="button"

aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}

aria-expanded={isMenuOpen}

onClick={()=>setIsMenuOpen(current=>!current)}

>

<FiMenu />

</button>

<div

className={`navbar-overlay${isMenuOpen ? ' is-open' : ''}`}

onClick={closeMenu}

aria-hidden="true"

></div>

<div
  className={`navbar-links${isMenuOpen ? ' is-open' : ''}`}
  role="dialog"
  aria-modal="true"
  aria-label="Mobile navigation"
>

<button
  className="drawer-close"
  type="button"
  aria-label="Close menu"
  onClick={closeMenu}
>
  <FiX />
</button>

<div className="drawer-logo-section">
  <GrandeurCrest />
  <div className="drawer-logo-title">GRANDEUR</div>
  <div className="drawer-logo-subtitle">LUXURY HOTEL</div>
</div>

<ul className="navbar-menu-list">

{navItems.map(item=>{
  const Icon = item.icon
  const isActive = activeSection===item.section
  return (
    <li key={item.label}>
      <Link

        to={item.to}

        className={isActive ? 'active-link' : ''}

        onClick={closeMenu}

      >

        <Icon className="nav-item-icon" />

        <span className="nav-item-label">{item.label}</span>

        <FiChevronRight className="nav-item-chevron" />

      </Link>
    </li>
  )
})}

</ul>

<div className="drawer-actions">
  <button className="drawer-primary-btn" type="button">BOOK NOW</button>
  <button className="drawer-secondary-btn" type="button">VIEW RESERVATION</button>
</div>

<div className="drawer-contact-card">
  <div className="drawer-contact-row">
    <FiPhone />
    <span>+1 (555) 123-4567</span>
  </div>
  <div className="drawer-contact-row">
    <FiMapPin />
    <span>123 Luxury Avenue, New York</span>
  </div>
  <div className="drawer-contact-row">
    <FiMail />
    <span>info@grandeurhotel.com</span>
  </div>
  <div className="drawer-socials" aria-label="Social links">
    <a href="#" aria-label="Facebook"><FiFacebook /></a>
    <a href="#" aria-label="Instagram"><FiInstagram /></a>
    <a href="#" aria-label="Twitter X"><FiTwitter /></a>
    <a href="#" aria-label="YouTube"><FiYoutube /></a>
  </div>
</div>

</div>

<ThemeToggle theme={theme} toggleTheme={toggleTheme} />

<button className="navbar-btn">

Book Now

</button>

</div>

</motion.nav>

)
}
