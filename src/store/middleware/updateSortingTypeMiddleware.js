import { SORT_BY_CHEAPNESS, SORT_BY_OPTIMALITY, SORT_BY_SPEED, updateDisplayedTicketList } from '../actions/actions.js'

const updateSortingTypeMiddleware = (store) => (next) => (action) => {
  if ([SORT_BY_CHEAPNESS, SORT_BY_OPTIMALITY, SORT_BY_SPEED].includes(action.type)) {
    const state = store.getState()
    let sortingType = action.payload
    if (state.sortType === action.payload) sortingType = ''
    store.dispatch(
      updateDisplayedTicketList({
        tickets: state.api.tickets,
        sortType: sortingType
      })
    )
  }
  return next(action)
}

export default updateSortingTypeMiddleware
