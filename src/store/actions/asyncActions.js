/* eslint-disable import/prefer-default-export, func-names */
import { saveApiKey, saveTickets, saveResponseStatus, setShowedTickets } from './actions.js'

const apiURL = 'https://aviasales-test-api.kata.academy/'

export function startApp() {
  return function (dispatch) {
    fetch(`${apiURL}search`)
      .then((res) => res.json())
      .then((json) => {
        sessionStorage.setItem('searchId', json.searchId)
        dispatch(saveApiKey(json.searchId))
        return json.searchId
      })
      .then((searchId) => {
        fetch(`${apiURL}tickets?searchId=${searchId}`)
          .then((res) => res.json())
          .then((json) => {
            dispatch(saveTickets(json.tickets))
            dispatch(saveResponseStatus(json.stop))
            dispatch(setShowedTickets(json.tickets))
          })
      })
  }
}

export function getData() {
  return function (dispatch) {
    fetch(`${apiURL}tickets?searchId=${sessionStorage.getItem('searchId')}`)
      .then((res) => {
        if (!res.status === 500) throw new Error('oops')
        return res.json()
      })
      .then((json) => {
        dispatch(saveResponseStatus(json.stop))
        dispatch(saveTickets(json.tickets))
      })
      .catch((err) => console.log(err))
  }
}
