import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountDownContext } from '../context/CountDownContext';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox (){

    const {activeChallenge, resetChallenge, challengeCompleted} = useContext(ChallengesContext)

    const { resetCountDown } = useContext(CountDownContext)

    const { selectedlanguage, handleLanguage } = useContext(LanguageContext)

    function handleSuccededChallenge(){
        challengeCompleted()
        resetCountDown()
    }

    function handleFailedChallenge(){
        resetChallenge()
        resetCountDown()
    }

    function handleDescription(){
        if(selectedlanguage === 'portuguese'){
            return activeChallenge.descriptionPortuguese
        }

        if(selectedlanguage === 'english'){
            return activeChallenge.descriptionEnglish
        }

        if(selectedlanguage === 'spanish'){
            return activeChallenge.descriptionSpanish
        }
    }

    // function handleDescriptionLanguage(){
    //     if(selectedlanguage === 'portuguese') return activeChallenge.descriptionPortuguese
    //     if(selectedlanguage === 'english') return activeChallenge.descriptionEnglish
    //     if(selectedlanguage === 'spanish') return activeChallenge.descriptionSpanish
    // }
 


    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>{handleLanguage().challengeBoxTextActiveXpGained.gainded} {activeChallenge.amount} {handleLanguage().challengeBoxTextActiveXpGained.of} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}alt='desafio'></img>
                        <strong>{handleLanguage().challengeBoxTextActiveHeader}</strong>
                        <p>{handleDescription()}</p>
                    </main>
                    <footer>
                        <button 
                        type='button'
                        className={styles.challengeFailedButton}
                        onClick={handleFailedChallenge}
                        >{handleLanguage().buttonTextFailed}</button>
                        <button
                        type='button'
                        className={styles.challengeSucceededButton}
                        onClick={handleSuccededChallenge}
                        >
                            {handleLanguage().buttonTextsucceeded}
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeBoxNotActive}>
                    <strong>{handleLanguage().challengeBoxTextNotActiveHeader}</strong>
                    <p>
                        <img src='icons/level-up.svg' alt='level up'/>  
                        {handleLanguage().challengeBoxTextNotActiveFooter}
                    </p>
                </div>
            )}
           
        </div>
    )

}