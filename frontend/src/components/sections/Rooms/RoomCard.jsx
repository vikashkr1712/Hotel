import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'
import { FaTimes, FaWifi, FaBath, FaCoffee, FaParking } from 'react-icons/fa'

import './Rooms.css'

export default function RoomCard({ room }) {
  const [showDetails, setShowDetails] = useState(false)

  const detailsDrawer = (
    <AnimatePresence>
      {showDetails && (
        <>
          <motion.div
            className="details-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(false)}
          />

          <motion.aside
            className="details-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            aria-label={`${room.title} details`}
          >
            <button
              className="close-btn"
              onClick={() => setShowDetails(false)}
              type="button"
              aria-label="Close room details"
            >
              <FaTimes />
            </button>

            <img src={room.image} alt={room.title} className="details-image" />

            <h2>{room.title}</h2>
            <h3>{room.price}/Night</h3>

            <p>
              Experience premium luxury, elegant interiors and world class
              comfort.
            </p>

            <div className="details-grid">
              <div>
                <strong>Room Size</strong>
                <span>45 m²</span>
              </div>
              <div>
                <strong>Capacity</strong>
                <span>2 Adults + 1 Child</span>
              </div>
              <div>
                <strong>Bed</strong>
                <span>King Size Bed</span>
              </div>
              <div>
                <strong>View</strong>
                <span>City Skyline</span>
              </div>
              <div>
                <strong>Check In</strong>
                <span>2:00 PM</span>
              </div>
              <div>
                <strong>Check Out</strong>
                <span>11:00 AM</span>
              </div>
            </div>

            <h4>Included Facilities</h4>

            <div className="facility-list">
              <div>
                <FaWifi />
                Free WiFi
              </div>
              <div>
                <FaBath />
                Luxury Bathtub
              </div>
              <div>
                <FaCoffee />
                Complimentary Breakfast
              </div>
              <div>
                <FaParking />
                Free Parking
              </div>
            </div>

            <h4>Hotel Policies</h4>

            <ul className="policy-list">
              <li>✓ No smoking room</li>
              <li>✓ Pets not allowed</li>
              <li>✓ Free cancellation within 24 hours</li>
              <li>✓ 24/7 room service</li>
              <li>✓ Airport pickup available</li>
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <motion.div
      className="room-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ y: -8 }}
    >
      <div className="room-image">
        <img src={room.image} alt={room.title} />
      </div>

      <div className="room-details">
        <h3 className="room-price">{room.price}</h3>
        <h4 className="room-title">{room.title}</h4>

        <div className="room-amenities">
          {room.amenities.map((amenity, index) => (
            <div key={index} className="amenity">
              <MdCheckCircle className="check-icon" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        <p className="room-description">{room.description}</p>

        <div className="room-actions">
          <button className="room-btn" type="button">
            Book Now
          </button>
          <button
            className="room-details-btn"
            onClick={() => setShowDetails(true)}
            type="button"
          >
            View Details
          </button>
        </div>
      </div>

      {createPortal(detailsDrawer, document.body)}
    </motion.div>
  )
}
