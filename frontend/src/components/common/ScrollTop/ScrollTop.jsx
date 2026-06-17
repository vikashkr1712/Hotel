import './ScrollTop.css'

import { useState,useEffect } from 'react'

import { FaArrowUp } from 'react-icons/fa'

export default function ScrollTop(){

const [showButton,setShowButton]=useState(false)

useEffect(()=>{

const handleScroll=()=>{

if(window.scrollY>500){

setShowButton(true)

}

else{

setShowButton(false)

}

}

window.addEventListener('scroll',handleScroll)

return ()=>window.removeEventListener('scroll',handleScroll)

},[])

const scrollToTop=()=>{

window.scrollTo({

top:0,

behavior:'smooth'

})

}

return(

showButton && (

<button

className="scroll-top"

onClick={scrollToTop}

>

<FaArrowUp/>

</button>

)

)

}