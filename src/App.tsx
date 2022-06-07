import React from 'react'

import Header from './layouts/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './layouts/Footer'

import './App.scss'

function App() {

  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
