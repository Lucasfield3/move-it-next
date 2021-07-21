import React, { useContext } from 'react'
import { useEffect } from 'react';
import { SideBar } from '../components/SideBar'
import { LanguageProvider } from '../context/LanguageContext';
import { MediaContextProvider } from '../context/MediaContext';
import { MenuButtonProvider } from '../context/MenuButtonContext';
import { SettingsContext, SettingsProvider } from '../context/SettingsContext';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <MediaContextProvider>
      <LanguageProvider selectedlanguage={pageProps.language}>
      <SettingsProvider minutes={pageProps.minutes} seconds={pageProps.seconds} theme={pageProps.theme}>
      <MenuButtonProvider>
        <Component {...pageProps} />
      </MenuButtonProvider>
      </SettingsProvider>
      </LanguageProvider>
    </MediaContextProvider>
  )
}

export default MyApp
