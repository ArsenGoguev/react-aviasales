import React from 'react'

import styles from './Filters.module.scss'

export default function Filters() {
  return (
    <div className={styles.filters}>
      {['САМЫЙ ДЕШЕВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ'].map((item) => (
        <div key={item} className={styles.filters__item}>
          {item}
        </div>
      ))}
    </div>
  )
}
