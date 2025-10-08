import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Technology from './pages/Technology'
import Roadmap from './pages/Roadmap'
import Join from './pages/Join'
import Updates from './pages/Updates'
import Press from './pages/Press'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vision' element={<Vision/>} />
          <Route path='/technology' element={<Technology/>} />
          <Route path='/roadmap' element={<Roadmap/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/updates' element={<Updates/>} />
          <Route path='/press' element={<Press/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
