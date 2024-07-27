import React from 'react'

import Ticket from '../Ticket/Ticket.jsx'
import Sort from '../Sort/Sort.jsx'
import ShowMore from '../ShowMore/ShowMore.jsx'

import styles from './TicketList.module.scss'

export default function TicketList() {
  return (
    <div className={styles['ticket-list']}>
      <Sort />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <ShowMore />
    </div>
  )
}
