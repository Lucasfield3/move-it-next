import { useContext, CSSProperties } from "react"
import { ToggleDarkThemeContext } from "../context/ToggleDarkThemeContext"
import styles from '../styles/pages/Home.module.css'

export default function BodyHome({children}){

    const { theme} = useContext(ToggleDarkThemeContext)

    const styleToggle = {
      background: theme === 'dark' && 'var(--title)',
      transition: 'background 200ms linear'
    } as CSSProperties


    return(
        <div style={styleToggle} className={styles.bodyHome} >
            {children}
        </div>
    )

}