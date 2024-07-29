import React from 'react'
import PropTypes from 'prop-types'

import { getTravelTime, getTravelDuration, getStopsLabel } from '../../utilites/ticketService.js'

import styles from './Ticket.module.scss'

export default function TicketSegment({ segment }) {
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
}

TicketSegment.propTypes = {
  segment: PropTypes.object
}
