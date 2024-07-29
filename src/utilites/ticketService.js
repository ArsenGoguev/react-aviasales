import { add } from 'date-fns'

export const getTravelTime = (initialDate, duration) => {
  let date = new Date(initialDate)
  if (duration) date = add(date, { minutes: duration })
  const hours = date.getHours()
  const min = date.getMinutes()
  return `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}`
}

export const getStopsLabel = (stops) => {
  if (stops.length > 1) return `${stops.length} ПЕРЕСАДКИ`
  if (stops.length === 1) return `${stops.length} ПЕРЕСАДКА`
  return 'БЕЗ ПЕРЕСАДОК'
}

export const getTravelDuration = (duration) => {
  const hours = Math.trunc(duration / 60)
  const min = duration % 60
  return `${hours > 0 ? `${hours}ч` : ''} ${min > 0 ? `${min}м` : ''}`
}
