import './Rooms.css'
import { MdCheckCircle } from 'react-icons/md'

export default function RoomCard({ room }) {
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

        <button className="room-btn">Book Now</button>
      </div>
    </div>
  )
}
