import React from 'react'
import PropTypes from 'prop-types'

import { getTravelTime, getTravelDuration, getStopsLabel } from '../../utils/ticketUtils.js'

import styles from './Ticket.module.scss'

const TicketSegment = React.memo(({ segment }) => {
  const startTime = getTravelTime(segment.date)
  const arrivalTime = getTravelTime(segment.date, segment.duration)
  const duration = getTravelDuration(segment.duration)
  const stopsLabel = getStopsLabel(segment.stops)

  return (
    <div className={styles.ticket__info}>
      <div className={styles['ticket__info-wrapper']}>
        <div className={styles['ticket__info-header']}>{`${segment.origin} - ${segment.destination}`}</div>
        <div className={styles['ticket__info-text']}>{`${startTime} - ${arrivalTime}`}</div>
      </div>
      <div className={styles['ticket__info-wrapper']}>
        <div className={styles['ticket__info-header']}>В ПУТИ</div>
        <div className={styles['ticket__info-text']}>{duration}</div>
      </div>
      <div className={styles['ticket__info-wrapper']}>
        <div className={styles['ticket__info-header']}>{stopsLabel}</div>
        <div className={styles['ticket__info-text']}>
          {segment.stops.length > 1 ? segment.stops.join(', ') : segment.stops}
        </div>
      </div>
    </div>
  )
})

TicketSegment.propTypes = {
  segment: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    stops: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

export default TicketSegment
