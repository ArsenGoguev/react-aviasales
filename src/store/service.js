import { createAsyncThunk } from '@reduxjs/toolkit'

import { saveData, setErrorStatus } from './slices.js'

const apiURL = 'https://aviasales-test-api.kata.academy/'

const getData = createAsyncThunk('tickets/getData', async (_, { dispatch }) => {
  try {
    if (!sessionStorage.getItem('searchId')) {
      const apiKeyResponse = await fetch(`${apiURL}search`)
      if (!apiKeyResponse.ok) throw new Error(`Error ${apiKeyResponse.status}: Ошибка сервера`)
      const apiKeyJson = await apiKeyResponse.json()
      sessionStorage.setItem('searchId', apiKeyJson.searchId)
    }
    const response = await fetch(`${apiURL}tickets?searchId=${sessionStorage.getItem('searchId')}`)
    if (!response.ok) throw new Error('Ошибка сервера')
    const json = await response.json()
    if (json.tickets || json.stop) dispatch(saveData(json))
  } catch (error) {
    if (!error.message.includes('Ошибка сервера')) dispatch(setErrorStatus(true))
    dispatch(saveData({ tickets: [], stop: false }))
  }
})

export default getData
