import './Hero.css'
import heroImage from '../../../assets/images/hero/banner_1.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src={heroImage} alt="Hotel Banner" className="hero-image" />
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Book With Best<br />Luxury Hotel</h1>
        <p className="hero-subtitle">Where Elegance Meets Extraordinary Service</p>
        <button className="hero-btn">Reserve Now</button>
      </div>
    </section>
  )
}
