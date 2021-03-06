import { CSSProperties, useContext} from 'react';
import { CountDownContext } from '../context/CountDownContext';
import { LanguageContext } from '../context/LanguageContext';
import { SettingsContext } from '../context/SettingsContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown (){

    const { theme } = useContext(SettingsContext)

    const { handleLanguage } = useContext(LanguageContext)

    const { 
        hasFinished, 
        isActive, 
        resetCountDown, 
        startCountDown,
        minutes,
        seconds
        
    } = useContext(CountDownContext)

    const [ minutesLeft, minutesRight ] = String(minutes).padStart(2, '0').split('')
    const [ secondsLeft, secondsRight ] = String(seconds).padStart(2, '0').split('')

    const styleToggle = {
        color: theme == 'dark' && 'var(--white)',
        transition: 'color 200ms ease-in-out'
    } as CSSProperties
   
    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span style={styleToggle}>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                disabled
                className={styles.countDownButton}
                >
                    {handleLanguage().buttonTextBlocked}
                </button>
            ) : (
                <>
                    {isActive ? (
                    <button
                    type='button' 
                    className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                    onClick={resetCountDown}
                    >
                       {handleLanguage().buttonTextActive}
                    </button>
                    ) : (
                    <button
                    type='button' 
                    className={styles.countDownButton}
                    onClick={startCountDown}
                    >
                        {handleLanguage().buttonTextDefault}
                    </button>
                    ) }
                </>
            ) }
        </div>
    )
}
