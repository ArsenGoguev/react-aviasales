/* FILTERING ACTIONS */

export const FILTER_TICKET_LIST = 'FILTER_TICKET_LIST'
export function filterTicketList(filter) {
  return {
    type: FILTER_TICKET_LIST,
    payload: filter
  }
}

/* SORTING ACTIONS */

export const SORT_TICKETS = 'SORT_TICKETS'
export const sortTickets = (sortingType) => ({
  type: SORT_TICKETS,
  payload: sortingType
})

/* ACTIONS WITH API */

export const SAVE_TICKETS = 'SAVE_TICKETS'
export function saveTickets(data) {
  return {
    type: SAVE_TICKETS,
    payload: data
  }
}

export const SET_LOADING_STATUS = 'SET_LOADING_STATUS'
export function setLoadingStatus(status) {
  return {
    type: SET_LOADING_STATUS,
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
