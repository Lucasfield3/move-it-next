
import { useContext, useState } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){

    const { level, closeLevelUpModal, isLevelUpModalOpen } = useContext(ChallengesContext)
    function setAnimation(){
      const modal = document.getElementById('modal')
      if(isLevelUpModalOpen == false)  modal.className = `${styles.container} animate__zoomOut`
    }

    return(
        <div className={styles.overlay}>
            <div id='modal' className={`${styles.container} animate__zoomIn`}>
                <header>{level}</header>

                <strong>Parabéns!</strong>
                <p>Você alcançou um novo level.</p>

                <button type='button' onClick={()=>{
                    closeLevelUpModal()
                    setAnimation()
                    }}>
                    <img src='/icons/close.svg' alt='Fechar modal'></img>
                </button>
            </div>
        </div>
    )

}