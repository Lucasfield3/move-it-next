import { useContext } from 'react'
import { useCookies } from 'react-cookie'
import { LanguageContext } from '../context/LanguageContext'
import styles from '../styles/components/ItemsLeaderBoards.module.css'


export function ItemsLeaderBoards(){

    const [ cookies ] = useCookies()

    const { handleLanguage } = useContext(LanguageContext)

    return(
        <div className={styles.itemsLeaderBoards}>
            <strong>1</strong>
            <div className={styles.itemsLeaderBoardsInformation}>
                <div className={styles.leftItems}>
                    <img src='icons/user-profile.png' alt='image'/>
                    <div>
                        <strong >User</strong>
                        <p>
                            <img src='/icons/level.svg' alt='level'></img>
                            Level {cookies.level}
                        </p>
                    </div>
                </div>
                <div className={styles.rightItems}>
                    <p><span>{cookies.challengesCompleted}</span> {handleLanguage().leaderBoardsChallengesCompleted}</p>
                    <p><span>{cookies.currentExperience}</span> xp</p>
                </div>
            </div>
        </div>
    )

}