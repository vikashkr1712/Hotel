import './About.css'
import aboutImage from '../../../assets/images/about/2_home.jpg'
import { MdRoom, MdPool, MdWifi, MdSpellcheck } from 'react-icons/md'
import { FaBed, FaUtensils } from 'react-icons/fa'

export default function About() {
  const amenities = [
    {
      id: 1,
      title: '24/7 Room Service',
      icon: <MdRoom className="amenity-icon" />
    },
    {
      id: 2,
      title: 'Infinity Pool',
      icon: <MdPool className="amenity-icon" />
    },
    {
      id: 3,
      title: 'Free High Speed WiFi',
      icon: <MdWifi className="amenity-icon" />
    },
    {
      id: 4,
      title: 'Luxury Spa & Wellness Center',
      icon: <MdSpellcheck className="amenity-icon" />
    },
    {
      id: 5,
      title: 'Complimentary Breakfast',
      icon: <FaUtensils className="amenity-icon" />
    },
    {
      id: 6,
      title: 'City View Suites',
      icon: <FaBed className="amenity-icon" />
    }
  ]

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Hotel Room" />
        </div>

        <div className="about-content">
          <div className="about-badge">
            <span>About grandeur</span>
          </div>

          <h2 className="about-title">World Class Luxury Hotel and Resort Near City</h2>

          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictumst eu, humilis ac. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.
          </p>

          <div className="amenities-grid">
            {amenities.map(amenity => (
              <div key={amenity.id} className="amenity-item">
                {amenity.icon}
                <p>{amenity.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
