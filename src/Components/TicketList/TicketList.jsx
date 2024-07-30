import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as generateId } from 'uuid'

import Ticket from '../Ticket/Ticket.jsx'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'
import ErrorMsg from '../ErrorMsg/ErrorMsg.jsx'
import WarningMsg from '../WarningMsg/WarningMsg.jsx'
import sortTickets from '../../utils/sortUtils.js'
import filterTickets from '../../utils/filterUtils.js'
import Button from '../Button/Button.jsx'

export default function TicketList() {
  const { tickets, loadingStatus, errorStatus } = useSelector((state) => state.api)
  const { ticketCount, sortingType } = useSelector((state) => state)
  const filters = useSelector((state) => state.filters)

  const ticketsArray = sortTickets(filterTickets(tickets, filters), sortingType).slice(0, ticketCount)
  const ticketList = ticketsArray.map((ticket) => <Ticket key={generateId()} ticketInfo={ticket} />)

  if (ticketList.length === 0 && !loadingStatus) return <WarningMsg />

  return (
    <>
      <div>
        {loadingStatus && <LoadingSpinner />}
        {errorStatus && <ErrorMsg />}
        {ticketList}
      </div>
      {ticketList.length > 0 && <Button />}
    </>
  )
}
