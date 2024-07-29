import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { showMoreTickets } from '../../store/actions/actions.js'

import styles from './ShowMore.module.scss'

export default function ShowMore() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.api.tickets)
  const sortType = useSelector((state) => state.sort)
  const showedTickets = useSelector((state) => state.ticketList.showedTickets)

  return (
    <button
      type="button"
      className={styles['show-more']}
      onClick={() => dispatch(showMoreTickets(tickets, sortType, showedTickets))}
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </button>
  )
}
