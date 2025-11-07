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
import Coupens from './components/Coupons'
import FloatingOrderButton from './components/FloatingOrderButton'
import Ourstory from './components/Ourstory'


import Quickies from './pages/Menu/Quickies'
import Bruschetta from './pages/Menu/Bruschetta'
import Pizza from './pages/Menu/Pizza'
import Burger from './pages/Menu/Burger'
import Pasta from './pages/Menu/Pasta'
import Salad from './pages/Menu/Salad'
import Beverages from './pages/Menu/Beverages'
import Dessert from './pages/Menu/Dessert'
import ComboOffer from './pages/Menu/ComboOffer'



const App = () => {
  return (
    <div>

      {/* ✅ Navbar ALWAYS VISIBLE */}
      <Navbar />
       <FloatingOrderButton />

      {/* ✅ ROUTES */}
      <Routes>
        {/* ✅ HOME PAGE */}
        <Route path="/" element={
            <>
            <HeroSlider/>
              <div className='w-full bg-[#f7f1e9]'>
                <Coupens/>
                <Popular />
              <Menu />
                <Ourstory/>
              </div>
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

        {/*Menu*/}
        <Route path='/pages/menu/quickies' element={<Quickies/>}/>
        <Route path='/pages/menu/bruschetta' element={<Bruschetta/>}/>
        <Route path='/pages/menu/pizza' element={<Pizza/>}/>
        <Route path='/pages/menu/burgers' element={<Burger/>}/>
        <Route path='/pages/menu/pasta' element={<Pasta/>}/>
        <Route path='/pages/menu/salad' element={<Salad/>}/>
        <Route path='/pages/menu/beverages' element={<Beverages/>}/>
        <Route path='/pages/menu/dessert' element={<Dessert/>}/>
        <Route path='/pages/menu/combo-offer' element={<ComboOffer/>}/>

      </Routes>
    
      {/* ✅ Footer ALWAYS VISIBLE */}
      <Footer />

    </div>
  )
}

export default App