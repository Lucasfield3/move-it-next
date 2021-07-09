import styles from '../styles/pages/LeaderBoards.module.css'
import React, { CSSProperties } from "react";
import { ItemsLeaderBoards } from "../components/ItemsLeaderBoards";
import { useCookies } from "react-cookie";
import MenuButton from '../components/MenuButton';


export default function LeaderBoards (){

    const [ cookies ] = useCookies()


    const styleToggle = {
      background: cookies.theme === 'dark' && 'var(--title)',
      transition: 'background 200ms linear'
  } as CSSProperties

  const styleColorTexts = {
    color: cookies.theme === 'dark' && 'var(--white)'
  } as CSSProperties




    return(
        <>      
            <div style={styleToggle} className={styles.body}>
                <MenuButton/>
                <div className={styles.containerLeaderBoards}>
                    <header style={styleColorTexts} className={styles.headerLeaderBoards}>
                        LeaderBoard
                    </header>
                    <div className={styles.titles}>
                        <div className={styles.leftTitles}>
                            <p style={styleColorTexts}>Posição</p>
                            <p style={styleColorTexts}>Usuário</p>
                        </div>
                        <div className={styles.rightTitles}>
                            <p style={styleColorTexts}>Desafios</p>
                            <p style={styleColorTexts}>Experiência</p>
                        </div>
                    </div>
                    <div className={styles.gridLeaderBoards}>
                        <ItemsLeaderBoards/>
                    </div>
                </div>
            </div>
        </>
    )

}