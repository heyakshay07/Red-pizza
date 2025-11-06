import React from 'react'
import Navbar from './components/Navbar'
import Coupens from './components/Coupens'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar/>
      <div className='w-full bg-[#f7f1e9]'>
        <Coupens/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
