const apiURL = 'https://aviasales-test-api.kata.academy/'
let apiKey = ''

const getData = async (url) => {
  const res = await fetch(`${apiURL}${url}`)
  return res.json()
  // обработка ошибок нужна
}

export const getApiKey = () => {
  const res = getData('search')
  apiKey = res.searchId
}

export const getTickets = () => getData(`tickets?searchId=${apiKey}`)
