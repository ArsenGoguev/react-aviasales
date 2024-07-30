import { createSlice, combineReducers } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    all: true,
    without: true,
    one: true,
    two: true,
    three: true
  },
  reducers: {
    filterTicketList(state, action) {
      const filter = action.payload
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
  }
})

const listSlice = createSlice({
  name: 'ticketCount',
  initialState: 5,
  reducers: {
    displayMoreTickets(state) {
      return state + 5
    }
  }
})

const sortSlice = createSlice({
  name: 'sortingType',
  initialState: '',
  reducers: {
    sortTickets(state, action) {
      return state === action.payload ? '' : action.payload
    }
  }
})

const ticketsSlice = createSlice({
  name: 'api',
  initialState: {
    tickets: [],
    loadingStatus: true,
    errorStatus: false
  },
  reducers: {
    saveData(state, action) {
      return { ...state, loadingStatus: !action.payload.stop, tickets: [...state.tickets, ...action.payload.tickets] }
    },
    setErrorStatus(state, action) {
      return { ...state, errorStatus: action.payload }
    }
  }
})

export const { filterTicketList } = filterSlice.actions
export const { displayMoreTickets } = listSlice.actions
export const { sortTickets } = sortSlice.actions
export const { saveData, setErrorStatus } = ticketsSlice.actions

const rootReducer = combineReducers({
  sortingType: sortSlice.reducer,
  filters: filterSlice.reducer,
  api: ticketsSlice.reducer,
  ticketCount: listSlice.reducer
})

export default rootReducer
