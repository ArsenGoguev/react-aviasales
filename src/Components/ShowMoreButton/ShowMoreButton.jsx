import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { displayMoreTickets } from '../../store/actions/actions.js'

import styles from './ShowMoreButton.module.scss'

export default function ShowMoreButton() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.api.tickets)

  return (
    <button type="button" className={styles['show-more']} onClick={() => dispatch(displayMoreTickets(tickets))}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </button>
  )
}
