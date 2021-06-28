import styles from '../styles/components/ToggleDarkTheme.module.css'
export function ToggleDarktheme (){

    return(
        <div className={styles.toggleDarkThemeContainer}>
            <div className={styles.toggle}>
                <div className={styles.circleChangeTheme}></div>
            </div>
            <strong>Dark Theme</strong>
        </div>
    )

}