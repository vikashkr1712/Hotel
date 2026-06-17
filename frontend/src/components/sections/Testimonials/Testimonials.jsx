import './Testimonials.css'

import { FaQuoteLeft } from 'react-icons/fa'

import { testimonialData } from '../../../data/testimonialData'

import { motion } from 'framer-motion'

export default function Testimonials() {

  return (

    <section className="testimonials">

      <div className="testimonials-container">

        <motion.div

          className="testimonials-header"

          initial={{

            opacity:0,

            y:50

          }}

          whileInView={{

            opacity:1,

            y:0

          }}

          transition={{

            duration:0.8

          }}

         viewport={{

once:false,



}}

        >

          <div className="testimonials-badge">

            <span>Testimonials</span>

          </div>

          <h2 className="testimonials-title">

            What Client's Say?

          </h2>

        </motion.div>



        <div className="testimonials-grid">

          {testimonialData.map((testimonial,index)=>(

            <motion.div

              key={testimonial.id}

              className="testimonial-card"

              initial={{

                opacity:0,

                y:60

              }}

              whileInView={{

                opacity:1,

                y:0

              }}

              transition={{

                duration:0.6,

                delay:index*0.2

              }}

              viewport={{

once:false,



}}

              whileHover={{

                y:-10

              }}

            >

              <div className="quote-icon">

                <FaQuoteLeft />

              </div>

              <p className="testimonial-text">

                {testimonial.text}

              </p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-author">

                <img

                  src={testimonial.avatar}

                  alt={testimonial.name}

                  className="author-avatar"

                />

                <h4 className="author-name">

                  {testimonial.name}

                </h4>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}