import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

const navigate = [
  { link: '/', text: 'Home' },
  { link: '/about', text: 'About' },
  { link: '/service', text: 'Service' },
  { link: '/resume', text: 'Resume' },
  { link: '/portfolio', text: 'Portfolio' },
]

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>('')

  return (
    <div className={styles.header}>
      <nav className='container'>
        <ul className='logo'>
          <Link
            to='/'
            className='logo-title'
            onClick={() => setActiveItem('Home')}
          >
            <strong>Kevin Grant</strong>
          </Link>
        </ul>
        <ul className='nav-menu'>
          {navigate.map((item, index) => (
            <li
              className={`nav-item ${item.text === activeItem ? 'active' : ''}`}
              key={index}
              onClick={() => setActiveItem(item.text)}
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
          <Link
            to='/contact'
            className='contact-link'
            onClick={() => setActiveItem('Contact')}
          >
            CONTACT
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
