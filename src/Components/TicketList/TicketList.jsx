import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as generateId } from 'uuid'

import Ticket from '../Ticket/Ticket.jsx'
import Sort from '../Sort/Sort.jsx'
import ShowMore from '../ShowMore/ShowMore.jsx'

import styles from './TicketList.module.scss'

export default function TicketList() {
  let ticketsArray = []
  const loadingStatus = useSelector((state) => state.api.loadingStatus)
  const ticketListForRender = useSelector((state) => state.ticketList.showedTickets)

  if (!loadingStatus) {
    ticketsArray = ticketListForRender.map((ticket) => <Ticket key={generateId()} ticketInfo={ticket} />)
  }

  return (
    <div className={styles['ticket-list']}>
      <Sort />
      {ticketsArray}
      <ShowMore />
    </div>
  )
}
