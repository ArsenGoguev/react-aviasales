/* FILTERING ACTIONS */

export const FILTER_TICKET_LIST = 'FILTER_TICKET_LIST'
export function filterTicketList(filter) {
  return {
    type: FILTER_TICKET_LIST,
    payload: filter
  }
}

/* SORTING ACTIONS */

export const SORT_BY_CHEAPNESS = 'SORT_BY_CHEAPNESS'
export function sortByCheapness(sortingType) {
  return {
    type: SORT_BY_CHEAPNESS,
    payload: sortingType
  }
}

export const SORT_BY_SPEED = 'SORT_BY_SPEED'
export function sortBySpeed(sortingType) {
  return {
    type: SORT_BY_SPEED,
    payload: sortingType
  }
}

export const SORT_BY_OPTIMALITY = 'SORT_BY_OPTIMALITY'
export function sortByOptimality(sortingType) {
  return {
    type: SORT_BY_OPTIMALITY,
    payload: sortingType
  }
}

/* ACTIONS WITH API */

export const SAVE_TICKETS = 'SAVE_TICKETS'
export function saveTickets(data) {
  return {
    type: SAVE_TICKETS,
    payload: data
  }
}

export const SET_RESPONSE_STATUS = 'SET_RESPONSE_STATUS'
export function setResponseStatus(status) {
  return {
    type: SET_RESPONSE_STATUS,
    payload: status
  }
}

export const SET_ERROR_STATUS = 'SET_ERROR_STATUS'
export function setErrorStatus(status) {
  return {
    type: SET_ERROR_STATUS,
    payload: status
  }
}

/* SHOWMORE BUTTON ACTIONS */

export const DISPLAY_MORE_TICKETS = 'DISPLAY_MORE_TICKETS'
export function displayMoreTickets(tickets) {
  return {
    type: DISPLAY_MORE_TICKETS,
    payload: tickets
  }
}

/* ACTIONS WITH DISPLAYED TICKETS */

export const DISPLAY_TICKETS = 'DISPLAY_TICKETS'
export function displayTickets(tickets) {
  return {
    type: DISPLAY_TICKETS,
    payload: tickets
  }
}

export const UPDATE_DISPLAYED_TICKET_LIST = 'UPDATE_DISPLAYED_TICKET_LIST'
export function updateDisplayedTicketList(data) {
  return {
    type: UPDATE_DISPLAYED_TICKET_LIST,
    payload: data
  }
}
