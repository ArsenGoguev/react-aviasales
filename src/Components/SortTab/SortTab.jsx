import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortTickets } from '../../store/slices.js'

import styles from './SortTab.module.scss'

export default function SortTab() {
  const dispatch = useDispatch()
  const activeSortingButton = useSelector((state) => state.sortingType)

  const sortButtons = [
    { key: 'cheap', label: 'САМЫЙ ДЕШЕВЫЙ' },
    { key: 'speed', label: 'САМЫЙ БЫСТРЫЙ' },
    { key: 'optimal', label: 'ОПТИМАЛЬНЫЙ' }
  ]

  return (
    <div className={styles.sortTab}>
      {sortButtons.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          tabIndex="2"
          className={`${styles.sortTab__item} ${activeSortingButton === key ? styles['sortTab__item--active'] : ''}`}
          onClick={() => dispatch(sortTickets(key))}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
