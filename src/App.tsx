import React from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './layouts/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'

import './App.scss'

function App() {
  const location = useLocation()

  return (
    <div className='App'>
      <Header />
      <main>
        <TransitionGroup>
          <CSSTransition timeout={400} classNames='fade' key={location.key}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  )
}

export default App
