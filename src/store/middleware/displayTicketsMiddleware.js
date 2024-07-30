import sortTickets from '../../utils/sortUtils.js'
import { DISPLAY_TICKETS, UPDATE_DISPLAYED_TICKET_LIST, DISPLAY_MORE_TICKETS } from '../actions/actions.js'

const displayTicketsMiddleware = (store) => (next) => (action) => {
  if ([DISPLAY_MORE_TICKETS, UPDATE_DISPLAYED_TICKET_LIST, DISPLAY_TICKETS].includes(action.type)) {
    const state = store.getState()
    const { sortType } = state
    const { ticketCount } = state.ticketList

    if (action.type === DISPLAY_MORE_TICKETS) {
      const newAction = {
        type: DISPLAY_MORE_TICKETS,
        payload: sortTickets(action.payload, sortType).slice(ticketCount, ticketCount + 5)
      }
      return next(newAction)
    }
    if (action.type === UPDATE_DISPLAYED_TICKET_LIST) {
      const newAction = {
        type: UPDATE_DISPLAYED_TICKET_LIST,
        payload: sortTickets(action.payload.tickets, action.payload.sortType).slice(0, ticketCount)
      }
      return next(newAction)
    }
    return next({
      type: action.type,
      payload: sortTickets(action.payload, sortType).slice(0, ticketCount)
    })
  }
  return next(action)
}

export default displayTicketsMiddleware
