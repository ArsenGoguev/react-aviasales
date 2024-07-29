import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortByCheapness, sortBySpeed, sortByOptimality, updateShowedTickets } from '../../store/actions/actions.js'

import styles from './Sort.module.scss'

export default function Sort() {
  const dispatch = useDispatch()
  const activeSortingButton = useSelector((state) => state.sort)
  const tickets = useSelector((state) => state.api.tickets)

  const handleSort = (sortAction, sortType) => {
    dispatch(sortAction)
    dispatch(updateShowedTickets(tickets, sortType))
  }

  const sortButtons = [
    { key: 'cheap', label: 'САМЫЙ ДЕШЕВЫЙ', action: sortByCheapness() },
    { key: 'speed', label: 'САМЫЙ БЫСТРЫЙ', action: sortBySpeed() },
    { key: 'optimal', label: 'ОПТИМАЛЬНЫЙ', action: sortByOptimality() }
  ]

  return (
    <div className={styles.sort}>
      {sortButtons.map(({ key, label, action }) => (
        <button
          key={key}
          type="button"
          className={`${styles.sort__item} ${activeSortingButton === key ? styles['sort__item--active'] : ''}`}
          onClick={() => handleSort(action, key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
