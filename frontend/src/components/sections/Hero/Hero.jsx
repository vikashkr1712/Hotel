import './Hero.css'

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import hero1 from '../../../assets/images/hero/banner_1.jpg'

import hero2 from '../../../assets/images/rooms/price_1.jpg'

import hero3 from '../../../assets/images/rooms/price_2.jpg'

import hero4 from '../../../assets/images/rooms/price_3.jpg'

export default function Hero() {

  const images = [

    hero1,

    hero2,

    hero3,

    hero4

  ]

  const [currentImage,setCurrentImage]=useState(0)

  useEffect(()=>{

    const interval=setInterval(()=>{

      setCurrentImage(previous=>

        previous===images.length-1

        ?0

        :previous+1

      )

    },5000)

    return ()=>clearInterval(interval)

  },[])

  return (

    <section className="hero" id="home">

      <motion.img

        key={currentImage}

        src={images[currentImage]}

        alt="Hotel Banner"

        className="hero-image"

        initial={{

          opacity:0,

          scale:1.08

        }}

        animate={{

          opacity:1,

          scale:1

        }}

        transition={{

          duration:1.5

        }}

      />

      <div className="hero-overlay"></div>

      <motion.div

        className="hero-content"

        initial={{

          opacity:0,

          y:80

        }}

        animate={{

          opacity:1,

          y:0

        }}

        transition={{

          duration:1

        }}

      >

        <motion.h1

          className="hero-title"

          initial={{

            opacity:0,

            y:40

          }}

          animate={{

            opacity:1,

            y:0

          }}

          transition={{

            delay:0.3,

            duration:0.8

          }}

        >

          Book With Best

          <br/>

          Luxury Hotel

        </motion.h1>

        <motion.p

          className="hero-subtitle"

          initial={{

            opacity:0

          }}

          animate={{

            opacity:1

          }}

          transition={{

            delay:0.6,

            duration:0.8

          }}

        >

          Where Elegance Meets Extraordinary Service

        </motion.p>

        <motion.button

          className="hero-btn"

          initial={{

            opacity:0,

            scale:0.8

          }}

          animate={{

            opacity:1,

            scale:1

          }}

          transition={{

            delay:0.9,

            duration:0.6

          }}

          whileHover={{

            scale:1.05

          }}

        >

          Reserve Now

        </motion.button>

      </motion.div>

    </section>

  )

}