import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../styles/img/Logo.png'
import { getData, getSearchId } from '../store/asyncActions.js'

import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar.jsx'
import TicketList from './TicketList/TicketList.jsx'
import SortTab from './SortTab/SortTab.jsx'

export default function App() {
  const dispatch = useDispatch()
  const loadingStatus = useSelector((state) => state.api.loadingStatus)
  const tickets = useSelector((state) => state.api.tickets)

  useEffect(() => {
    dispatch(getSearchId())
  }, [dispatch])

  useEffect(() => {
    if (loadingStatus) dispatch(getData())
    if (!loadingStatus) sessionStorage.removeItem('searchId')
  }, [loadingStatus, tickets, dispatch])

  return (
    <div className={styles.app}>
      <img className={styles.app__logo} src={logo} alt="App Logo" />
      <Sidebar />
      <div>
        <SortTab />
        <TicketList />
      </div>
    </div>
  )
}
