/* eslint-disable indent */
import { DISPLAY_MORE_TICKETS } from '../actions/actions.js'

const defaultState = 5

export default function listReducer(state = defaultState, action) {
  switch (action.type) {
    case DISPLAY_MORE_TICKETS:
      return state + 5
    default:
      return state
  }
}
