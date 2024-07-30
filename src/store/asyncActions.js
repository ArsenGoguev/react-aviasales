import { createAsyncThunk } from '@reduxjs/toolkit'

import { saveData, setErrorStatus } from './slices.js'

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
  if (!sessionStorage.getItem('searchId')) return
  try {
    const response = await fetch(`${apiURL}tickets?searchId=${sessionStorage.getItem('searchId')}`)
    if (!response.ok) throw new Error('Ошибка сервера')
    const json = await response.json()
    if (json.tickets || json.stop) dispatch(saveData(json))
  } catch (error) {
    if (!error.message.includes('Ошибка сервера')) dispatch(setErrorStatus(true))
    dispatch(saveData({ tickets: [], stop: false }))
  }
})
