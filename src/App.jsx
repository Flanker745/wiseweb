import React from 'react'
import Header from './components/Header'
import Feedback from './components/Feedback'
import Hero from './components/Hero'

function App() {
  return (
    <>
       <div className='relative'>
       <Header/>   
       <Hero/>
       <Feedback/>
       </div>
         </>
  )
}

export default App