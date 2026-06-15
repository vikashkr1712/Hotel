import './Testimonials.css'
import { FaQuoteLeft } from 'react-icons/fa'
import { testimonialData } from '../../../data/testimonialData'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <span>Testimonials</span>
          </div>
          <h2 className="testimonials-title">What Client's Say?</h2>
        </div>

        <div className="testimonials-grid">
          {testimonialData.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="author-avatar"
                />
                <h4 className="author-name">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
