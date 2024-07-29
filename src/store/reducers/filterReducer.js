/* eslint-disable indent */
import { TOGGLE_FILTER } from '../actions/actions.js'

const defaultState = {
  all: false,
  without: false,
  one: false,
  two: false,
  three: false
}

function filterState(state, filter) {
  const isAll = state.all
  const newState = { ...state, [filter]: !state[filter] }
  const { all, ...remainingFilters } = newState

  if (filter === 'all') {
    const newAllState = !isAll
    return {
      all: newAllState,
      without: newAllState,
      one: newAllState,
      two: newAllState,
      three: newAllState
    }
  }

  if (state.all && state[filter]) return { ...newState, all: false }
  if (!isAll && Object.values(remainingFilters).every(Boolean)) return { ...newState, all: true, [filter]: true }
  return newState
}

export default function filterReducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return filterState(state, action.payload)
    default:
      return state
  }
}
