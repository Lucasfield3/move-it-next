import { CSSProperties, useContext } from 'react'
import { MenuButtonContext } from '../context/MenuButtonContext'
import { ToggleDarkThemeContext } from '../context/ToggleDarkThemeContext'
import styles from '../styles/components/MenuButton.module.css'

export default function MenuButton (){

    const { theme} = useContext(ToggleDarkThemeContext)

    const { handleIsActive } = useContext(MenuButtonContext)


    const styleToggle = {
        background: theme == 'light' && 'var(--blue-dark)'  || 'var(--white)' ,
        transition:'background 200ms linear',
    } as CSSProperties

    return(
        <div className={styles.sideBarGrid}>
            <div onClick={handleIsActive}  className={styles.sideBarMenuArea}>
                <div style={styleToggle} ></div>
                <div style={styleToggle}></div>
                <div style={styleToggle}></div>
            </div>
        </div>
    )

}