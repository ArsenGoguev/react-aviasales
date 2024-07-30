import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { displayMoreTickets } from '../../store/slices.js'

import styles from './Button.module.scss'

export default function Button() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.api.tickets)

  return (
    <button tabIndex="3" type="button" className={styles.button} onClick={() => dispatch(displayMoreTickets(tickets))}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </button>
  )
}
