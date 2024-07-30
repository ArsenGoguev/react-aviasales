import { DISPLAY_TICKETS, UPDATE_DISPLAYED_TICKET_LIST, DISPLAY_MORE_TICKETS } from '../actions/actions.js'

const sortTicketList = (tickets, sortingType, ticketCount) => {
  const getDuration = (ticket) => ticket.segments.reduce((acc, segment) => acc + segment.duration, 0)

  return [...tickets]
    .sort((a, b) => {
      switch (sortingType) {
        case 'cheap':
          return a.price - b.price
        case 'speed':
          return getDuration(a) - getDuration(b)
        case 'optimal':
          return a.price + getDuration(a) - (b.price + getDuration(b))
        default:
          return 0
      }
    })
    .slice(0, ticketCount)
}

const createSortedAction = (type, tickets, sortType, ticketCount) => {
  const sortedTickets = sortTicketList(tickets, sortType, ticketCount)
  return {
    type,
    payload: sortedTickets
  }
}

const displayTicketsMiddleware = (store) => (next) => (action) => {
  if ([DISPLAY_MORE_TICKETS, UPDATE_DISPLAYED_TICKET_LIST, DISPLAY_TICKETS].includes(action.type)) {
    const state = store.getState()
    const { sortType } = state
    const { ticketCount } = state.ticketList

    if (action.type === DISPLAY_MORE_TICKETS) {
      const newAction = {
        type: DISPLAY_MORE_TICKETS,
        payload: sortTicketList(action.payload, sortType, ticketCount + 5).slice(ticketCount, ticketCount + 5)
      }
      return next(newAction)
    }
    if (action.type === UPDATE_DISPLAYED_TICKET_LIST) {
      const newAction = {
        type: UPDATE_DISPLAYED_TICKET_LIST,
        payload: sortTicketList(action.payload.tickets, action.payload.sortType, ticketCount)
      }
      return next(newAction)
    }
    return next(createSortedAction(action.type, action.payload, sortType, ticketCount))
  }
  return next(action)
}

export default displayTicketsMiddleware
