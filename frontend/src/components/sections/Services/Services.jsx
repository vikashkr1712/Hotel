import './Services.css'

import fitnessIcon from '../../../assets/images/services/logo_1.png'
import jacuzziIcon from '../../../assets/images/services/logo_2.png'
import poolIcon from '../../../assets/images/services/logo_3.png'
import spaIcon from '../../../assets/images/services/logo_5.png'

import { motion } from 'framer-motion'

export default function Services() {

  const services = [

    {
      id:1,

      title:'Fitness Center',

      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...',

      icon:fitnessIcon
    },

    {
      id:2,

      title:'Jacuzzi',

      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...',

      icon:jacuzziIcon
    },

    {
      id:3,

      title:'Swimming Pool',

      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...',

      icon:poolIcon
    },

    {
      id:4,

      title:'SPA Treatments',

      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...',

      icon:spaIcon
    }

  ]

  return (

<motion.section

className="services"

id="services"

initial={{ opacity:0 }}

whileInView={{ opacity:1 }}

viewport={{

once:false,

amount:0.3

}}

transition={{ duration:0.8 }}

>

<div className="services-container">

{/* Left Column */}

<motion.div

className="services-content"

initial={{

opacity:0,

x:-80

}}

whileInView={{

opacity:1,

x:0

}}

viewport={{

once:false,

amount:0.3

}}

>

<div className="services-badge">

<span>Hotel Services</span>

</div>

<h2 className="services-title">

Get The Best Hotel Grandeur Services

</h2>

<p className="services-description">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictumst eu, humilis ac. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.

</p>

<button className="services-btn">

View All

</button>

</motion.div>


{/* Right Column */}

<motion.div

className="services-grid"

initial={{

opacity:0,

x:80

}}

whileInView={{

opacity:1,

x:0

}}

viewport={{ once:false }}

transition={{

duration:0.3,

delay:0.2

}}

>

{services.map((service,index)=>(

<motion.div

key={service.id}

className="service-card"

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

viewport={{

once:false,

amount:0.3

}}

transition={{

duration:0.5,

delay:index*0.15

}}

>

<div className="service-icon">

<img

src={service.icon}

alt={service.title}

/>

</div>

<h3 className="service-title">

{service.title}

</h3>

<p className="service-description">

{service.description}

</p>

</motion.div>

))}

</motion.div>

</div>

</motion.section>

  )
}