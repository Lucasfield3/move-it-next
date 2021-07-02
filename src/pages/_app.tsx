import React from 'react'
import { SideBar } from '../components/SideBar'
import { ToggleDarkThemeProvider } from '../context/ToggleDarkThemeContext'
import '../styles/global.css'
import styles from '../styles/pages/Home.module.css';
function MyApp({ Component, pageProps }) {

  return (
    <div  className={styles.bodyHome}>
      <SideBar/>
      <ToggleDarkThemeProvider>
        <Component {...pageProps} />
        
      </ToggleDarkThemeProvider>
    </div>
  )
}

export default MyApp
