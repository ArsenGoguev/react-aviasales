import { combineReducers, configureStore } from '@reduxjs/toolkit'

import sortReducer from './sortReducer.js'
import checkboxReducer from './checkboxReducer.js'
import filterReducer from './filterReducer.js'

const reducer = combineReducers({
  sort: sortReducer,
  checkboxes: checkboxReducer,
  filters: filterReducer
})

export const store = configureStore({ reducer }) // eslint-disable-line
