import './Rooms.css'
import { MdCheckCircle } from 'react-icons/md'
import { useState } from 'react'

export default function RoomCard({ room }) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className="room-card">
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

  <button className="room-btn">
    Book Now
  </button>

  <button
    className="room-details-btn"

    onClick={() => setShowDetails(!showDetails)}
  >
    {showDetails ? 'Hide Details' : 'View Details'}
  </button>

</div>

{showDetails && (

<div className="room-extra-details">

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

</div>

)}
      </div>
    </div>
  )
}
