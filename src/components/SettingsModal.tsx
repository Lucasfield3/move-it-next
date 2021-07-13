
import { useContext } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import styles from '../styles/components/SettingsModal.module.css'
import { ToggleDarktheme } from './ToggleDarkTheme'

export function SettingsModal(){

    const { openCloseSettingsModal } = useContext(SettingsContext)
    return(
        <div className={styles.overlay}>
            <div id='modal' className={`${styles.container} animate__zoomIn`}>
                <header>Opções</header>
                <div>
                    <div className={styles.boxToggle}>
                        <strong>Tema</strong>
                    </div>
                    <ToggleDarktheme/>
                    <div className={styles.editCicle}>
                        <strong>Editar Ciclo</strong>
                    </div>
                    <strong>timer</strong>
                    <div style={{margin:'1rem 0'}} className={styles.language}>
                        <strong>Linguagem</strong>
                    </div>
                    <strong style={{margin:'1rem 0'}}> linguagem</strong>
                </div>
                
                <button type='button' onClick={openCloseSettingsModal}>
                    <img src='/icons/close.svg' alt='Fechar modal'></img>
                </button>
            </div>
        </div>
    )

}