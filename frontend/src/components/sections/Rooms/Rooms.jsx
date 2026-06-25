import './Rooms.css'

import RoomCard from './RoomCard'

import { roomData } from '../../../data/roomData'

import Slider from 'react-slick'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { motion } from 'framer-motion'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

function NextArrow({ onClick }) {

  return (

    <button

      className="slider-arrow next-arrow"

      onClick={onClick}

    >

      <FaChevronRight />

    </button>

  )

}

function PrevArrow({ onClick }) {

  return (

    <button

      className="slider-arrow prev-arrow"

      onClick={onClick}

    >

      <FaChevronLeft />

    </button>

  )

}

export default function Rooms() {

  const settings = {

    dots:false,

    infinite:true,

    speed:500,

    slidesToShow:3,

    slidesToScroll:1,

    adaptiveHeight:false,

    centerMode:false,

    variableWidth:false,

    swipeToSlide:true,

    touchThreshold:10,

    nextArrow:<NextArrow />,

    prevArrow:<PrevArrow />,

    responsive:[
      {
        breakpoint:1025,
        settings:{
          slidesToShow:2
        }
      },
      {
        breakpoint:769,
        settings:{
          slidesToShow:1
        }
      }
    ]

  }

  return (

    <section className="rooms" id="rooms">

      <div className="rooms-container">

        <motion.div

          className="rooms-header"

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

once:true,

amount:0.3

}}

        >

          <div>

            <div className="rooms-badge">

              <span>

                Room Type

              </span>

            </div>

            <h2 className="rooms-title">

              The Best Luxury Rooms and Suites

            </h2>

          </div>

          <button className="see-all-btn">

            See All Rooms

          </button>

        </motion.div>

        <div className="rooms-slider-wrapper">

          <Slider

            {...settings}

            className="rooms-slider"

          >

            {roomData.map(room=>(

              <div key={room.id}>

                <RoomCard room={room}/>

              </div>

            ))}

          </Slider>

        </div>

      </div>

    </section>

  )

}
