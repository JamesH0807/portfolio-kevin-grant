import React from 'react'
import { Line } from 'rc-progress'

import styles from './SkillItem.module.scss'

type Props = {
  data: {
    name: string
    percent: number
  }
}

const SkillItem: React.FC<Props> = ({ data }) => {
  const { name, percent } = data
  return (
    <div className={styles.skillitem}>
      <span>{name}</span>
      <Line percent={percent} strokeWidth={2} strokeColor={'#23C86F'}/>
    </div>
  )
}

export default SkillItem
