import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChalenges } from "../components/CompletedChalenges";
import styles from '../styles/pages/Home.module.css';
import { CountDown } from "../components/CountDown";
import Head from 'next/head';
import React from "react";
import { ChallengeBox } from "../components/ChallengesBox";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChalenges/>
          <CountDown/>
        </div>
        <div style={{height: '100%'}}>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  )
}
