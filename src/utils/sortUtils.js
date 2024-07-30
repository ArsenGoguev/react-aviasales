const getDuration = (ticket) => ticket.segments.reduce((acc, segment) => acc + segment.duration, 0)

const sortTickets = (tickets, sortingType) => {
  const sortedTickets = [...tickets]
  switch (sortingType) {
    case 'cheap':
      return sortedTickets.sort((a, b) => a.price - b.price)
    case 'speed':
      return sortedTickets.sort((a, b) => getDuration(a) - getDuration(b))
    case 'optimal':
      return sortedTickets.sort((a, b) => a.price + getDuration(a) - (b.price + getDuration(b)))
    default:
      return sortedTickets
  }
}

export default sortTickets
