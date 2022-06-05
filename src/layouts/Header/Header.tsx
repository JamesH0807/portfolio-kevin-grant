import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

const navigate = [
  { link: '/', text: 'Home' },
  { link: '/about', text: 'About'},
  { link: '/resume', text: 'Resume' },
  { link: '/portfolio', text: 'Portfolio' },
  { link: '/service', text: 'Service' },
  { link: '/contact', text: 'Contact' },
]

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>('Home')

  return (
    <div className={styles.header}>
      <nav className='d-flex align-items-center'>
        <div className='container d-flex align-items-center justify-content-space-between'>
          <ul>
            <Link to='/' className='nav-title' onClick={() => setActiveItem('Home')}>
              Kevin Grant
            </Link>
          </ul>
          <ul className='d-flex'>
            {navigate.map((item, index) => (
              <li
                className='nav-item'
                key={index}
                onClick={() => setActiveItem(item.text)}
              >
                <Link to={item.link} className={item.text === activeItem ? 'active' : ''}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
