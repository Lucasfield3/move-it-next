import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';
export function CountDown (){

    let countDownTimeOut: NodeJS.Timeout;

    const {startNewChallenge} = useContext(ChallengesContext)

    const [hasFinished, setHasFinished] = useState(false)
    const [time, setTime] = useState(0.1 * 60) 
    const [isActive, setIsActive] = useState(false)
    const minutes = Math.floor( time / 60 ) 
    const seconds = time % 60

    const [ minutesLeft, minutesRight ] = String(minutes).padStart(2, '0').split('')
    const [ secondsLeft, secondsRight ] = String(seconds).padStart(2, '0').split('')

    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown(){
        clearTimeout(countDownTimeOut)
        setIsActive(false)
        setTime(0.1 * 60)
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countDownTimeOut  = setTimeout(()=>{
                setTime( time - 1)
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
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