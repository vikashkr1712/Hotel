import './Services.css'
import fitnessIcon from '../../../assets/images/services/logo_1.png'
import jacuzziIcon from '../../../assets/images/services/logo_2.png'
import poolIcon from '../../../assets/images/services/logo_3.png'
import spaIcon from '../../../assets/images/services/logo_5.png'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Fitness Center',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...',
      icon: fitnessIcon
    },
    {
      id: 2,
      title: 'Jacuzzi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...',
      icon: jacuzziIcon
    },
    {
      id: 3,
      title: 'Swimming Pool',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...',
      icon: poolIcon
    },
    {
      id: 4,
      title: 'SPA Treatments',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...',
      icon: spaIcon
    }
  ]

  return (
    <section className="services" id="services">
      <div className="services-container">
        {/* Left Column */}
        <div className="services-content">
          <div className="services-badge">
            <span>Hotel Services</span>
          </div>

          <h2 className="services-title">Get The Best Hotel Grandeur Services</h2>

          <p className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictumst eu, humilis ac. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          </p>

          <button className="services-btn">View All</button>
        </div>

        {/* Right Column - Services Grid */}
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
