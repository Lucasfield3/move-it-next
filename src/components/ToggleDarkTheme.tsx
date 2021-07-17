import { CSSProperties, useContext} from 'react'
import { SettingsContext } from '../context/SettingsContext'
import styles from '../styles/components/ToggleDarkTheme.module.css'
export function ToggleDarktheme (){

    const { theme, changeToogle } = useContext(SettingsContext)



    const styleToggle = {
        background: theme === 'light' && 'var(--white)' || 'var(--title)',
        transition: 'background 200ms ease-in-out'
    } as CSSProperties

    const styleCircle = {
        marginLeft: theme === 'light' && '0rem' || '1.3rem',
        background: theme === 'light' && 'var(--title)' || 'var(--white)',
        transition:'margin-left 0.2s, background 0.2s linear'
    } as CSSProperties

    return(
        <div className={styles.toggleDarkThemeContainer}>
            <div style={styleToggle} onClick={changeToogle} className={styles.toggle}>
                <div style={styleCircle} className={styles.circleChangeTheme}></div>
            </div>
            <strong>{theme === 'dark' && 'Light' || 'Dark'}</strong>
        </div>
    )

}