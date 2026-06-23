import { FaMoon, FaSun } from 'react-icons/fa'
import './ThemeToggle.css'

export default function ThemeToggle({ theme,toggleTheme }) {
  const isLight=theme==='light'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={toggleTheme}
    >
      {isLight ? <FaMoon /> : <FaSun />}
    </button>
  )
}
