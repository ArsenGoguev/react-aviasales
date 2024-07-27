import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Sort.module.scss'

export default function Sort() {
  const dispatch = useDispatch()
  const activeSortingButton = useSelector((state) => state.sort.sort)

  return (
    <div className={styles.sort}>
      <button
        type="button"
        className={`${styles.sort__item} ${activeSortingButton === 'cheap' ? styles['sort__item--active'] : ''}`}
        onClick={() => dispatch({ type: 'SORT_BY_CHEAPNESS' })}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={`${styles.sort__item} ${activeSortingButton === 'speed' ? styles['sort__item--active'] : ''}`}
        onClick={() => dispatch({ type: 'SORT_BY_SPEED' })}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className={`${styles.sort__item} ${activeSortingButton === 'optimal' ? styles['sort__item--active'] : ''}`}
        onClick={() => dispatch({ type: 'SORT_BY_OPTIMALITY' })}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}
