// import React from 'react'
// import Navbar from './components/Navbar'
// import Coupens from './components/Coupens'
// import Footer from './components/Footer'
// import  Menu  from './components/Menu'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import AboutUs from './pages/AboutUs'
// import MenuPage from './pages/MenuPage'
// import Blog from './pages/Blog'
// import ContactUs from './pages/ContactUs'
// import NewArrival from './pages/NewArrival'
// import Order from './pages/Order'


// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <div className='w-full bg-[#f7f1e9]'>
//         <Coupens/>
//       </div>
//       <Menu/>
//       <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/aboutus" element={<AboutUs />} />
//          <Route path="/menupage" element={<MenuPage />} />
//          <Route path="/blog" element={<Blog />} /> 
//          <Route path="/contactus" element={<ContactUs />} />
//          <Route path="/newarrival" element={<NewArrival />} />
//          <Route path='/order' element={<Order/>}/>
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App




import React from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Popular from './components/Popular'
import Footer from './components/Footer'
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import MenuPage from './pages/MenuPage'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import NewArrival from './pages/NewArrival'
import Order from './pages/Order'
import Gallery from './pages/Gallery'



const App = () => {
  return (
    <div>

      {/* ✅ Navbar ALWAYS VISIBLE */}
      <Navbar />

      {/* ✅ ROUTES */}
      <Routes>
        {/* ✅ HOME PAGE */}
        <Route path="/" element={
            <>
            <HeroSlider/>
              <div className='w-full bg-[#f7f1e9]'>
                <Popular />
              </div>
              <Menu />
            </>
          } 
        />

        {/* ✅ OTHER PAGES — ONLY SHOW PAGE CONTENT */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menupage" element={<MenuPage />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/newarrival" element={<NewArrival />} />
        <Route path="/order" element={<Order />} />
      </Routes>

      {/* ✅ Footer ALWAYS VISIBLE */}
      <Footer />

    </div>
  )
}

export default App
