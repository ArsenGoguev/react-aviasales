/* eslint-disable indent */
import { SAVE_DATA, SET_ERROR_STATUS } from '../actions/actions.js'

const defaultState = {
  tickets: [],
  loadingStatus: true,
  errorStatus: false
}

export default function ticketsReducer(state = defaultState, action) {
  switch (action.type) {
    case SAVE_DATA:
      return { ...state, loadingStatus: !action.payload.stop, tickets: [...state.tickets, ...action.payload.tickets] }
    case SET_ERROR_STATUS:
      return { ...state, errorStatus: action.payload }
    default:
      return state
  }
}
