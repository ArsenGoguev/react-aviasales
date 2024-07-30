import { SORT_TICKETS, updateDisplayedTicketList } from '../actions/actions.js'

const updateSortingTypeMiddleware = (store) => (next) => (action) => {
  if (action.type === SORT_TICKETS) {
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
