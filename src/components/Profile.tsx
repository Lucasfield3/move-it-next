import { CSSProperties, useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { ToggleDarkThemeContext } from '../context/ToggleDarkThemeContext';
import styles from '../styles/components/Profile.module.css';
export function Profile (){

    const {level} = useContext(ChallengesContext)
    const {theme} = useContext(ToggleDarkThemeContext)

    const styleToggle = {
        color: theme == 'dark' && 'var(--white)',
        transition: 'color 200ms ease-in-out'
    } as CSSProperties
    
    return(
        <div className={styles.profileContainer}>
            <img src='https://github.com/Lucasfield3.png' alt='image'/>
            <div>
                <strong style={styleToggle}>Lucas Rocha</strong>
                <p style={styleToggle}>
                    <img src='icons/level.svg' alt='level'></img>
                    Level {level}
                </p>
            </div>
        </div>
    );
}