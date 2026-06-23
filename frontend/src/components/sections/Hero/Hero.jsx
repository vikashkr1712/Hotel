import './Hero.css'

import { useState, useEffect } from 'react'

import hero1 from '../../../assets/images/hero/banner_1.jpg'

import hero2 from '../../../assets/images/hero/banner_2.png'

import hero3 from '../../../assets/images/hero/banner_3.png'

import hero4 from '../../../assets/images/hero/banner_4.png'

import { motion } from 'framer-motion'



export default function Hero() {

  const images = [

    hero1,

    hero2,

    hero3,

    hero4

  ]

  const [currentImage,setCurrentImage]=useState(0)

  useEffect(()=>{

    images.forEach(image=>{

      const preloadedImage=new Image()

      preloadedImage.src=image

    })

  },[])

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

    {images.map((image,index)=>(

    <motion.img

  key={image}

  src={image}

  alt="Hotel Banner"

  className="hero-image"

  initial={false}

  animate={{ opacity:index===currentImage ? 1 : 0 }}

  transition={{ duration:1.2 }}

/>

    ))}

      <div className="hero-overlay"></div>

    <motion.div

className="hero-content"

initial={{

opacity:0,

y:60

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

y:30

}}

animate={{

opacity:1,

y:0

}}

transition={{

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

delay:0.4,

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

delay:0.7,

duration:0.5

}}

whileHover={{

scale:1.05

}}

whileTap={{

scale:0.95

}}

>

Reserve Now

</motion.button>

</motion.div>

    </section>

  )

}
