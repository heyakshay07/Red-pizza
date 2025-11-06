import React from 'react'
import Navbar from './components/Navbar'
import Coupens from './components/Coupens'
import Footer from './components/Footer'
import About from './pages/About'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NewArrival from './pages/NewArrival'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div >
      <Navbar/>
      <div className='w-full bg-[#f7f1e9]'>
        <Coupens/>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/newarrival' element={<NewArrival/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
