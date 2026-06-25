import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import './AboutPage.css'

import heroImage from '../../assets/images/about_us_page/1st_image.png'
import heritageImage from '../../assets/images/about_us_page/2nd_image.png'
import storyImage from '../../assets/images/about_us_page/3rd_image.png'
import suiteImage from '../../assets/images/about_us_page/about_us_card_1.png'
import poolImage from '../../assets/images/about_us_page/about_us_card_2.png'
import restaurantImage from '../../assets/images/about_us_page/about_us_card_3.png'
import spaImage from '../../assets/images/about_us_page/about_us_card_4.png'
import oceanImage from '../../assets/images/about_us_page/about_us_card_5.png'
import ballroomImage from '../../assets/images/about_us_page/about_us_card_6.png'

const infrastructureCards = [
  {
    title: 'Presidential Suite',
    subtitle: 'Exclusive luxury with city views',
    image: suiteImage
  },
  {
    title: 'Infinity Pool',
    subtitle: 'Panoramic ocean views',
    image: poolImage
  },
  {
    title: 'Le Jardin Restaurant',
    subtitle: 'Michelin-starred dining experience',
    image: restaurantImage
  },
  {
    title: 'The Royal Spa',
    subtitle: 'Ultimate relaxation sanctuary',
    image: spaImage
  },
  {
    title: 'Ocean View Suite',
    subtitle: 'Premium comfort meets seaside elegance',
    image: oceanImage
  },
  {
    title: 'Grand Ballroom',
    subtitle: 'Timeless elegance for special occasions',
    image: ballroomImage
  }
]

export default function AboutPage({ theme, toggleTheme }) {
  return (
    <div className="about-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="page-hero about-page-hero" id="about">
        <img src={heroImage} alt="" className="page-hero-image" />
        <div className="page-hero-overlay"></div>
        <h1>About Us</h1>
      </section>

      <section className="heritage-section">
        <div className="heritage-inner">
          <div className="heritage-media">
            <img src={heritageImage} alt="Luxury hotel bedroom" />
          </div>
          <div className="heritage-copy">
            <span className="section-label">About grandeur</span>
            <h2>A Heritage of Excellence</h2>
            <div className="mobile-section-media">
              <img src={heritageImage} alt="Luxury hotel bedroom" />
            </div>
            <p>
              Since 1925, The Grand Haven has set the standard for luxury hospitality.
              Our commitment to excellence has created unforgettable moments for
              generations of distinguished guests.
            </p>
            <p>
              Each room and suite is a testament to our dedication to luxury and comfort,
              while our exceptional service ensures every stay is nothing short of
              extraordinary.
            </p>
            <a className="gold-button" href="/contact">Discover More <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="story-inner">
          <div className="story-copy">
            <span className="section-label light">Our Story</span>
            <h2>The Grandeur Story</h2>
            <div className="mobile-section-media">
              <img src={storyImage} alt="Sunlit hotel room" />
            </div>
            <p>
              Since 1925, The Grand Haven has set the standard for luxury hospitality.
              Our commitment to excellence has created unforgettable moments for
              generations of distinguished guests.
            </p>
            <p>
              Each room and suite is a testament to our dedication to luxury and comfort,
              while our exceptional service ensures every stay is nothing short of
              extraordinary.
            </p>
            <a className="gold-button" href="/about">Read More <span>↗</span></a>
          </div>
          <div className="story-media">
            <img src={storyImage} alt="Sunlit hotel room" />
          </div>
        </div>
      </section>

      <section className="infrastructure-section">
        <div className="infrastructure-inner">
          <h2>Our Infrastructure</h2>
          <div className="infrastructure-grid">
            {infrastructureCards.map((card) => (
              <article className="infrastructure-card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="card-shade"></div>
                <div className="card-copy">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
