/* eslint-disable indent */
const defaultState = {
  all: false,
  without: false,
  one: false,
  two: false,
  three: false
}

const TOGGLE_FILTER = 'TOGGLE_FILTER'

function toggleFilter(state, filter) {
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
      return toggleFilter(state, action.key)
    default:
      return state
  }
}
