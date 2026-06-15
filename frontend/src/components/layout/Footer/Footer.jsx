import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* Column 1 - Brand */}
        <div className="footer-column">
          <h3 className="footer-logo">GRANDEUR</h3>
          <p className="footer-description">
            Experience luxury and comfort at its finest. We provide world-class accommodations and exceptional service.
          </p>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook" title="Facebook">
              <FaFacebook />
            </a>
            <a href="#twitter" aria-label="Twitter" title="Twitter">
              <FaTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Column 2 - Contact */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="contact-items">
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <a href="tel:+1-555-123-4567">+1-555-123-4567</a>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <a href="mailto:info@grandeurhotel.com">info@grandeurhotel.com</a>
            </div>
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <p>123 Luxury Avenue, New York, NY</p>
            </div>
          </div>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-column">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="newsletter-text">Subscribe to receive updates and special offers</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {currentYear} GRANDEUR. All rights reserved.
          </p>
          <div className="footer-bottom-social">
            <span>Follow Us</span>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
              <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
