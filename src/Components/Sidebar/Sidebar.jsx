import React from 'react'

import styles from './Sidebar.module.scss'

export default function Sidebar() {
  return (
    <ul className={styles.sidebar}>
      <span className={styles.sidebar__header}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'].map((item) => (
        <li key={item} className={styles['sidebar__item-wrapper']}>
          <div className={styles.sidebar__item}>
            <input type="checkbox" className={styles['sidebar__custom-checkbox']} />
            <div className={styles.sidebar__checkbox}>
              <div className={styles.sidebar__checkmark} />
            </div>
            {item}
          </div>
        </li>
      ))}
    </ul>
  )
}
