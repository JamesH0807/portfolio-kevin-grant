import React from 'react'

import styles from './PortfolioPage.module.scss'
import items from './item'

const PortfolioPage = () => {
  return (
    <div className={styles.portfoliopage}>
      <div className='container'>
        <h1 className='theme-color'>Portfolio</h1>
        <div className='item-group'>
          {items.map((item, index) => (
            <div className='item'>
              <img src={item.image_url} alt='portfolio' />
              <div className='item-info'>
                <span className='title'>{item.title}</span>
                <span className='site-url'>{item.site_url}</span>
                <span className='skill-used'>{item.skill_used}</span>
                <span className='detail'>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
