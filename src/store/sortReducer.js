/* eslint-disable indent */
const defaultState = { sort: '' }

const SORT_BY_CHEAPNESS = 'SORT_BY_CHEAPNESS'
const SORT_BY_SPEED = 'SORT_BY_SPEED'
const SORT_BY_OPTIMALITY = 'SORT_BY_OPTIMALITY'

export default function sortReducer(state = defaultState, action) {
  switch (action.type) {
    case SORT_BY_CHEAPNESS:
      return { ...state, sort: 'cheap' }
    case SORT_BY_SPEED:
      return { ...state, sort: 'speed' }
    case SORT_BY_OPTIMALITY:
      return { ...state, sort: 'optimal' }
    default:
      return state
  }
}
