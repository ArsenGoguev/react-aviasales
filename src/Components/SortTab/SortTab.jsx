import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortByCheapness, sortBySpeed, sortByOptimality } from '../../store/actions/actions.js'

import styles from './SortTab.module.scss'

export default function SortTab() {
  const dispatch = useDispatch()
  const activeSortingButton = useSelector((state) => state.sortType)

  const handleSort = (sortAction, key) => {
    dispatch(sortAction(key))
  }

  const sortButtons = [
    { key: 'cheap', label: 'САМЫЙ ДЕШЕВЫЙ', action: sortByCheapness },
    { key: 'speed', label: 'САМЫЙ БЫСТРЫЙ', action: sortBySpeed },
    { key: 'optimal', label: 'ОПТИМАЛЬНЫЙ', action: sortByOptimality }
  ]

  return (
    <div className={styles.sortTab}>
      {sortButtons.map(({ key, label, action }) => (
        <button
          key={key}
          type="button"
          className={`${styles.sortTab__item} ${activeSortingButton === key ? styles['sortTab__item--active'] : ''}`}
          onClick={() => handleSort(action, key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
