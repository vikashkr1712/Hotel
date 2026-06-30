import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaBed,
  FaBriefcase,
  FaCar,
  FaConciergeBell,
  FaDumbbell,
  FaSpa,
  FaSwimmingPool,
  FaUtensils
} from 'react-icons/fa'

import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import './ServicesPage.css'

import luxuryRoomImage from '../../assets/images/services/luxury_room.png'
import fineDiningImage from '../../assets/images/services/fine_dining.png'
import spaImage from '../../assets/images/services/luxury_spa.png'
import airportTransferImage from '../../assets/images/services/airport_tansfer.png'
import conciergeImage from '../../assets/images/services/24concierge.png'
import infinityPoolImage from '../../assets/images/services/infinity_pool.png'
import businessImage from '../../assets/images/services/bussiness.png'
import fitnessImage from '../../assets/images/services/fitness_corner.png'

const services = [
  {
    title: 'Luxury Rooms',
    description: 'Spacious and elegant rooms with premium amenities and stunning views.',
    image: luxuryRoomImage,
    icon: FaBed
  },
  {
    title: 'Fine Dining',
    description: 'Indulge in exquisite cuisines crafted by our world-class chefs.',
    image: fineDiningImage,
    icon: FaUtensils
  },
  {
    title: 'Spa & Wellness',
    description: 'Rejuvenate your body and mind with our signature spa treatments.',
    image: spaImage,
    icon: FaSpa
  },
  {
    title: 'Airport Transfer',
    description: 'Enjoy seamless and comfortable airport pickup and drop-off services.',
    image: airportTransferImage,
    icon: FaCar
  },
  {
    title: '24/7 Concierge',
    description: 'Our concierge team is available around the clock to assist you.',
    image: conciergeImage,
    icon: FaConciergeBell
  },
  {
    title: 'Infinity Pool',
    description: 'Relax and unwind in our infinity pool with breathtaking views.',
    image: infinityPoolImage,
    icon: FaSwimmingPool
  },
  {
    title: 'Business Facilities',
    description: 'State-of-the-art meeting rooms and business facilities for your needs.',
    image: businessImage,
    icon: FaBriefcase
  },
  {
    title: 'Fitness Center',
    description: 'Stay fit with our modern fitness center equipped with premium equipment.',
    image: fitnessImage,
    icon: FaDumbbell
  }
]

const amenities = [
  'Private airport transfers',
  'Signature spa treatments',
  'Chef-led dining experiences',
  'Executive meeting rooms',
  'Infinity pool access',
  'Premium fitness studio'
]

const viewport = { once: true, amount: 0.18 }

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.06,
      ease: 'easeOut'
    }
  })
}

export default function ServicesPage({ theme, toggleTheme }) {
  return (
    <div className={`services-page ${theme}-mode`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="services">
        <section
          className="services-hero"
          style={{ '--services-hero-image': `url(${luxuryRoomImage})` }}
        >
          <div className="services-hero-overlay"></div>
          <motion.header
            className="services-page-header"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="services-page-kicker">
              <span></span>
              <p>Our Services</p>
              <span></span>
            </div>
            <h1>
              Luxury Services,
              <span>Tailored Just For You</span>
            </h1>
            <div className="services-page-rule" aria-hidden="true">
              <span></span>
              <i></i>
              <span></span>
            </div>
            <p className="services-page-intro">
              Experience a new level of hospitality with our world-class amenities
              and personalized services.
            </p>
            <a className="services-hero-btn" href="#services-grid">
              Discover All Services <span aria-hidden="true">→</span>
            </a>
          </motion.header>
        </section>

        <div className="services-page-main">
          <section
            className="services-showcase"
            id="services-grid"
            aria-label="Grandeur hotel services"
          >
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.article
                  className="services-showcase-card"
                  key={service.title}
                  custom={index}
                  variants={cardReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <div className="services-showcase-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="services-showcase-copy">
                    <span className="services-showcase-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h2>{service.title}</h2>
                    <span className="services-title-rule"></span>
                    <p>{service.description}</p>
                  </div>
                </motion.article>
              )
            })}
          </section>

          <section className="services-experience">
            <motion.div
              className="services-experience-media"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <img src={conciergeImage} alt="Grandeur concierge guest experience" />
            </motion.div>
            <motion.div
              className="services-experience-copy"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <span className="services-section-label">Guest Experience</span>
              <h2>Quiet luxury, handled before you ask</h2>
              <p>
                Every service is coordinated by attentive hosts who understand timing,
                privacy, and comfort. Whether you are arriving for business, wellness,
                dining, or a long-awaited escape, Grandeur keeps the entire stay composed.
              </p>
            </motion.div>
          </section>

          <section className="services-amenities">
            <span className="services-section-label">Luxury Amenities</span>
            <h2>Everything you need, beautifully arranged</h2>
            <div className="services-amenities-grid">
              {amenities.map((amenity) => (
                <span key={amenity}>{amenity}</span>
              ))}
            </div>
          </section>

          <motion.section
            className="services-page-cta"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div>
              <span className="services-section-label">Reserve Your Stay</span>
              <h2>Let our team prepare your Grandeur experience</h2>
            </div>
            <Link to="/contact" className="services-discover-btn">
              Discover All Services <span aria-hidden="true">→</span>
            </Link>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
