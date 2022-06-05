import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Header from './layouts/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
