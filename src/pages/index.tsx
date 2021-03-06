import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChalenges } from "../components/CompletedChalenges";
import styles from '../styles/pages/Home.module.css';
import { CountDown } from "../components/CountDown";
import Head from 'next/head';
import React from "react";
import { ChallengeBox } from "../components/ChallengesBox";
import { CountDownProvider } from "../context/CountDownContext";
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from "../context/ChallengesContext";
import { ToggleDarktheme } from "../components/ToggleDarkTheme";
import { SettingsProvider } from "../context/SettingsContext";
import MenuButton from "../components/MenuButton";
import Body from "../components/Body";
import Settings from "../components/Settings";
import { LanguageProvider } from "../context/LanguageContext";
import { useEffect } from "react";
import { useContext } from "react";
import { MediaContext } from "../context/MediaContext";
import { SideBar } from "../components/SideBar";
import { useCookies } from "react-cookie";





export interface PageProps {
  level:number;
  currentExperience:number;
  challengesCompleted:number;
  theme?:string;
  minutes:string;
  seconds:string;
  language:string;
}

export default function Home(props: PageProps) {

  const { match } = useContext(MediaContext)
  const [cookies] = useCookies()

  return (
    
    <>
    <LanguageProvider selectedlanguage={props.language}>
    <Head>
        <title>move.it</title>
    </Head>
    
    <SettingsProvider minutes={props.minutes} seconds={props.seconds} theme={props.theme === undefined && cookies.theme || props.theme}>
    <SideBar/>
        <Body>
        <div id='body' className={styles.wrappedContent}>

          <ChallengesProvider
      
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
          >
          
            <MenuButton/>
            
            <div className={styles.container}>
              <ExperienceBar/>
              <CountDownProvider>
                <section>
                  <div className={styles.profileSection}>
                    <Profile/>
                    <CompletedChalenges/>
                    <CountDown/>
                  </div>
                  <div className={styles.challengeBoxSection}>
                    <ChallengeBox/>
                  </div>
                </section>
              </CountDownProvider>
            </div>
            {/* {!match && <Settings/>} */}
            <Settings/>
          </ChallengesProvider>
        </div>
        </Body>
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


//Essa fun????o getServerSideProp esta rodando no nodejs e n??o no browser.
// O por que dessa fun????o?. Porque quando a  aplica????o ?? requisitada na barra de pesquisa do google,
// o google n vai ler essa fun????o se essa fun????o estiver rodando na camada do browser, por conta de ser
// asincrona, mas ao colocar essa fun????o na camada intermedi??ria aonde fica o next, antes de renderizar o index
// no front e requisi????o dessa fun????o asincroina ?? feita antes, por tanto, as informa????es que essa fun????o retorna
// v??o popular o index antes que o google leia a p??gina, assim, os dados ser??o mostrados na p??gina  