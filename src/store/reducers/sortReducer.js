/* eslint-disable indent */
import { SORT_BY_CHEAPNESS, SORT_BY_SPEED, SORT_BY_OPTIMALITY } from '../actions/actions.js'

const defaultState = ''

export default function sortReducer(state = defaultState, action) {
  switch (action.type) {
    case SORT_BY_CHEAPNESS:
      return state === action.payload ? '' : action.payload
    case SORT_BY_SPEED:
      return state === action.payload ? '' : action.payload
    case SORT_BY_OPTIMALITY:
      return state === action.payload ? '' : action.payload
    default:
      return state
  }
}
