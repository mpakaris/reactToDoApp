import React from 'react'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <img
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxctdqP_GpUlLSDG2xttpXP3L86yTk6ynR-Q&usqp=CAU"
        alt="Who am I Logo"         
      />
      <h1>WHO AM I?</h1>
    </div>
  )
}

export default Home