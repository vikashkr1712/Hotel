import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import Home from '../pages/Home/Home'
import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'


export default function App() {
  const [theme,setTheme]=useState(()=>{
    return localStorage.getItem('theme') || 'dark'
  })

  useLayoutEffect(()=>{
    document.body.classList.toggle('light-mode',theme==='light')
    localStorage.setItem('theme',theme)
  },[theme])

  const toggleTheme=()=>{
    setTheme(current=>current==='dark' ? 'light' : 'dark')
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/about" element={<AboutPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/contact" element={<ContactPage theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  )
}
