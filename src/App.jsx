import React from 'react'
import Header from './components/Header'
import Feedback from './components/Feedback'
import Hero from './components/Hero'
import ServiceCards from './components/ServiceCards'

function App() {
  return (
    <>
       <div className='relative'>
       <Header/>   
       <Hero/>
       <ServiceCards/>
       <Feedback/>
       </div>
         </>
  )
}

export default App