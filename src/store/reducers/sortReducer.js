/* eslint-disable indent */
import { SORT_BY_CHEAPNESS, SORT_BY_SPEED, SORT_BY_OPTIMALITY } from '../actions/actions.js'

const defaultState = ''

export default function sortReducer(state = defaultState, action) {
  switch (action.type) {
    case SORT_BY_CHEAPNESS:
      if (state === 'cheap') return ''
      return 'cheap'
    case SORT_BY_SPEED:
      if (state === 'speed') return ''
      return 'speed'
    case SORT_BY_OPTIMALITY:
      if (state === 'optimal') return ''
      return 'optimal'
    default:
      return state
  }
}
