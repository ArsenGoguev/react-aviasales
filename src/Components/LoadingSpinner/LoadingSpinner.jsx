import React from 'react'

import styles from './LoadingSpinner.module.scss'

export default function LoadingSpinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__doubleBounce1} />
      <div className={styles.spinner__doubleBounce2} />
    </div>
  )
}
