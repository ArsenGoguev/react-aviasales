/* eslint-disable indent */
import { SET_INITIAL_DISPLAYED_TICKETS, SHOW_MORE_TICKETS, UPDATE_SHOWED_TICKETS } from '../actions/actions.js'

const defaultState = {
  ticketCount: 5,
  showedTickets: []
}

export default function listReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_MORE_TICKETS:
      return {
        ...state,
        ticketCount: state.ticketCount + 5,
        showedTickets: [...state.showedTickets, ...action.payload]
      }
    case SET_INITIAL_DISPLAYED_TICKETS:
      return { ...state, showedTickets: action.payload.slice(0, state.ticketCount) }
    case UPDATE_SHOWED_TICKETS:
      return { ...state, showedTickets: action.payload }
    default:
      return state
  }
}
