import { CSSProperties, useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { SettingsContext } from '../context/SettingsContext';
import styles from '../styles/components/CompletedChalenges.module.css';

export function CompletedChalenges (){

    const { challengesCompleted } = useContext(ChallengesContext)


    const {theme} = useContext(SettingsContext)

    const styleToggle = {
        color: theme == 'dark' && 'var(--white)',
        transition: 'color 200ms ease-in-out'
    } as CSSProperties

    return (
        <div className={styles.completedChalengesContainer}>
            <span style={styleToggle}>Desafios completos</span>
            <span style={styleToggle}>{challengesCompleted}</span>
        </div>
    )
}