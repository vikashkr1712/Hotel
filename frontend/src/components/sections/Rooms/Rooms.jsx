import './Rooms.css'
import RoomCard from './RoomCard'
import { roomData } from '../../../data/roomData'

export default function Rooms() {
  return (
    <section className="rooms" id="rooms">
      <div className="rooms-container">
        <div className="rooms-header">
          <div>
            <div className="rooms-badge">
              <span>Room Type</span>
            </div>
            <h2 className="rooms-title">The Best Luxury Rooms and Suites</h2>
          </div>
          <button className="see-all-btn">See All Rooms</button>
        </div>

        <div className="rooms-grid">
          {roomData.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  )
}
