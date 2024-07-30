import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as generateId } from 'uuid'

import Ticket from '../Ticket/Ticket.jsx'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'
import ErrorMsg from '../ErrorMsg/ErrorMsg.jsx'

import styles from './TicketList.module.scss'

export default function TicketList() {
  const error = useSelector((state) => state.api.errorStatus)
  const ticketListForRender = useSelector((state) => state.ticketList.showedTickets)
  const loading = useSelector((state) => state.api.loadingStatus)
  const ticketsArray = ticketListForRender.map((ticket) => <Ticket key={generateId()} ticketInfo={ticket} />)

  return (
    <div className={styles['ticket-list']}>
      {!loading && <LoadingSpinner />}
      {error && <ErrorMsg />}
      {ticketsArray}
    </div>
  )
}
