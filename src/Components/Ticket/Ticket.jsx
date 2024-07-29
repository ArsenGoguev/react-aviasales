import React from 'react'
import PropTypes from 'prop-types'
import { v4 as generateId } from 'uuid'

import TicketSegment from './TicketSegment.jsx'
import styles from './Ticket.module.scss'

export default function Ticket({ ticketInfo }) {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__header}>
        <span className={styles.ticket__price}>
          {ticketInfo.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })}
        </span>
        <img alt="Company Logo" src={`//pics.avs.io/99/36/${ticketInfo.carrier}.png`} className={styles.ticket__logo} />
      </div>
      {ticketInfo.segments.map((segment) => (
        <TicketSegment key={generateId()} segment={segment} />
      ))}
    </div>
  )
}

Ticket.propTypes = {
  ticketInfo: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired
  }).isRequired
}
