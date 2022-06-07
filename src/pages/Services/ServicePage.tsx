import React from 'react'

import styles from './ServicePage.module.scss'

const ServicePage = () => {
  return (
    <div className={styles.servicepage}>
      <div className='container'>
        <div className='left-content'>
          <h1 className='theme-color'>Service</h1>
          <h2>What Kind of Service I Provide</h2>
          <p className='description'>
            I provide all services related to react-node stack and blockchain
            developmetn
          </p>
          <div className='service-item'>
            <div className='item'>
              <div className='item-logo'>
                <img src='../../icons/bitcoin.svg' alt='Bitcoin' />
              </div>
              <h3>Web Development</h3>
              <p className='service-detail'>
                React-Redux-Node-React-Redux-Node-React-Redux-Node
              </p>
            </div>
            <div className='item'>
              <div className='item-logo'>
                <img src='../../icons/bitcoin.svg' alt='Bitcoin' />
              </div>
              <h3>Web Development</h3>
              <p className='service-detail'>
                React-Redux-Node-React-Redux-Node-React-Redux-Node
              </p>
            </div>
          </div>
        </div>
        <div className='right-content'>
          <img src='/images/service.png' alt='Service' />
        </div>
      </div>
    </div>
  )
}

export default ServicePage
