import React, { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortTickets } from '../../store/actions/actions.js'

import styles from './SortTab.module.scss'

export default function SortTab() {
  const dispatch = useDispatch()
  const activeSortingButton = useSelector((state) => state.sortingType)

  const handleSort = useCallback(
    (key) => {
      dispatch(sortTickets(key))
    },
    [dispatch]
  )

  const sortButtons = useMemo(
    () => [
      { key: 'cheap', label: 'САМЫЙ ДЕШЕВЫЙ' },
      { key: 'speed', label: 'САМЫЙ БЫСТРЫЙ' },
      { key: 'optimal', label: 'ОПТИМАЛЬНЫЙ' }
    ],
    []
  )

  return (
    <div className={styles.sortTab}>
      {sortButtons.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          className={`${styles.sortTab__item} ${activeSortingButton === key ? styles['sortTab__item--active'] : ''}`}
          onClick={() => handleSort(key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
