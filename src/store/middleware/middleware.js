/* eslint-disable import/prefer-default-export */
import { SAVE_API_KEY } from '../actions/actions.js'

export const apiKeyMiddleware = () => {
  let apiKeyFetched = false

  return (next) => (action) => {
    if (action.type === SAVE_API_KEY) {
      if (apiKeyFetched) return
      apiKeyFetched = true
    }
    return next(action)
  }
}
