import React from 'react'

import styles from './Error.module.scss'

export default function Error() {
  return (
    <div className={styles.error}>
      <h2>Произошла ошибка</h2>
      <p>Что-то пошло не так. Попробуйте перезагрузить страницу.</p>
      <p>Если это не сработает, попробуйте поискать билеты позже.</p>
    </div>
  )
}
