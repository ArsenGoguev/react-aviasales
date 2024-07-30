/* eslint-disable indent */
import { UPDATE_DISPLAYED_TICKET_LIST, DISPLAY_TICKETS, DISPLAY_MORE_TICKETS } from '../actions/actions.js'

const defaultState = {
  ticketCount: 5,
  showedTickets: []
}

export default function listReducer(state = defaultState, action) {
  switch (action.type) {
    case DISPLAY_MORE_TICKETS:
      return {
        ...state,
        ticketCount: state.ticketCount + 5,
        showedTickets: [...state.showedTickets, ...action.payload]
      }
    case DISPLAY_TICKETS:
      return { ...state, showedTickets: action.payload.slice(0, state.ticketCount) }
    case UPDATE_DISPLAYED_TICKET_LIST:
      return { ...state, showedTickets: action.payload }
    default:
      return state
  }
}
