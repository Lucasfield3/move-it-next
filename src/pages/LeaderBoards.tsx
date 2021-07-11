import styles from '../styles/pages/LeaderBoards.module.css'
import React from "react";
import { ItemsLeaderBoards } from "../components/ItemsLeaderBoards";
import MenuButton from '../components/MenuButton';
import Settings from '../components/Settings';
import { GetServerSideProps } from 'next';
import { SettingsProvider } from '../context/SettingsContext';
import { ChallengesProvider } from '../context/ChallengesContext';
import { HomeProps } from '.';
import BodyHome from '../components/BodyHome';
import { HeaderLeaderBoard } from '../styles/components/HeaderLeaderBoard';


export default function LeaderBoards (props:HomeProps){

    return(
        <>   
        <SettingsProvider theme={props.theme}>

            <ChallengesProvider
        
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
            >
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
            </ChallengesProvider>   
        </SettingsProvider>
        </>
    )

}


export const getServerSideProps: GetServerSideProps = async (ctx) => { 

    const { level, currentExperience, challengesCompleted, theme } = ctx.req.cookies
  
    return{
      props:{
        level:Number(level),
        currentExperience:Number(currentExperience),
        challengesCompleted:Number(challengesCompleted),
        theme:String(theme)
    }
  
    }
  
  }
  