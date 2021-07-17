import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { SettingsContext } from '../context/SettingsContext'
import styles from '../styles/components/SettingsModal.module.css'
import EditCicle from './EditCicle'
import SelectLanguage from './SelectLanguage'
import { ToggleDarktheme } from './ToggleDarkTheme'

export function SettingsModal(){

    const { handleLanguage } = useContext(LanguageContext)

    const { openCloseSettingsModal } = useContext(SettingsContext)
    return(
        <div className={styles.overlay}>
            <div id='modal' className={`${styles.container} animate__zoomIn`}>
                <header>{handleLanguage().modalSettingsHeader}</header>
                <div>
                    <div className={styles.boxToggle}>
                        <strong>{handleLanguage().modalSettingsTheme}</strong>
                    </div>
                    <ToggleDarktheme/>
                    <div className={styles.editCicle}>
                        <strong>{handleLanguage().modalSettingsCicle}</strong>
                    </div>
                    <EditCicle/>
                    <div style={{margin:'1rem 0'}} className={styles.language}>
                        <strong>{handleLanguage().modalSettingsLanguage}</strong>
                    </div>
                    <SelectLanguage/>
                </div>
                
                <button type='button' onClick={openCloseSettingsModal}>
                    <img src='/icons/close.svg' alt='Fechar modal'></img>
                </button>
            </div>
        </div>
    )

}