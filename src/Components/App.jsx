import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../styles/img/Logo.png'
import { startApp, getData } from '../store/actions/asyncActions.js'

import styles from './App.module.scss'
import Sort from './Sort/Sort.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import TicketList from './TicketList/TicketList.jsx'
import ShowMore from './ShowMore/ShowMore.jsx'

export default function App() {
  const dispatch = useDispatch()
  const loadingStatus = useSelector((state) => state.api.loadingStatus)
  const tickets = useSelector((state) => state.api.tickets)

  useEffect(() => {
    dispatch(startApp())
  }, [dispatch])

  useEffect(() => {
    if (!loadingStatus) dispatch(getData())
  }, [loadingStatus, tickets, dispatch])

  return (
    <div className={styles.app}>
      <img className={styles.app__logo} src={logo} alt="App Logo" />
      <Sidebar />
      <div>
        <Sort />
        <TicketList />
        <ShowMore />
      </div>
    </div>
  )
}
