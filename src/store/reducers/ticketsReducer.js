/* eslint-disable indent */
import { SAVE_API_KEY, SAVE_RESPONSE_STATUS, SAVE_TICKETS } from '../actions/actions.js'

const defaultState = {
  searchId: '',
  tickets: [],
  loadingStatus: false
}

export default function ticketsReducer(state = defaultState, action) {
  switch (action.type) {
    case SAVE_API_KEY:
      return { ...state, searchId: action.payload }
    case SAVE_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] }
    case SAVE_RESPONSE_STATUS:
      return { ...state, loadingStatus: action.payload }
    default:
      return state
  }
}
