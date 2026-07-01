import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FaBed,
  FaBriefcase,
  FaBroom,
  FaBuilding,
  FaCoffee,
  FaCrown,
  FaExpandAlt,
  FaConciergeBell,
  FaLaptop,
  FaLock,
  FaRegMoon,
  FaRegSnowflake,
  FaSuitcase,
  FaTimes,
  FaUser,
  FaWifi,
  FaTv
} from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { MdRoomService, MdSettingsRemote, MdSpa } from 'react-icons/md'

import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import { roomData } from '../../data/roomData'
import './RoomsPage.css'

const roomCopy = [
  {
    category: 'standard',
    title: 'Standard Room',
    description: 'Comfortable and cozy rooms with modern amenities for a pleasant stay.',
    guests: '2 Guests',
    bed: '1 Bed',
    size: '24 m²',
    price: roomData[0].price,
    details:
      'A polished city retreat with warm lighting, plush bedding, fast WiFi, and everything arranged for an effortless stay.',
    experience:
      'A comfortable and elegant retreat designed for business and leisure travelers, the Standard Room balances calm interiors with thoughtful daily comforts. Warm lighting, premium bedding, and intuitive room features create an easy place to rest, refresh, and begin the next part of your stay.'
  },
  {
    category: 'deluxe',
    title: 'Deluxe Room',
    description: 'Spacious rooms with premium amenities and beautiful city views.',
    guests: '2 Guests',
    bed: '1 Bed',
    size: '28 m²',
    price: roomData[5].price,
    details:
      'Elevated comfort with a wider layout, skyline views, soft seating, and refined finishes for a relaxed luxury rhythm.',
    experience:
      'The Deluxe Room offers an enhanced luxury experience with upgraded interiors, generous natural light, and premium views. It is made for guests who want a more refined rhythm, with composed details that feel relaxed from arrival to checkout.'
  },
  {
    category: 'suite',
    title: 'Suite Room',
    description: 'Elegant suites with separate living area for extra comfort and luxury.',
    guests: '3 Guests',
    bed: '1 King Bed',
    size: '45 m²',
    price: roomData[2].price,
    details:
      'A graceful suite made for longer stays, with a separate lounge, premium bath amenities, and generous space to unwind.',
    experience:
      'The Suite Room is a spacious accommodation featuring separate living and relaxation areas for longer stays, celebrations, and slow mornings. Its layered layout gives you more privacy, more comfort, and a polished hotel experience with every detail close at hand.'
  },
  {
    category: 'presidential',
    title: 'Presidential Suite',
    description: 'The pinnacle of luxury with unmatched comfort and personalized service.',
    guests: '4 Guests',
    bed: '2 King Beds',
    size: '85 m²',
    price: roomData[4].price,
    details:
      'Grandeur at its most composed, pairing expansive living space with private service, signature views, and a ceremonial sense of arrival.',
    experience:
      'The Presidential Suite is the ultimate luxury experience, shaped around premium hospitality and exclusive amenities. Expansive living zones, refined finishes, and attentive service create a stay that feels private, elevated, and unmistakably Grandeur.'
  }
]

const roomHighlights = [
  { label: 'Luxury furnishings', icon: MdSpa },
  { label: 'Smart room controls', icon: MdSettingsRemote },
  { label: 'Premium bedding', icon: FaBed },
  { label: 'City or hotel views', icon: FaBuilding },
  { label: 'Daily housekeeping', icon: FaBroom },
  { label: 'Air conditioning', icon: FaRegSnowflake },
  { label: 'Room service', icon: MdRoomService }
]

const roomAmenities = [
  { label: 'High-speed WiFi', icon: FaWifi },
  { label: 'Flat-screen TV', icon: FaTv },
  { label: 'Mini Bar', icon: FaConciergeBell },
  { label: 'Coffee Machine', icon: FaCoffee },
  { label: 'Safety Locker', icon: FaLock },
  { label: 'Workspace', icon: FaLaptop },
  { label: 'Premium Bathroom', icon: MdSpa }
]

const includedItems = [
  { label: 'Complimentary breakfast', icon: FaCoffee },
  { label: 'Housekeeping', icon: FaBroom },
  { label: 'Concierge assistance', icon: FaConciergeBell },
  { label: 'Welcome amenities', icon: FaCrown },
  { label: 'Access to hotel facilities', icon: FaSuitcase }
]

const categoryTabs = [
  { id: 'all', label: 'All Rooms', icon: null },
  { id: 'standard', label: 'Standard', icon: FaBed },
  { id: 'deluxe', label: 'Deluxe', icon: FiMapPin },
  { id: 'suite', label: 'Suite', icon: FaBriefcase },
  { id: 'presidential', label: 'Presidential', icon: FaCrown }
]

const pageRooms = roomCopy.map((room, index) => ({
  ...room,
  image: roomData[index % roomData.length].image,
  sourceAmenities: roomData[index % roomData.length].amenities
}))

const viewport = { once: true, amount: 0.2 }

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: 'easeOut'
    }
  })
}

function RoomsCrest() {
  return (
    <div className="rooms-page-crest" aria-hidden="true">
      <FaCrown />
      <span>G</span>
      <small>Grandeur</small>
      <em>Luxury Hotel</em>
    </div>
  )
}

function RoomDetailsDrawer({ room, onClose }) {
  if (!room) {
    return null
  }

  const detailStats = [
    { label: 'Guest Capacity', value: room.guests, icon: FaUser },
    { label: 'Bed Type', value: room.bed, icon: FaBed },
    { label: 'Room Size', value: room.size, icon: FaExpandAlt },
    { label: 'WiFi Availability', value: 'Free WiFi', icon: FaWifi }
  ]

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="rooms-details-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="rooms-details-panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        aria-label={`${room.title} details`}
      >
        <button
          className="rooms-details-close"
          type="button"
          aria-label="Close room details"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <img src={room.image} alt={room.title} className="rooms-details-image" />
        <div className="rooms-details-heading">
          <div>
            <span className="rooms-details-label">Room Details</span>
            <h2>{room.title}</h2>
          </div>
          <div className="rooms-details-price">
            <small>From</small>
            <strong>{room.price}</strong>
            <span>/ Night</span>
          </div>
        </div>
        <p className="rooms-details-intro">{room.details}</p>
        <div className="rooms-details-grid">
          {detailStats.map((item) => {
            const Icon = item.icon

            return (
              <span key={item.label}>
                <Icon />
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </span>
            )
          })}
        </div>

        <div className="rooms-details-section">
          <h3>Room Highlights</h3>
          <div className="rooms-details-list">
            {roomHighlights.map((item) => {
              const Icon = item.icon

              return (
                <span key={item.label}>
                  <Icon />
                  {item.label}
                </span>
              )
            })}
          </div>
        </div>

        <div className="rooms-details-section">
          <h3>Room Amenities</h3>
          <div className="rooms-details-list">
            {roomAmenities.map((item) => {
              const Icon = item.icon

              return (
                <span key={item.label}>
                  <Icon />
                  {item.label}
                </span>
              )
            })}
          </div>
        </div>

        <div className="rooms-details-section">
          <h3>What's Included</h3>
          <div className="rooms-details-list rooms-details-list-compact">
            {includedItems.map((item) => {
              const Icon = item.icon

              return (
                <span key={item.label}>
                  <Icon />
                  {item.label}
                </span>
              )
            })}
          </div>
        </div>

        <div className="rooms-details-section rooms-details-experience">
          <h3>Room Experience</h3>
          <p>{room.experience}</p>
        </div>
      </motion.aside>
    </AnimatePresence>,
    document.body
  )
}

function RoomsPageCard({ room, index, onDetails }) {
  return (
    <motion.article
      className="rooms-page-card"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      whileHover={{ y: -8 }}
    >
      <div className="rooms-page-card-image">
        <img src={room.image} alt={room.title} />
      </div>

      <div className="rooms-page-card-body">
        <h2>{room.title}</h2>
        <p>{room.description}</p>
        <div className="rooms-page-features" aria-label={`${room.title} features`}>
          <span>
            <FaUser />
            {room.guests}
          </span>
          <span>
            <FaBed />
            {room.bed}
          </span>
          <span>
            <FaExpandAlt />
            {room.size}
          </span>
        </div>
      </div>

      <div className="rooms-page-card-footer">
        <div className="rooms-page-card-price">
          <small>From</small>
          <div className="rooms-page-card-rate">
            <strong>{room.price}</strong>
            <span>/ Night</span>
          </div>
        </div>
        <button type="button" onClick={() => onDetails(room)}>
          View Details
        </button>
      </div>
    </motion.article>
  )
}

export default function RoomsPage({ theme, toggleTheme }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedRoom, setSelectedRoom] = useState(null)

  const visibleRooms = useMemo(() => {
    if (activeCategory === 'all') {
      return pageRooms
    }

    return pageRooms.filter((room) => room.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="rooms-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="rooms">
        <section
          className="rooms-page-hero"
          style={{ '--rooms-page-hero': `url(${pageRooms[1].image})` }}
        >
          <div className="rooms-page-hero-shade"></div>
          <motion.div
            className="rooms-page-hero-inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <RoomsCrest />
            <h1>Our Rooms</h1>
            <div className="rooms-page-rule" aria-hidden="true">
              <span></span>
              <i></i>
              <span></span>
            </div>
            <p>
              Discover elegance and comfort in our thoughtfully designed rooms
              crafted for a luxurious and relaxing stay.
            </p>

            <div className="rooms-page-tabs" aria-label="Room categories">
              {categoryTabs.map((tab) => {
                const Icon = tab.icon

                return (
                  <button
                    key={tab.id}
                    className={activeCategory === tab.id ? 'is-active' : ''}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                  >
                    {Icon ? <Icon aria-hidden="true" /> : null}
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </section>

        <section className="rooms-page-grid-section" aria-label="Available rooms">
          <div className="rooms-page-grid">
            {visibleRooms.map((room, index) => (
              <RoomsPageCard
                key={room.category}
                room={room}
                index={index}
                onDetails={setSelectedRoom}
              />
            ))}
          </div>
        </section>

        <section className="rooms-page-night-note" aria-label="Grandeur stay promise">
          <FaRegMoon aria-hidden="true" />
          <p>Premium rooms, composed service, and quiet comfort from check-in to checkout.</p>
          <FaSuitcase aria-hidden="true" />
        </section>
      </main>

      <RoomDetailsDrawer room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      <Footer />
    </div>
  )
}
