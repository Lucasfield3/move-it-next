import { CSSProperties, useContext} from 'react';
import { CountDownContext } from '../context/CountDownContext';
import { ToggleDarkThemeContext } from '../context/ToggleDarkThemeContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown (){

    const { hasClickedToggle } = useContext(ToggleDarkThemeContext)

    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountDown, 
        startCountDown 
    } = useContext(CountDownContext)

    const [ minutesLeft, minutesRight ] = String(minutes).padStart(2, '0').split('')
    const [ secondsLeft, secondsRight ] = String(seconds).padStart(2, '0').split('')

    const styleToggle = {
        color: hasClickedToggle && 'var(--white)',
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
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                    <button
                    type='button' 
                    className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                    onClick={resetCountDown}
                    >
                        Abandonar ciclo
                    </button>
                    ) : (
                    <button
                    type='button' 
                    className={styles.countDownButton}
                    onClick={startCountDown}
                    >
                    Iniciar um ciclo
                    </button>
                    ) }
                </>
            ) }
        </div>
    )
}
