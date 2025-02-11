import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterTicketList } from '../../store/slices.js'

import styles from './Sidebar.module.scss'

export default function Sidebar() {
  const dispatch = useDispatch()
  const checkboxes = useSelector((state) => state.filters)

  const filters = [
    { key: 'all', label: 'Все' },
    { key: 'without', label: 'Без пересадок' },
    { key: 'one', label: '1 пересадка' },
    { key: 'two', label: '2 пересадки' },
    { key: 'three', label: '3 пересадки' }
  ]

  const handleKeyPress = (event, key) => {
    if (event.key === 'Enter') {
      dispatch(filterTicketList(key))
    }
  }

  return (
    <ul className={styles.sidebar}>
      <span className={styles.sidebar__header}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {filters.map(({ key, label }) => (
        <li key={key} className={styles['sidebar__item-wrapper']}>
          <label tabIndex="1" onKeyDown={(event) => handleKeyPress(event, key)} className={styles.sidebar__item}>
            <input
              checked={checkboxes[key]}
              type="checkbox"
              className={styles['sidebar__custom-checkbox']}
              onChange={() => dispatch(filterTicketList(key))}
            />
            <span className={styles.sidebar__checkbox} />
            {label}
          </label>
        </li>
      ))}
    </ul>
  )
}
