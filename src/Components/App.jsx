import React, { useEffect } from 'react'

import { getApiKey } from '../service/service.js'
import logo from '../styles/img/Logo.png'

import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar.jsx'
import TicketList from './TicketList/TicketList.jsx'

export default function App() {
  useEffect(() => {
    getApiKey()
  }, [])

  return (
    <div className={styles.app}>
      <img className={styles.app__logo} src={logo} alt="App Logo" />
      <Sidebar />
      <TicketList />
    </div>
  )
}
