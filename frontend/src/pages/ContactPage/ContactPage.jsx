import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import { motion } from 'framer-motion'
import './ContactPage.css'

import heroImage from '../../assets/images/contact_us_page/contact_us_1.jpg'
import mapImage from '../../assets/images/contact_us_page/contact_us_2_map.png'

const contactItems = [
  {
    label: 'Have any question?',
    value: '+1 (555) 123-4567',
    icon: <MdPhone />
  },
  {
    label: 'Write email',
    value: 'info@grandeurluxury.com',
    icon: <MdEmail />
  },
  {
    label: 'Visit anytime',
    value: '123 Luxury Avenue, NY 10001',
    icon: <MdLocationOn />
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

const formReveal = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

const infoReveal = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
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

export default function ContactPage({ theme, toggleTheme }) {
  return (
    <div className="contact-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="page-hero contact-page-hero" id="contact">
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
          Contact Us
        </motion.h1>
      </section>

      <motion.section
        className="contact-main-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="contact-main-inner">
          <motion.div className="contact-form-panel" variants={formReveal}>
            <span className="contact-label">Send us email</span>
            <h2>Feel free to write</h2>
            <form className="contact-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Subject" />
              <input type="tel" placeholder="Enter Phone" />
              <textarea placeholder="Enter Message"></textarea>
              <motion.button
                type="submit"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.aside className="contact-info-panel" variants={infoReveal}>
            <span className="contact-label">Need any help?</span>
            <h2>Get in touch with us</h2>
            <p className="contact-info-description">
              Lorem ipsum is simply free text available dolor sit amet consectetur
              notted adipisicing elit sed do eiusmod tempor incididunt simply dolore
              magna.
            </p>
            <div className="contact-info-list">
              {contactItems.map((item) => (
                <div className="contact-info-item" key={item.label}>
                  <span className="contact-info-icon">{item.icon}</span>
                  <div>
                    <p>{item.label}</p>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </motion.section>

      <motion.section
        className="map-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="map-inner">
          <img src={mapImage} alt="Hotel location map" />
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
