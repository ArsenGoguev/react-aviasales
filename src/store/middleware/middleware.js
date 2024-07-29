/* eslint-disable no-unused-vars */
import { SAVE_API_KEY, SAVE_TICKETS, SAVE_RESPONSE_STATUS } from '../actions/actions.js'

export const apiKeyMiddleware = (store) => {
  let apiKeyFetched = false

  return (next) => (action) => {
    if (action.type === SAVE_API_KEY) {
      if (apiKeyFetched) return
      apiKeyFetched = true
    }
    return next(action)
  }
}

export const ticketsMiddleware = (store) => {
  let ticketsFetched = false

  return (next) => (action) => {
    if (action.type === SAVE_TICKETS) {
      if (ticketsFetched) return
      ticketsFetched = true
    }
    return next(action)
  }
}

export const responseStatusMiddleware = (store) => {
  let responseFetched = false

  return (next) => (action) => {
    if (action.type === SAVE_RESPONSE_STATUS) {
      if (responseFetched) return
      responseFetched = true
    }
    return next(action)
  }
}
