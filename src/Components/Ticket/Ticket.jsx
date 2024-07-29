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
        <div className={styles.ticket__logo} />
      </div>
      {ticketInfo.segments.map((segment) => (
        <TicketSegment key={generateId()} segment={segment} />
      ))}
    </div>
  )
}

Ticket.propTypes = {
  ticketInfo: PropTypes.object
}
