import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/CompletedChalenges.module.css';

export function CompletedChalenges (){

    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completedChalengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}