import { useState } from "react";
import { useEffect } from "react";
import { createContext, ReactNode } from "react";
import { useCookies } from "react-cookie";
import languagesData from  '../../languages.json'
import { Challenge } from "./ChallengesContext";
import challenges from '../../challenges.json'

interface LanguageTypes{
    challengesText:string,
    buttonTextDefault:string,
    buttonTextActive:string,
    buttonTextBlocked:string,
    buttonTextFailed:string,
    buttonTextsucceeded:string,
    challengeBoxTextNotActiveHeader:string,
    challengeBoxTextNotActiveFooter:string,
    challengeBoxTextActiveXpGained:{gainded:string, of:string},
    challengeBoxTextActiveHeader:string,
    notificationHeader:string,
    notificationText:string,
    modalChallengeCompletedHeader:string,
    modalChallengeCompletedText:string,
    modalSettingsHeader:string,
    modalSettingsTheme:string,
    modalSettingsCicle:string,
    modalSettingsLanguage:string,
    leaderBoardsPosition:string,
    leaderBoardsUser:string,
    leaderBoardsChallenge:string,
    leaderBoardsExperience:string,
    leaderBoardsChallengesCompleted:string,
    selectlanguageText:string,
    optionPortuguese:string,
    optionEnglish:string,
    optionSpanish:string
}


interface LanguageContextData{
    changeLanguage:(value:string)=>void;
    selectedlanguage:string;
    handleLanguage:()=>LanguageTypes;
}

export const LanguageContext = createContext({} as LanguageContextData)

interface LanguageProviderProps {
    children:ReactNode;
    selectedlanguage?:string
}

export function LanguageProvider({children,...rest}: LanguageProviderProps){

    const [ cookies, setCookies ] = useCookies() 

    const [ selectedlanguage, setSelectedLanguage ] = useState(rest.selectedlanguage === 'undefined' && 'portuguese' || rest.selectedlanguage)

    function changeLanguage(value:string){
        setSelectedLanguage(value)
    }

    const english = languagesData.english as LanguageTypes
    const portuguese = languagesData.portuguese as LanguageTypes
    const spanish = languagesData.spanish as LanguageTypes
    
    function handleLanguage(){
        if(selectedlanguage === 'portuguese'){
            return portuguese
        }

        if(selectedlanguage === 'english'){
            return english
        }

        if(selectedlanguage === 'spanish'){
            return spanish
        }

    }

    

    useEffect(()=>{
        setCookies('language', selectedlanguage)
    }, [selectedlanguage])



    return(
        <LanguageContext.Provider value={{changeLanguage, selectedlanguage, handleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )

}