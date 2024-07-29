export default function sortTickets(tickets, sortType) {
  return [...tickets].sort((a, b) => {
    if (sortType === 'cheap') {
      return a.price - b.price
    }
    if (sortType === 'speed') {
      const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
      const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
      return durationA - durationB
    }
    if (sortType === 'optimal') {
      const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
      const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
      return a.price + durationA - (b.price + durationB)
    }
    return 0
  })
}
