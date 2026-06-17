import './Rooms.css'

import { MdCheckCircle } from 'react-icons/md'

import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

export default function RoomCard({ room }) {

  const [showDetails, setShowDetails] = useState(false)

  return (

    <motion.div

      className="room-card"

      initial={{

        opacity:0,

        y:60

      }}

      whileInView={{

        opacity:1,

        y:0

      }}

      transition={{

        duration:0.7

      }}

      viewport={{

once:false,

amount:0.3

}}

      whileHover={{

        y:-10

      }}

    >

      <div className="room-image">

        <img

          src={room.image}

          alt={room.title}

        />

      </div>

      <div className="room-details">

        <h3 className="room-price">

          {room.price}

        </h3>

        <h4 className="room-title">

          {room.title}

        </h4>

        <div className="room-amenities">

          {room.amenities.map((amenity,index)=>(

            <div

              key={index}

              className="amenity"

            >

              <MdCheckCircle className="check-icon" />

              <span>{amenity}</span>

            </div>

          ))}

        </div>

        <p className="room-description">

          {room.description}

        </p>

        <div className="room-actions">

          <button className="room-btn">

            Book Now

          </button>

          <button

            className="room-details-btn"

            onClick={()=>setShowDetails(!showDetails)}

          >

            {showDetails

              ? 'Hide Details'

              : 'View Details'}

          </button>

        </div>

        <AnimatePresence>

          {showDetails && (

            <motion.div

              className="room-extra-details"

              initial={{

                opacity:0,

                height:0

              }}

              animate={{

                opacity:1,

                height:'auto'

              }}

              exit={{

                opacity:0,

                height:0

              }}

              transition={{

                duration:0.35

              }}

            >

              <p>

                <strong>Room Size:</strong> 45 m²

              </p>

              <p>

                <strong>Bed:</strong> King Size Bed

              </p>

              <p>

                <strong>View:</strong> City View

              </p>

              <p>

                <strong>Bathroom:</strong> Luxury Bathtub

              </p>

              <p>

                <strong>Check In:</strong> 2 PM

              </p>

              <p>

                <strong>Check Out:</strong> 11 AM

              </p>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.div>

  )

}