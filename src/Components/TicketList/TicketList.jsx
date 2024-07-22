import React from 'react'

import Ticket from '../Ticket/Ticket.jsx'
import Filters from '../Filters/Filters.jsx'
import ShowMore from '../ShowMore/ShowMore.jsx'

import styles from './TicketList.module.scss'

export default function TicketList() {
  return (
    <div className={styles['ticket-list']}>
      <Filters />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <ShowMore />
    </div>
  )
}
