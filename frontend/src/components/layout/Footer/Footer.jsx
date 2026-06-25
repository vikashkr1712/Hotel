import './Footer.css'

import { motion } from 'framer-motion'

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

import {
  MdPhone,
  MdEmail,
  MdLocationOn
} from 'react-icons/md'

export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (

    <motion.footer

      className="footer"

      id="contact"

      initial={{ opacity: 0, y: 80 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.8, ease: 'easeOut' }}

      viewport={{

once:true,

amount:0.2

}}

    >

      <div className="footer-container">

        {/* Brand */}

        <motion.div

          className="footer-column"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, ease: 'easeOut' }}

         viewport={{

once:true,

amount:0.2

}}

        >

          <h3 className="footer-logo">

            GRANDEUR

          </h3>

          <p className="footer-description">

            Experience luxury and comfort at its finest
            with our world-class accommodations and
            services.

          </p>

          <div className="social-icons">

            <a href="#facebook">

              <FaFacebook />

            </a>

            <a href="#twitter">

              <FaTwitter />

            </a>

            <a href="#instagram">

              <FaInstagram />

            </a>

            <a href="#linkedin">

              <FaLinkedin />

            </a>

          </div>

        </motion.div>



        {/* Contact */}

        <motion.div

          className="footer-column"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}

          viewport={{

once:true,

amount:0.2

}}

        >

          <h4 className="footer-heading">

            Contact Us

          </h4>

          <div className="contact-items">

            <div className="contact-item">

              <MdPhone className="contact-icon" />

              <a href="tel:+1-555-123-4567">

                +1-555-123-4567

              </a>

            </div>

            <div className="contact-item">

              <MdEmail className="contact-icon" />

              <a href="mailto:info@grandeurluxury.com">

                info@grandeurluxury.com

              </a>

            </div>

            <div className="contact-item">

              <MdLocationOn className="contact-icon" />

              <p>

                123 Luxury Avenue, NY
                10001

              </p>

            </div>

          </div>

        </motion.div>



        {/* Quick Links */}

        <motion.div

          className="footer-column"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}

          viewport={{

once:true,

amount:0.2

}}

        >

          <h4 className="footer-heading">

            Quick Links

          </h4>

          <ul className="footer-links">

            <li><a href="/">Home</a></li>

            <li><a href="/about">About Us</a></li>

            <li><a href="/#services">Services</a></li>

            <li><a href="/#rooms">Rooms</a></li>

            <li><a href="/contact">Contact</a></li>

          </ul>

        </motion.div>



        {/* Newsletter */}

        <motion.div

          className="footer-column"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}

          viewport={{

once:true,

amount:0.2

}}

        >

          <h4 className="footer-heading">

            Newsletter

          </h4>

          <p className="newsletter-text">

            Subscribe to receive updates

            and special offers

          </p>

          <form

            className="newsletter-form"

            onSubmit={(e) => e.preventDefault()}

          >

            <input

              type="email"

              placeholder="Your email"

              required

            />

            <button type="submit">

              Subscribe

            </button>

          </form>

        </motion.div>

      </div>



      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p className="copyright">

            © {currentYear} GRANDEUR.

            All rights reserved.

          </p>

          <div className="footer-bottom-social">

            <span>

              Follow Us

            </span>

            <div className="social-links">

              <a href="#facebook">

                <FaFacebook />

              </a>

              <a href="#twitter">

                <FaTwitter />

              </a>

              <a href="#instagram">

                <FaInstagram />

              </a>

              <a href="#linkedin">

                <FaLinkedin />

              </a>

            </div>

          </div>

        </div>

      </div>

    </motion.footer>

  )
}
