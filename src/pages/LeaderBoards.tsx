import styles from '../styles/pages/LeaderBoards.module.css'
import React from "react";
import { ItemsLeaderBoards } from "../components/ItemsLeaderBoards";
import MenuButton from '../components/MenuButton';
import Settings from '../components/Settings';
import { GetServerSideProps } from 'next';
import { SettingsProvider } from '../context/SettingsContext';
import { ChallengesProvider } from '../context/ChallengesContext';
import { PageProps } from '.';
import BodyHome from '../components/BodyHome';
import { HeaderLeaderBoard } from '../components/HeaderLeaderBoard';
import { CountDownProvider } from '../context/CountDownContext';
import { LanguageProvider } from '../context/LanguageContext';


export default function LeaderBoards (props:PageProps){

    return(
        <>   
        <LanguageProvider selectedlanguage={props.language}>
            
            <SettingsProvider minutes={props.minutes} seconds={props.seconds} theme={props.theme}>

                <ChallengesProvider
            
                level={props.level}
                currentExperience={props.currentExperience}
                challengesCompleted={props.challengesCompleted}
                >
                    <CountDownProvider>
                    <BodyHome>
                        <MenuButton/>
                        <div className={styles.containerLeaderBoards}>
                            <HeaderLeaderBoard/>
                            <div className={styles.gridLeaderBoards}>
                                <ItemsLeaderBoards/>
                            </div>
                        </div>
                        <Settings/>
                    </BodyHome>
                    </CountDownProvider>
                </ChallengesProvider>   
            </SettingsProvider>
        </LanguageProvider>
        </>
    )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => { 

    const { level, currentExperience, challengesCompleted, theme, minutes, seconds, language } = ctx.req.cookies
  
    return{
      props:{
        level:Number(level),
        currentExperience:Number(currentExperience),
        challengesCompleted:Number(challengesCompleted),
        theme:String(theme),
        minutes:String(minutes),
        seconds:String(seconds),
        language:String(language)
        }
  
    }
  
  }