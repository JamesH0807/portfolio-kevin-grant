import React from 'react'

import styles from './ContactPage.module.scss'

const contactInfo = [
  {
    icon: 'fa fa-envelope',
    title: 'Email Address',
    content: 'kevingrant.0301@gmail.com',
  },
  {
    icon: 'fa fa-phone',
    title: 'Phone Number',
    content: '+1 (727) 266-6677',
  },
  {
    icon: 'fa fa-linkedin',
    title: 'Linkedin',
    content: 'linkedin.com/in/kevin-grant-25176123b',
  },
  {
    icon: 'fa fa-github',
    title: 'Github Profile',
    content: 'github.com/KevinGrant-dev',
  },
  {
    icon: 'fa fa-telegram',
    title: 'Telegram',
    content: 't.me/KevinGrant0301',
  },
  {
    icon: 'fa fa-skype',
    title: 'Skype ID',
    content: 'live:.cid.946f12e8c5a71b06',
  },
]

const ContactPage = () => {
  return (
    <div className={styles.contactpage}>
      <div className='container'>
        <h1 className='theme-color'>CONTACT ME</h1>
        <h2>Always open to work (remote preferred)</h2>
        <div className='contact-item'>
          {contactInfo.map((item, index) => (
            <div className='item' key={index}>
              <i className={item.icon}></i>
              <div className='info'>
                <h3 className='info-title'>{item.title}</h3>
                <p className='info-content'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
