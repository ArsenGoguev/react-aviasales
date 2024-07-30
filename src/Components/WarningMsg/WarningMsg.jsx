import React from 'react'

import styles from './WarningMsg.module.scss'

export default function WarningMsg() {
  return (
    <div className={styles.warning}>
      <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
    </div>
  )
}
