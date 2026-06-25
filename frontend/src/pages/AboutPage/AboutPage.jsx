import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import { motion } from 'framer-motion'
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

const viewport = { once: true, amount: 0.2 }

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' }
  }
}

const heroImageReveal = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const heroTitleReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.2, ease: 'easeOut' }
  }
}

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: 'easeOut' }
  }
}

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: 'easeOut'
    }
  })
}

export default function AboutPage({ theme, toggleTheme }) {
  return (
    <div className="about-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="page-hero about-page-hero" id="about">
        <motion.img
          src={heroImage}
          alt=""
          className="page-hero-image"
          variants={heroImageReveal}
          initial="hidden"
          animate="visible"
        />
        <div className="page-hero-overlay"></div>
        <motion.h1
          variants={heroTitleReveal}
          initial="hidden"
          animate="visible"
        >
          About Us
        </motion.h1>
      </section>

      <motion.section
        className="heritage-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="heritage-inner">
          <motion.div className="heritage-media" variants={imageReveal}>
            <img src={heritageImage} alt="Luxury hotel bedroom" />
          </motion.div>
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
      </motion.section>

      <motion.section
        className="story-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
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
          <motion.div className="story-media" variants={imageReveal}>
            <img src={storyImage} alt="Sunlit hotel room" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="infrastructure-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="infrastructure-inner">
          <h2>Our Infrastructure</h2>
          <div className="infrastructure-grid">
            {infrastructureCards.map((card, index) => (
              <motion.article
                className="infrastructure-card"
                key={card.title}
                custom={index}
                variants={cardReveal}
              >
                <img src={card.image} alt={card.title} />
                <div className="card-shade"></div>
                <div className="card-copy">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
