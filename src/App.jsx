import { useState } from 'react'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Courses from './routes/Courses'
import Memberships from './routes/Memberships'
import Community from './routes/Community'
import Contact from './routes/Contact'

function App() {


  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/community" element={<Community />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
   </>
  )
}

export default App
