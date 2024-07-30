/* eslint-disable indent */
import { SET_RESPONSE_STATUS, SAVE_TICKETS, SET_ERROR_STATUS } from '../actions/actions.js'

const defaultState = {
  tickets: [],
  loadingStatus: false,
  errorStatus: false
}

export default function ticketsReducer(state = defaultState, action) {
  switch (action.type) {
    case SAVE_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] }
    case SET_RESPONSE_STATUS:
      return { ...state, loadingStatus: action.payload }
    case SET_ERROR_STATUS:
      return { ...state, errorStatus: action.payload }
    default:
      return state
  }
}
