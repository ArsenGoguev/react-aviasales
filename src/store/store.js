/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import sortReducer from './reducers/sortReducer.js'
import filterReducer from './reducers/filterReducer.js'
import ticketsReducer from './reducers/ticketsReducer.js'
import listReducer from './reducers/listReducer.js'

const reducer = combineReducers({
  sortingType: sortReducer,
  filters: filterReducer,
  api: ticketsReducer,
  ticketCount: listReducer
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
