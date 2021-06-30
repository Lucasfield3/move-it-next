import { CSSProperties, useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { ToggleDarkThemeContext } from '../context/ToggleDarkThemeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience, experienceToTheNextLevel } = useContext(ChallengesContext)

    const percentToTheNextLevel = Math.round((currentExperience * 100)/ experienceToTheNextLevel)

    const {theme} = useContext(ToggleDarkThemeContext)

    const styleToggle = {
        color: theme == 'dark' && 'var(--white)',
        transition: 'color 200ms ease-in-out'
    } as CSSProperties

    return(
        <header className={styles.experienceBar}>
            <span style={styleToggle}>0 xp</span>
            <div>
                <div style={{width:`${percentToTheNextLevel}%`, transition:'width 0.5s'}}/>
                <span className={styles.currentExperience} style={{
                    left: `${percentToTheNextLevel}%`,
                    color: theme == 'dark' && 'var(--white)',
                    transition: 'color 200ms ease-in-out'
                    }}>
                    {currentExperience} xp
                </span>
            </div>
            <span style={styleToggle}>{experienceToTheNextLevel} xp</span>
        </header>
    )

}