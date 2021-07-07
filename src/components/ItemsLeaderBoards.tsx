import styles from '../styles/components/ItemsLeaderBoards.module.css'

export function ItemsLeaderBoards(){

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
                            Level 1
                        </p>
                    </div>
                </div>
                <div className={styles.rightItems}>
                    <p><span>1</span> completos</p>
                    <p><span>1000</span> xp</p>
                </div>
            </div>
        </div>
    )

}