/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import sortReducer from './reducers/sortReducer.js'
import filterReducer from './reducers/filterReducer.js'
import ticketsReducer from './reducers/ticketsReducer.js'
import listReducer from './reducers/listReducer.js'
import { apiKeyMiddleware } from './middleware/middleware.js'

const reducer = combineReducers({
  sort: sortReducer,
  filters: filterReducer,
  api: ticketsReducer,
  ticketList: listReducer
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiKeyMiddleware, thunk)
})
