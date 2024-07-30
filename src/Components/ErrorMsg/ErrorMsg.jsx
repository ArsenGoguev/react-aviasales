import React from 'react'

import styles from './ErrorMsg.module.scss'

export default function ErrorMsg() {
  return (
    <div className={styles.error}>
      <h2>Произошла ошибка</h2>
      <p>Что-то пошло не так. Попробуйте перезагрузить страницу.</p>
    </div>
  )
}
