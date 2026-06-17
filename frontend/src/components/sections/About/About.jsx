import './About.css'

import aboutImage from '../../../assets/images/about/2_home.jpg'

import { MdRoom, MdPool, MdWifi, MdSpellcheck } from 'react-icons/md'

import { FaBed, FaUtensils } from 'react-icons/fa'

import { motion } from 'framer-motion'

export default function About() {

  const amenities = [

    {
      id:1,
      title:'24/7 Room Service',
      icon:<MdRoom className="amenity-icon"/>
    },

    {
      id:2,
      title:'Infinity Pool',
      icon:<MdPool className="amenity-icon"/>
    },

    {
      id:3,
      title:'Free High Speed WiFi',
      icon:<MdWifi className="amenity-icon"/>
    },

    {
      id:4,
      title:'Luxury Spa & Wellness Center',
      icon:<MdSpellcheck className="amenity-icon"/>
    },

    {
      id:5,
      title:'Complimentary Breakfast',
      icon:<FaUtensils className="amenity-icon"/>
    },

    {
      id:6,
      title:'City View Suites',
      icon:<FaBed className="amenity-icon"/>
    }

  ]

  return (

    <section className="about" id="about">

      <div className="about-container">

        <motion.div

          className="about-image"

          initial={{opacity:0,x:-80}}

          whileInView={{opacity:1,x:0}}

          transition={{duration:0.8}}

          viewport={{

once:false,

amount:0.3

}}

        >

          <img

            src={aboutImage}

            alt="Hotel Room"

          />

        </motion.div>

        <motion.div

          className="about-content"

          initial={{opacity:0,x:80}}

          whileInView={{opacity:1,x:0}}

          transition={{duration:0.8}}

         viewport={{

once:false,

amount:0.3

}}

        >

          <div className="about-badge">

            <span>

              About grandeur

            </span>

          </div>

          <h2 className="about-title">

            World Class Luxury Hotel and Resort Near City

          </h2>

          <p className="about-description">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictumst eu, humilis ac. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.

          </p>

          <div className="amenities-grid">

            {

              amenities.map(amenity=>(

                <motion.div

                  key={amenity.id}

                  className="amenity-item"

                  initial={{opacity:0,y:20}}

                  whileInView={{opacity:1,y:0}}

                  transition={{

                    duration:0.5,

                    delay:amenity.id*0.1

                  }}

                 viewport={{

once:false,

amount:0.3

}}

                >

                  {amenity.icon}

                  <p>

                    {amenity.title}

                  </p>

                </motion.div>

              ))

            }

          </div>

        </motion.div>

      </div>

    </section>

  )
}