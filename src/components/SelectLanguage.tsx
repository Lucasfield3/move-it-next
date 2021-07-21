import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import styles from "../styles/components/SelectLanguage.module.css"

export default function SelectLanguage(){

const {changeLanguage, selectedlanguage, handleLanguage } = useContext(LanguageContext)

    return(
        <div className={styles.customSelect}>
            <select value={selectedlanguage} onChange={(e)=>changeLanguage(e.target.value)}>
                <option value='portuguese'>{handleLanguage().optionPortuguese}</option>
                <option value='english'>{handleLanguage().optionEnglish}</option>
                <option value='spanish'>{handleLanguage().optionSpanish}</option>
            </select>
        </div>
    )
}