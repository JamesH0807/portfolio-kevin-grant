import React from 'react'

import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className='container content'>
        <h1 className='title'>Full-Stack Developer</h1>
        <h2 className='description'>
          Talented and skilled developer with solid experience in{' '}
          <strong>React-Node</strong> Stack as well as{' '}
          <strong>Smart Contract</strong> and other latest technologies
        </h2>
        <div className='network'>
          <a
            href='https://linkedin.com/in/kevin-grant-25176123b'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-linkedin'></i>
          </a>
          <a
            href='https://github.com/KevinGrant-dev'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage
