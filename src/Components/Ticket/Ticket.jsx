import React from 'react'

import styles from './Ticket.module.scss'

export default function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__header}>
        <span className={styles.ticket__price}>13 400 Р</span>
        <div className={styles.ticket__logo} />
      </div>
      <div className={styles.ticket__info}>
        <div className={styles['ticket__info-wrapper']}>
          <div className={styles['ticket__info-header']}>MOW - NKT</div>
          <div className={styles['ticket__info-text']}>10:45 - 08:00</div>
        </div>
        <div className={styles['ticket__info-wrapper']}>
          <div className={styles['ticket__info-header']}>В ПУТИ</div>
          <div className={styles['ticket__info-text']}>21ч 15м</div>
        </div>
        <div className={styles['ticket__info-wrapper']}>
          <div className={styles['ticket__info-header']}>2 ПЕРЕСАДКИ</div>
          <div className={styles['ticket__info-text']}>HKG, JNB</div>
        </div>
      </div>
      <div className={styles.ticket__info}>
        <div className={styles['ticket__info-wrapper']}>
          <div className={styles['ticket__info-header']}>MOW - NKT</div>
          <div className={styles['ticket__info-text']}>11:20 - 00:50</div>
        </div>
        <div className={styles['ticket__info-wrapper']}>
          <div className={styles['ticket__info-header']}>В ПУТИ</div>
          <div className={styles['ticket__info-text']}>13ч 30м</div>
        </div>
        <div className={styles['ticket__info-wrapper']}>
          <div className={styles['ticket__info-header']}>1 ПЕРЕСАДКА</div>
          <div className={styles['ticket__info-text']}>HKG</div>
        </div>
      </div>
    </div>
  )
}
