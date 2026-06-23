import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from '../pages/Home/Home'


export default function App() {
  const [theme,setTheme]=useState(()=>{
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(()=>{
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
      </Routes>
    </Router>
  )
}
