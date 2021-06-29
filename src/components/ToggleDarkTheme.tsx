import { useContext } from 'react'
import { ToggleDarkThemeContext } from '../context/ToggleDarkThemeContext'
import styles from '../styles/components/ToggleDarkTheme.module.css'
export function ToggleDarktheme (){

    const { hasClickedToggle, changeToogle } = useContext(ToggleDarkThemeContext)

    return(
        <div onClick={changeToogle} className={styles.toggleDarkThemeContainer}>
            <div className={styles.toggle}>
                <div style={{marginLeft: hasClickedToggle && '2rem' || '0rem', transition:'margin-left 0.2s'}} className={styles.circleChangeTheme}></div>
            </div>
            <strong style={{color: hasClickedToggle && 'var(--white)'}}>{hasClickedToggle && 'Light Theme' || 'Dark Theme'}</strong>
        </div>
    )

}