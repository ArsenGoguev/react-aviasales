/* eslint-disable indent */
import { SORT_TICKETS } from '../actions/actions.js'

const defaultState = ''

export default function sortReducer(state = defaultState, action) {
  switch (action.type) {
    case SORT_TICKETS:
      return state === action.payload ? '' : action.payload
    default:
      return state
  }
}
