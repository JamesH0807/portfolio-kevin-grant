import React from 'react'

import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className='container'>
        <div className='content'>
          <h1 className='title'>
            <span className='theme-color'>Hello!</span>
            <br />
            I'm Kevin Grant
          </h1>
          <p className='description'>
            Senior Full Stack Developer specialized in <br />
            <strong>
              <span className='theme-color'>React-Node</span>
            </strong>{' '}
            Stack and{' '}
            <strong>
              <span className='theme-color'>Smart Contract</span>
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
