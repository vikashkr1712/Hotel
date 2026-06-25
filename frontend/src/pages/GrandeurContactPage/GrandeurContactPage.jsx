import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md'
import Navbar from '../../components/layout/Navbar/Navbar'
import './GrandeurContactPage.css'

import heroImage from '../../assets/images/contact_us_page/contact_us_1.jpg'
import mapImage from '../../assets/images/contact_us_page/contact_us_2_map.png'

const viewport = { once: true, amount: 0.2 }

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const heroImageReveal = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
}

const heroTextReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
}

const formReveal = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const infoReveal = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const footerColumnReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  }
})

const contactDetails = [
  {
    icon: <MdLocationOn />,
    title: 'Address',
    lines: ['123 Grandeur Hotel, Luxury Street,', 'New Delhi, India - 110001']
  },
  {
    icon: <MdPhone />,
    title: 'Phone',
    lines: ['+91 98765 43210']
  },
  {
    icon: <MdEmail />,
    title: 'Email',
    lines: ['info@grandeurhotel.com']
  },
  {
    icon: <MdAccessTime />,
    title: 'Working Hours',
    lines: ['Mon - Sun: 24 Hours', 'We are always here for you']
  }
]

function GrandeurFooter() {
  return (
    <footer className="grandeur-footer">
      <div className="grandeur-footer-desktop">
        <motion.div className="grandeur-footer-col" variants={footerColumnReveal(0)} initial="hidden" whileInView="visible" viewport={viewport}>
          <h3>GRANDEUR</h3>
          <p>Experience luxury and comfort at its finest with our world-class accommodations and services.</p>
          <div className="grandeur-social">
            <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </motion.div>

        <motion.div className="grandeur-footer-col" variants={footerColumnReveal(0.1)} initial="hidden" whileInView="visible" viewport={viewport}>
          <h4>Contact Us</h4>
          <ul className="grandeur-contact-list">
            {contactDetails.slice(0, 3).map((item) => (
              <li key={item.title}>
                <span className="footer-icon">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  {item.lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="grandeur-footer-col" variants={footerColumnReveal(0.2)} initial="hidden" whileInView="visible" viewport={viewport}>
          <h4>Quick Links</h4>
          <ul className="grandeur-links">
            <li><a href="/">Home</a><span>→</span></li>
            <li><a href="/about">About</a><span>→</span></li>
            <li><a href="/#services">Services</a><span>→</span></li>
            <li><a href="/contact">Contact</a><span>→</span></li>
          </ul>
        </motion.div>

        <motion.div className="grandeur-footer-col" variants={footerColumnReveal(0.3)} initial="hidden" whileInView="visible" viewport={viewport}>
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates and special offers</p>
          <form className="grandeur-newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </motion.div>
      </div>

      <div className="grandeur-footer-mobile">
        <div className="mobile-footer-brand">
          <h3>GRANDEUR</h3>
          <p>Experience luxury and comfort at its finest with our world-class accommodations and services.</p>
          <div className="grandeur-social">
            <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <details className="mobile-footer-panel">
          <summary>Contact Us</summary>
          {contactDetails.slice(0, 3).map((item) => (
            <div className="mobile-footer-item" key={item.title}>
              <span className="footer-icon">{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                {item.lines.map((line) => <p key={line}>{line}</p>)}
              </div>
            </div>
          ))}
        </details>

        <details className="mobile-footer-panel">
          <summary>Quick Links</summary>
          <ul className="grandeur-links">
            <li><a href="/">Home</a><span>→</span></li>
            <li><a href="/about">About</a><span>→</span></li>
            <li><a href="/#services">Services</a><span>→</span></li>
            <li><a href="/contact">Contact</a><span>→</span></li>
          </ul>
        </details>

        <details className="mobile-footer-panel">
          <summary>Newsletter</summary>
          <p>Subscribe to receive updates and special offers</p>
          <form className="grandeur-newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </details>
      </div>

      <div className="grandeur-footer-bottom">
        <span className="footer-ribbon" aria-hidden="true">G</span>
        <p>© 2024 Grandeur Hotel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function GrandeurContactPage({ theme, toggleTheme }) {
  return (
    <div className="grandeur-contact-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="grandeur-hero">
        <motion.img
          src={heroImage}
          alt=""
          className="grandeur-hero-image"
          variants={heroImageReveal}
          initial="hidden"
          animate="visible"
        />
        <div className="grandeur-hero-overlay" />
        <motion.div className="grandeur-hero-copy" variants={heroTextReveal} initial="hidden" animate="visible">
          <h1>Contact Us</h1>
          <p>We would love to hear from you</p>
        </motion.div>
      </section>

      <motion.section className="grandeur-content" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewport}>
        <div className="grandeur-content-inner">
          <motion.div className="grandeur-form-panel" variants={formReveal}>
            <h2>Send Us a Message</h2>
            <p>We would love to hear from you. Please fill out the form and we'll get back to you shortly.</p>

            <form className="grandeur-form" onSubmit={(e) => e.preventDefault()}>
              <div className="grandeur-form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Your Message" />
              <motion.button type="submit" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          <motion.div className="grandeur-info-panel" variants={infoReveal}>
            <h2>Get in touch with us</h2>
            <p>Our team is here to assist you with any inquiries or special requests.</p>
            <div className="grandeur-info-list">
              {contactDetails.map((item) => (
                <div className="grandeur-info-item" key={item.title}>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    {item.lines.map((line) => <p key={line}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="grandeur-map-section" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewport}>
        <div className="grandeur-map-frame">
          <motion.img src={mapImage} alt="Hotel location map" initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} viewport={viewport} />
        </div>
      </motion.section>

      <GrandeurFooter />
    </div>
  )
}
