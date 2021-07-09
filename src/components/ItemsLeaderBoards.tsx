import { useCookies } from 'react-cookie'
import styles from '../styles/components/ItemsLeaderBoards.module.css'


export function ItemsLeaderBoards(){

    const [ cookies ] = useCookies()


    return(
        <div className={styles.itemsLeaderBoards}>
            <strong>1</strong>
            <div className={styles.itemsLeaderBoardsInformation}>
                <div className={styles.leftItems}>
                    <img src='https://github.com/Lucasfield3.png' alt='image'/>
                    <div>
                        <strong >Lucas Rocha</strong>
                        <p>
                            <img src='/icons/level.svg' alt='level'></img>
                            Level {cookies.level}
                        </p>
                    </div>
                </div>
                <div className={styles.rightItems}>
                    <p><span>{cookies.challengesCompleted}</span> completos</p>
                    <p><span>{cookies.currentExperience}</span> xp</p>
                </div>
            </div>
        </div>
    )

}