const filterTickets = (tickets, filters) => {
  if (filters.all) return tickets

  const filteredTickets = tickets.filter((ticket) => {
    const { segments } = ticket
    return segments.every((segment) => {
      const stopsCount = segment.stops.length
      return (
        (filters.without && stopsCount === 0) ||
        (filters.one && stopsCount === 1) ||
        (filters.two && stopsCount === 2) ||
        (filters.three && stopsCount === 3)
      )
    })
  })

  return filteredTickets
}

export default filterTickets
