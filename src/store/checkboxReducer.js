/* eslint-disable indent */
const defaultState = { checkboxes: [] }

const SELECT_CHECKBOX = 'SELECT_CHECKBOX'
const UNSELECT_CHECKBOX = 'SORT_BY_SPEED'

export default function checkboxReducer(state = defaultState, action) {
  switch (action.type) {
    case SELECT_CHECKBOX:
      return { ...state, checkboxes: [...state.checkboxes, action.payload] }
    case UNSELECT_CHECKBOX:
      return { ...state, checkboxes: state.checkboxes.filter((filter) => filter.id !== action.payload) }
    default:
      return state
  }
}
