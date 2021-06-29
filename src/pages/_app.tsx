import { ToggleDarkThemeProvider } from '../context/ToggleDarkThemeContext'
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <ToggleDarkThemeProvider>
      <Component {...pageProps} />
    </ToggleDarkThemeProvider>
  )
}

export default MyApp
