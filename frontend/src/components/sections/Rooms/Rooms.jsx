import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import {
  FaArrowLeft,
  FaArrowRight,
  FaBath,
  FaBed,
  FaRegUser,
  FaThLarge,
  FaWifi
} from 'react-icons/fa'

import { roomData } from '../../../data/roomData'
import './Rooms.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const roomDescriptions = {
  1: 'Spacious and warm, perfect for family stays with all modern amenities.',
  2: 'Elegant rooms with premium comfort designed for a relaxing stay.',
  3: 'Premium suite with extra space for a truly luxurious experience.',
  4: 'Luxury executive suite with refined details and elevated privacy.',
  5: 'Exclusive presidential experience with generous lounge-style comfort.',
  6: 'Comfortable deluxe room with serene views and polished finishes.'
}

const amenityIcons = [FaRegUser, FaBed, FaBath, FaWifi]

const formatAmenities = room => {
  const guests = room.id === 3 || room.id === 4 ? '1-3 Guests' : room.id === 5 ? '2-4 Guests' : '1-2 Guests'

  return [guests, 'King Bed', 'Bathtub', 'Free WiFi']
}

function RoomShowcaseCard({ room }) {
  const amenities = formatAmenities(room)

  return (
    <article className="rooms-showcase-card">
      <div className="rooms-card-image">
        <img src={room.image} alt={room.title} loading="lazy" />
      </div>

      <div className="rooms-card-content">
        <div className="rooms-price-wrap">
          <span className="rooms-price-label">FROM</span>
          <p className="rooms-price">
            {room.price} <span>/ night</span>
          </p>
        </div>

        <div className="rooms-card-copy">
          <div className="rooms-title-icon" aria-hidden="true">
            <FaRegUser />
          </div>
          <div>
            <h3>{room.title}</h3>
            <p>{roomDescriptions[room.id] || room.description}</p>
          </div>
        </div>

        <div className="rooms-amenities" aria-label={`${room.title} amenities`}>
          {amenities.map((amenity, index) => {
            const Icon = amenityIcons[index]

            return (
              <div className="rooms-amenity" key={amenity}>
                <Icon aria-hidden="true" />
                <span>{amenity}</span>
              </div>
            )
          })}
        </div>

        <div className="rooms-actions">
          <button className="rooms-book-btn" type="button">
            <span>BOOK NOW</span>
            <FaArrowRight aria-hidden="true" />
          </button>
          <Link className="rooms-details-btn" to="/rooms">
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Rooms() {
  const sliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: false,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 12,
    centerMode: false,
    variableWidth: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <motion.section
      className="rooms"
      id="rooms"
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="rooms-container">
        <header className="rooms-heading">
          <p className="rooms-eyebrow">OUR ROOMS</p>

          <div className="rooms-divider" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>

          <h2>
            Suites Designed for <em>Comfort</em>
          </h2>

          <p className="rooms-intro">
            Experience elegance, comfort, and world-class hospitality in our thoughtfully designed rooms and suites.
          </p>

          <Link className="rooms-view-all" to="/rooms">
            <FaThLarge aria-hidden="true" />
            <span>VIEW ALL ROOMS</span>
          </Link>
        </header>

        <div className="rooms-slider-shell">
          <Slider ref={sliderRef} {...settings} className="rooms-slider">
            {roomData.map(room => (
              <div className="rooms-slide" key={room.id}>
                <RoomShowcaseCard room={room} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="rooms-slider-controls" aria-label="Rooms slider controls">
          <button
            className="rooms-control"
            type="button"
            aria-label="Previous room"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <FaArrowLeft aria-hidden="true" />
          </button>

          <div className="rooms-dots" role="tablist" aria-label="Select room slide">
            {roomData.map((room, index) => (
              <button
                className={currentSlide % roomData.length === index ? 'is-active' : ''}
                type="button"
                key={room.id}
                aria-label={`Show ${room.title}`}
                aria-selected={currentSlide % roomData.length === index}
                onClick={() => sliderRef.current?.slickGoTo(index)}
              />
            ))}
          </div>

          <button
            className="rooms-control"
            type="button"
            aria-label="Next room"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.section>
  )
}
