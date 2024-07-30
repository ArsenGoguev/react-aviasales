import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as generateId } from 'uuid'

import Ticket from '../Ticket/Ticket.jsx'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'
import ErrorMsg from '../ErrorMsg/ErrorMsg.jsx'
import WarningMsg from '../WarningMsg/WarningMsg.jsx'
import sortTickets from '../../utils/sortUtils.js'
import filterTickets from '../../utils/filterUtils.js'

export default function TicketList() {
  const error = useSelector((state) => state.api.errorStatus)
  const loading = useSelector((state) => state.api.loadingStatus)
  const tickets = useSelector((state) => state.api.tickets)
  const ticketCount = useSelector((state) => state.ticketCount)
  const sortType = useSelector((state) => state.sortingType)
  const filters = useSelector((state) => state.filters)
  const ticketsArray = sortTickets(filterTickets(tickets, filters), sortType).slice(0, ticketCount)
  const ticketList = ticketsArray.map((ticket) => <Ticket key={generateId()} ticketInfo={ticket} />)

  if (ticketList.length === 0 && !loading) return <WarningMsg />

  return (
    <div>
      {loading && <LoadingSpinner />}
      {error && <ErrorMsg />}
      {ticketList}
    </div>
  )
}
