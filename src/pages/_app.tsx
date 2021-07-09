import React from 'react'
import { SideBar } from '../components/SideBar'
import { MenuButtonProvider } from '../context/MenuButtonContext';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {


  return (
      <MenuButtonProvider>
        <SideBar/>
        <Component {...pageProps} />
      </MenuButtonProvider>
  )
}

export default MyApp
