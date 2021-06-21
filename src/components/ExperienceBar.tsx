import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience, experienceToTheNextLevel } = useContext(ChallengesContext)

    const percentToTheNextLevel = Math.round((currentExperience * 100)/ experienceToTheNextLevel)

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width:`${percentToTheNextLevel}%`}}/>
                <span className={styles.currentExperience} style={{left: `${percentToTheNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToTheNextLevel} xp</span>
        </header>
    )

}