import { useContext, CSSProperties, useEffect } from "react"
import { useCookies } from "react-cookie"
import { MenuButtonContext } from "../context/MenuButtonContext"
import { SettingsContext } from "../context/SettingsContext"
import styles from '../styles/pages/Home.module.css'
export default function Body({children}){

    const { theme} = useContext(SettingsContext)

    const { handleIsActiveForBodyClick, isSideActive } = useContext(MenuButtonContext)

    const styleToggle = {
      background: theme === 'dark' && 'var(--title)',
      transition: 'background 200ms linear',
      cursor: isSideActive === true && 'pointer'
    } as CSSProperties

    return(
        <div id='overlay' onClick={handleIsActiveForBodyClick} style={styleToggle} className={styles.body} >
           { isSideActive === true && <div className={styles.overlay}/> || null}
            {children}
        </div>
    )

}