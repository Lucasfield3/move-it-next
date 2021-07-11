import { useContext, CSSProperties } from "react"
import { MenuButtonContext } from "../context/MenuButtonContext"
import { SettingsContext } from "../context/SettingsContext"
import styles from '../styles/pages/Home.module.css'
export default function BodyHome({children}){

    const { theme} = useContext(SettingsContext)

    const { handleIsActiveForBodyClick, isActive } = useContext(MenuButtonContext)

    const styleToggle = {
      background: theme === 'dark' && 'var(--title)',
      transition: 'background 200ms linear',
      cursor: isActive === true && 'pointer'
    } as CSSProperties



    return(
        <div onClick={handleIsActiveForBodyClick} style={styleToggle} className={styles.bodyHome} >
           { isActive === true && <div className={styles.overlay}/> || null}
            {children}
        </div>
    )

}