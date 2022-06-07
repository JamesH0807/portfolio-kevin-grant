import React from 'react'
import SkillItem from '../../components/SkillItem'

import styles from './AboutPage.module.scss'

const skills = [
  {
    name: 'React (8 years)',
    percent: 95,
  },
  {
    name: 'Vue (6 years)',
    percent: 85,
  },
  {
    name: 'Angular (3 years)',
    percent: 70,
  },
  {
    name: 'HTML & CSS (over 10 years)',
    percent: 100,
  },
  {
    name: 'Node.js (7 years)',
    percent: 90,
  },
  {
    name: 'C# (4 years)',
    percent: 80,
  },
  {
    name: 'Laravel & PHP (5 years)',
    percent: 85,
  },
  {
    name: 'JavaScript (over 10 years)',
    percent: 100,
  },
  {
    name: 'TypeScript (7 years)',
    percent: 90,
  },
  {
    name: 'Blockchain (4 years)',
    percent: 85,
  },
  {
    name: 'Smart Contract (4 years)',
    percent: 80,
  },
  {
    name: 'Solidity (4 years)',
    percent: 80,
  },
  {
    name: 'MySQL (7 years)',
    percent: 90,
  },
  {
    name: 'MongoDB (5 years)',
    percent: 80,
  },

  {
    name: 'PostgreSQL (3 years)',
    percent: 70,
  },
  {
    name: 'AWS (2 years)',
    percent: 70,
  },
]

const AboutPage = () => {
  return (
    <div className={styles.aboutpage}>
      <div className='container'>
        <div className='content'>
          <div className='content-left'>
            <img src='/images/kevin.png' alt='profile' />
          </div>
          <div className='content-right'>
            <h1>
              <span className='theme-color'>ABOUT ME</span>
            </h1>
            <h2>Full-Stack | Blockchain Developer</h2>
            <p className='description'>
              Talented and skilled developer with solid experience in Full-Stack
              development as well as smart contract and other latest
              technologies
            </p>
          </div>
        </div>
        <div className='skills'>
          <h2>MY SKILL</h2>
          <div className='skill-content'>
            {skills.map((skill, index) => (
              <SkillItem data={skill} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
