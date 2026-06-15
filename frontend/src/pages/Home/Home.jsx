import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import Hero from '../../components/sections/Hero/Hero'
import BookingBar from '../../components/sections/BookingBar/BookingBar'
import About from '../../components/sections/About/About'
import Rooms from '../../components/sections/Rooms/Rooms'
import Services from '../../components/sections/Services/Services'
import Testimonials from '../../components/sections/Testimonials/Testimonials'

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <BookingBar />
      <About />
      <Rooms />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}
