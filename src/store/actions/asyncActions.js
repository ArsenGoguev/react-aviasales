/* eslint-disable import/prefer-default-export, func-names */
import { saveTickets, setResponseStatus, setErrorStatus, displayTickets } from './actions.js'

const apiURL = 'https://aviasales-test-api.kata.academy/'

export const getSearchId = () => async (dispatch) => {
  try {
    const response = await fetch(`${apiURL}search`)
    if (!response.ok) throw new Error(`Error ${response.status}: Ошибка сервера`)
    const json = await response.json()
    sessionStorage.setItem('searchId', json.searchId)
  } catch (error) {
    dispatch(setErrorStatus(true))
  }
}

export const getData = () => async (dispatch) => {
  let json
  try {
    console.log('оаз')
    const response = await fetch(`${apiURL}tickets?searchId=${sessionStorage.getItem('searchId')}`)
    if (response.status === 500) throw new Error(`Error ${response.status}: Ошибка сервера`)
    json = await response.json()
    dispatch(saveTickets(json.tickets))
    dispatch(displayTickets(json.tickets))
  } catch (error) {
    console.log(error)
    if (!error.message.includes('Ошибка сервера')) dispatch(setErrorStatus(true))
  } finally {
    if (json) {
      if (json.stop === true) dispatch(setResponseStatus(true))
    }
  }
}
