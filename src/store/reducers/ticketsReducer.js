/* eslint-disable indent */
import { SAVE_API_KEY, SAVE_RESPONSE_STATUS, SAVE_TICKETS, setShowedTickets } from '../actions/actions.js'

const defaultState = {
  searchId: '',
  tickets: {},
  loadingStatus: true
}

export default function ticketsReducer(state = defaultState, action) {
  switch (action.type) {
    case SAVE_API_KEY:
      return { ...state, searchId: action.payload }
    case SAVE_TICKETS:
      setShowedTickets(action.payload)
      return { ...state, tickets: action.payload }
    case SAVE_RESPONSE_STATUS:
      return { ...state, loadingStatus: action.payload }
    default:
      return state
  }
}
