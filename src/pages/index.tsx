import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChalenges } from "../components/CompletedChalenges";
import styles from '../styles/pages/Home.module.css';
import { CountDown } from "../components/CountDown";
import Head from 'next/head';
import React, { CSSProperties, useContext } from "react";
import { ChallengeBox } from "../components/ChallengesBox";
import { CountDownProvider } from "../context/CountDownContext";
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from "../context/ChallengesContext";
import { ToggleDarktheme } from "../components/ToggleDarkTheme";
import { ToggleDarkThemeContext } from "../context/ToggleDarkThemeContext";


interface HomeProps {
  level:number;
  currentExperience:number;
  challengesCompleted:number;
  hasClickedToggle:boolean
}

export default function Home(props: HomeProps) {

  const { hasClickedToggle } = useContext(ToggleDarkThemeContext)
  
  const styleToggle = {
    background: hasClickedToggle && 'var(--title)',
    transition: 'background 200ms linear'
} as CSSProperties

  return (
    
    <ChallengesProvider
    
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      
      <body className={styles.bodyHome} style={styleToggle}>
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar/>
          <ToggleDarktheme/>

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
      </body>
    </ChallengesProvider>
      
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => { 

  const { level, currentExperience, challengesCompleted, hasClickedToggle } = ctx.req.cookies

  return{
    props:{
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted),
      hasClickedToggle:Boolean(hasClickedToggle)
  }

  }

}

//Essa função getServerSideProp esta rodando no nodejs e não no browser.
// O por que dessa função?. Porque quando a  aplicação é requisitada na barra de pesquisa do google,
// o google n vai ler essa função se essa função estiver rodando na camada do browser, por conta de ser
// asincrona, mas ao colocar essa função na camada intermediária aonde fica o next, antes de renderizar o index
// no front e requisição dessa função asincroina é feita antes, por tanto, as informações que essa função retorna
// vão popular o index antes que o google leia a página, assim, os dados serão mostrados na página  