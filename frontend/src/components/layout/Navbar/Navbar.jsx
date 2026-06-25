import { useState,useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FaBars, FaTimes } from 'react-icons/fa'

import { motion } from 'framer-motion'

import ThemeToggle from '../../common/ThemeToggle/ThemeToggle'

import './Navbar.css'

export default function Navbar({ theme,toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection,setActiveSection]=useState('home')
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)
  useEffect(()=>{

if (location.pathname === '/about') {
setActiveSection('about')
return undefined
}

if (location.pathname === '/contact') {
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

duration:0.8

}}

>

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

onClick={()=>setIsMenuOpen(current=>!current)}

>

{isMenuOpen ? <FaTimes /> : <FaBars />}

</button>

<div

className={`navbar-overlay${isMenuOpen ? ' is-open' : ''}`}

onClick={closeMenu}

aria-hidden="true"

></div>

<ul className={`navbar-links${isMenuOpen ? ' is-open' : ''}`}>

<li>

<Link

to="/"

className={

activeSection==='home'

? 'active-link'

: ''

}

onClick={closeMenu}

>

Home

</Link>

</li>

<li>

<Link

to="/#rooms"

className={

activeSection==='rooms'

? 'active-link'

: ''

}

onClick={closeMenu}

>

Rooms

</Link>

</li>

<li>

<Link

to="/about"

className={

activeSection==='about'

? 'active-link'

: ''

}

onClick={closeMenu}

>

About

</Link>

</li>

<li>

<Link

to="/#services"

className={

activeSection==='services'

? 'active-link'

: ''

}

onClick={closeMenu}

>

Services

</Link>

</li>

<li>

<Link

to="/contact"

className={

activeSection==='contact'

? 'active-link'

: ''

}

onClick={closeMenu}

>

Contact

</Link>

</li>

</ul>

<ThemeToggle theme={theme} toggleTheme={toggleTheme} />

<button className="navbar-btn">

Book Now

</button>

</div>

</motion.nav>

)
}
