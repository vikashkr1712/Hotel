import { useState } from 'react'
import './BookingBar.css'
import { motion } from 'framer-motion'

export default function BookingBar() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    room: '',
    adults: '',
    children: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking form submitted:', formData)
  }

 return (

<motion.section

className="booking-bar"

initial={{opacity:0,y:100}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{

once:true,

amount:0.3

}}

>

<div className="booking-container">

<form

className="booking-form"

onSubmit={handleSubmit}

>

<div className="booking-field">

<label htmlFor="checkIn">

Check In

</label>

<input

type="date"

id="checkIn"

name="checkIn"

value={formData.checkIn}

onChange={handleChange}

required

/>

</div>

<div className="booking-field">

<label htmlFor="checkOut">

Check Out

</label>

<input

type="date"

id="checkOut"

name="checkOut"

value={formData.checkOut}

onChange={handleChange}

required

/>

</div>

<div className="booking-field">

<label htmlFor="room">

Room

</label>

<select

id="room"

name="room"

value={formData.room}

onChange={handleChange}

required

>

<option value="">

Select Room

</option>

<option value="single">

Single Room

</option>

<option value="double">

Double Room

</option>

<option value="family">

Family Room

</option>

<option value="suite">

Suite

</option>

</select>

</div>

<div className="booking-field">

<label htmlFor="adults">

Adults

</label>

<select

id="adults"

name="adults"

value={formData.adults}

onChange={handleChange}

required

>

<option value="">

Select

</option>

<option value="1">

1 Adult

</option>

<option value="2">

2 Adults

</option>

<option value="3">

3 Adults

</option>

<option value="4">

4 Adults

</option>

</select>

</div>

<div className="booking-field">

<label htmlFor="children">

Children

</label>

<select

id="children"

name="children"

value={formData.children}

onChange={handleChange}

required

>

<option value="">

Select

</option>

<option value="0">

0

</option>

<option value="1">

1 Child

</option>

<option value="2">

2 Children

</option>

<option value="3">

3+ Children

</option>

</select>

</div>

<button

type="submit"

className="booking-btn"

>

Check Now

</button>

</form>

</div>

</motion.section>

)
}
