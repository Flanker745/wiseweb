import React from 'react'
import Header from './components/Header'
import Feedback from './components/Feedback'
import Hero from './components/Hero'
import ServiceCards from './components/ServiceCards'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
       <div className='relative'>
       <Header/>   
       <Hero/>
       <ServiceCards/>
       <AboutUs/>
       <Feedback/>
       </div>
         </>
  )
}

export default App