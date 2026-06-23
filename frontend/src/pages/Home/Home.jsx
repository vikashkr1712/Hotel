import ScrollTop from '../../components/common/ScrollTop/ScrollTop'

import Navbar from '../../components/layout/Navbar/Navbar'

import Footer from '../../components/layout/Footer/Footer'

import Hero from '../../components/sections/Hero/Hero'

import BookingBar from '../../components/sections/BookingBar/BookingBar'

import About from '../../components/sections/About/About'

import Rooms from '../../components/sections/Rooms/Rooms'

import Services from '../../components/sections/Services/Services'

import Testimonials from '../../components/sections/Testimonials/Testimonials'

export default function Home({ theme,toggleTheme }) {

  return (

    <div className="home">

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Hero />

      <BookingBar />

      <About />

      <Services />

      <Rooms />

      <Testimonials />

      <Footer />

      <ScrollTop />

    </div>

  )

}
