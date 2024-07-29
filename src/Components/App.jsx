import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../styles/img/Logo.png'
import { startApp } from '../store/actions/asyncActions.js'
import { setShowedTickets } from '../store/actions/actions.js'

import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar.jsx'
import TicketList from './TicketList/TicketList.jsx'

export default function App() {
  const dispatch = useDispatch()
  const loadingStatus = useSelector((state) => state.api.loadingStatus)
  const tickets = useSelector((state) => state.api.tickets)

  useEffect(() => {
    dispatch(startApp())
  }, []) // eslint-disable-line

  useEffect(() => {
    if (!loadingStatus) {
      dispatch(setShowedTickets(tickets))
    }
  }, [loadingStatus]) // eslint-disable-line

  return (
    <div className={styles.app}>
      <img className={styles.app__logo} src={logo} alt="App Logo" />
      <Sidebar />
      <TicketList />
    </div>
  )
}
