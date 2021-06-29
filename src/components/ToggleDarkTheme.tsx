import { CSSProperties, useContext } from 'react'
import { ToggleDarkThemeContext } from '../context/ToggleDarkThemeContext'
import styles from '../styles/components/ToggleDarkTheme.module.css'
export function ToggleDarktheme (){

    const { hasClickedToggle, changeToogle } = useContext(ToggleDarkThemeContext)

    const styleToggle = {
        background: hasClickedToggle && 'var(--white)' || 'var(--title)',
        transition: 'background 200ms ease-in-out'
    } as CSSProperties

    

    return(
        <div className={styles.toggleDarkThemeContainer}>
            <div style={styleToggle} onClick={changeToogle} className={styles.toggle}>
                <div style={{marginLeft: hasClickedToggle && '1.3rem' || '0rem', transition:'margin-left 0.2s'}} className={styles.circleChangeTheme}></div>
            </div>
            <strong style={{color: hasClickedToggle && 'var(--white)'}}>{hasClickedToggle && 'Light Theme' || 'Dark Theme'}</strong>
        </div>
    )

}