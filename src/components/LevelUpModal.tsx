
import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import { LanguageContext } from '../context/LanguageContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){

    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    const { handleLanguage } = useContext(LanguageContext)

    return(
        <div className={styles.overlay}>
            <div id='modal' className={`${styles.container} animate__zoomIn`}>
                <header>{level}</header>

                <strong>{handleLanguage().modalChallengeCompletedHeader}</strong>
                <p>{handleLanguage().modalChallengeCompletedText}</p>

                <button type='button' onClick={()=>{
                    closeLevelUpModal()
                    }}>
                    <img src='/icons/close.svg' alt='Fechar modal'></img>
                </button>
            </div>
        </div>
    )

}