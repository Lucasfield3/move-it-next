import { CSSProperties, useContext } from 'react'
import styles from '../../styles/pages/LeaderBoards.module.css'
import { SettingsContext } from '../../context/SettingsContext'

export function HeaderLeaderBoard(){

    const { theme} = useContext(SettingsContext)

  const styleColorTexts = {
    color: theme === 'dark' && 'var(--white)'
  } as CSSProperties

    return(
        <>
        <header style={styleColorTexts} className={styles.headerLeaderBoards}>
            LeaderBoard
        </header>
        <div className={styles.titles}>
            <div className={styles.leftTitles}>
                <p style={styleColorTexts}>Posição</p>
                <p style={styleColorTexts}>Usuário</p>
            </div>
            <div className={styles.rightTitles}>
                <p style={styleColorTexts}>Desafios</p>
                <p style={styleColorTexts}>Experiência</p>
            </div>
        </div>
        </>
    )

}

