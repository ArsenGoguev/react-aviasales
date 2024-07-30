import { createAsyncThunk } from '@reduxjs/toolkit'

import { saveTickets, setLoadingStatus, setErrorStatus } from './actions.js'

const apiURL = 'https://aviasales-test-api.kata.academy/'

export const getSearchId = createAsyncThunk('tickets/getSearchId', async (_, { dispatch }) => {
  try {
    const response = await fetch(`${apiURL}search`)
    if (!response.ok) throw new Error(`Error ${response.status}: Ошибка сервера`)
    const json = await response.json()
    sessionStorage.setItem('searchId', json.searchId)
  } catch (error) {
    dispatch(setErrorStatus(true))
  }
})

export const getData = createAsyncThunk('tickets/getData', async (_, { dispatch }) => {
  let json
  try {
    const response = await fetch(`${apiURL}tickets?searchId=${sessionStorage.getItem('searchId')}`)
    if (!response.ok) throw new Error('Ошибка сервера')
    json = await response.json()
    if (json.tickets || json.stop) {
      dispatch(saveTickets(json.tickets))
      dispatch(setLoadingStatus(!json.stop))
    }
  } catch (error) {
    console.log(error)
    if (!error.message.includes('Ошибка сервера')) dispatch(setErrorStatus(true))
    dispatch(saveTickets([]))
    dispatch(setLoadingStatus(true))
  }
})
