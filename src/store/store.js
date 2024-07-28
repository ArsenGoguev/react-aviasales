import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'

import sortReducer from './sortReducer.js'
import filterReducer from './filterReducer.js'

const reducer = combineReducers({
  sort: sortReducer,
  filters: filterReducer
})

export const store = configureStore({ reducer }, composeWithDevTools()) // eslint-disable-line
