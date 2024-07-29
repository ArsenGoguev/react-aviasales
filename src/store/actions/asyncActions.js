/* eslint-disable import/prefer-default-export, func-names */
import { store } from '../store.js'

import { saveApiKey, saveTickets, saveResponseStatus } from './actions.js'

const apiURL = 'https://aviasales-test-api.kata.academy/'

export function startApp() {
  return function (dispatch) {
    fetch(`${apiURL}search`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(saveApiKey(json.searchId))
        return json.searchId
      })
      .then((searchId) => {
        fetch(`${apiURL}tickets?searchId=${searchId}`)
          .then((res) => res.json())
          .then((json) => {
            dispatch(saveTickets(json.tickets))
            dispatch(saveResponseStatus(json.stop))
          })
      })
  }
}

export function getApiKey() {
  return function (dispatch) {
    fetch(`${apiURL}search`)
      .then((res) => res.json())
      .then((json) => dispatch(saveApiKey(json.searchId)))
  }
}

export function getTickets() {
  return function (dispatch) {
    fetch(`${apiURL}tickets?searchId=${store.api.searchId}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(saveTickets(json.tickets))
      })
  }
}
