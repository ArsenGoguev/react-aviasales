export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export function toggleFilter(filter) {
  return {
    type: TOGGLE_FILTER,
    payload: filter
  }
}

export const SORT_BY_CHEAPNESS = 'SORT_BY_CHEAPNESS'
export function sortByCheapness() {
  return {
    type: SORT_BY_CHEAPNESS
  }
}

export const SORT_BY_SPEED = 'SORT_BY_SPEED'
export function sortBySpeed() {
  return {
    type: SORT_BY_SPEED
  }
}

export const SORT_BY_OPTIMALITY = 'SORT_BY_OPTIMALITY'
export function sortByOptimality() {
  return {
    type: SORT_BY_OPTIMALITY
  }
}

export const SAVE_API_KEY = 'SAVE_API_KEY'
export function saveApiKey(key) {
  return {
    type: SAVE_API_KEY,
    payload: key
  }
}

export const SAVE_TICKETS = 'SAVE_TICKETS'
export function saveTickets(data) {
  return {
    type: SAVE_TICKETS,
    payload: data
  }
}

export const SAVE_RESPONSE_STATUS = 'SAVE_RESPONSE_STATUS'
export function saveResponseStatus(status) {
  return {
    type: SAVE_RESPONSE_STATUS,
    payload: status
  }
}

export const SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS'
export function showMoreTickets() {
  return {
    type: SHOW_MORE_TICKETS
  }
}

export const SET_INITIAL_DISPLAYED_TICKETS = 'SET_INITIAL_DISPLAYED_TICKETS'
export function setShowedTickets(data) {
  return {
    type: SET_INITIAL_DISPLAYED_TICKETS,
    payload: data
  }
}
