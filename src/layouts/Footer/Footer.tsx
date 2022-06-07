import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

const navigate = [
  { link: '/', text: 'Home' },
  { link: '/about', text: 'About' },
  { link: '/service', text: 'Service' },
  { link: '/resume', text: 'Resume' },
  { link: '/portfolio', text: 'Portfolio' },
  { link: '/contact', text: 'Contact' },
]

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <ul className='nav-menu'>
          {navigate.map((item, index) => (
            <li className={'nav-item'} key={index}>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <p className='footer-text'>&copy; 2022 Kevin Grant. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
