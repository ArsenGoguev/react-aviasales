import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as generateId } from 'uuid'

import Ticket from '../Ticket/Ticket.jsx'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'
// import Error from '../Error/Error.jsx'

import styles from './TicketList.module.scss'

export default function TicketList() {
  const ticketListForRender = useSelector((state) => state.ticketList.showedTickets)
  const loading = useSelector((state) => state.api.loadingStatus)
  const ticketsArray = ticketListForRender.map((ticket) => <Ticket key={generateId()} ticketInfo={ticket} />)

  return (
    <div className={styles['ticket-list']}>
      {!loading && <LoadingSpinner />}
      {/* <Error /> */}
      {ticketsArray}
    </div>
  )
}
