import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
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

export default function ContactPage({ theme, toggleTheme }) {
  return (
    <div className="contact-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="page-hero contact-page-hero" id="contact">
        <img src={heroImage} alt="" className="page-hero-image" />
        <div className="page-hero-overlay"></div>
        <h1>Contact Us</h1>
      </section>

      <section className="contact-main-section">
        <div className="contact-main-inner">
          <div className="contact-form-panel">
            <span className="contact-label">Send us email</span>
            <h2>Feel free to write</h2>
            <form className="contact-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Subject" />
              <input type="tel" placeholder="Enter Phone" />
              <textarea placeholder="Enter Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <aside className="contact-info-panel">
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
          </aside>
        </div>
      </section>

      <section className="map-section">
        <div className="map-inner">
          <img src={mapImage} alt="Hotel location map" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
