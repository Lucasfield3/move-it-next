
import { HomeProps } from "../index";
import { ChallengesProvider } from "../../context/ChallengesContext";
import { ToggleDarkThemeContext, ToggleDarkThemeProvider } from "../../context/ToggleDarkThemeContext";
import styles from '../../styles/pages/LeaderBoards.module.css'
import { CSSProperties, useContext } from "react";


export default function LeaderBoards (props: HomeProps){



    const { theme } = useContext(ToggleDarkThemeContext)

    const styleToggle = {
      background: theme === 'dark' && 'var(--title)',
      transition: 'background 200ms linear'
  } as CSSProperties




    return(
        <>
          <ChallengesProvider 
            level={props.level}
            challengesCompleted={props.challengesCompleted}
            currentExperience={props.currentExperience}
            >
                <div style={styleToggle} className={styles.body}>
                    <div  className={styles.containerLeaderBoards}>
                        <header className={styles.headerLeaderBoards}>
                            LeaderBoard
                        </header>
                        <div className={styles.titles}>
                            <div className={styles.leftTitles}>
                                <p>Posição</p>
                                <p>Usuário</p>
                            </div>
                            <div className={styles.rightTitles}>
                                <p>Desafios</p>
                                <p>Experiência</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ChallengesProvider>
        </>
    )

}