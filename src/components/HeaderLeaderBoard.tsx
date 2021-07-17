import { CSSProperties, useContext } from 'react'
import styles from '../styles/pages/LeaderBoards.module.css'
import { SettingsContext } from '../context/SettingsContext'
import { LanguageContext } from '../context/LanguageContext'

export function HeaderLeaderBoard(){

    const { handleLanguage } = useContext(LanguageContext)

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
                <p style={styleColorTexts}>{handleLanguage().leaderBoardsPosition}</p>
                <p style={styleColorTexts}>{handleLanguage().leaderBoardsUser}</p>
            </div>
            <div className={styles.rightTitles}>
                <p style={styleColorTexts}>{handleLanguage().leaderBoardsChallenge}</p>
                <p style={styleColorTexts}>{handleLanguage().leaderBoardsExperience}</p>
            </div>
        </div>
        </>
    )

}

