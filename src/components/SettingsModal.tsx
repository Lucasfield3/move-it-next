
import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import { SettingsContext } from '../context/SettingsContext'
import styles from '../styles/components/SettingsModal.module.css'

export function SettingsModal(){

    const { openCloseSettingsModal } = useContext(SettingsContext)
    return(
        <div className={styles.overlay}>
            <div id='modal' className={`${styles.container} animate__zoomIn`}>
                <header>Opções</header>

                <strong>Parabéns!</strong>
                <p>Você alcançou um novo level.</p>

                <button type='button' onClick={()=>{
                    openCloseSettingsModal()
                    }}>
                    <img src='/icons/close.svg' alt='Fechar modal'></img>
                </button>
            </div>
        </div>
    )

}