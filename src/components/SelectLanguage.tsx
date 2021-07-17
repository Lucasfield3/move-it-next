import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import styles from "../styles/components/SelectLanguage.module.css"

export default function SelectLanguage(){

const {changeLanguage, selectedlanguage, handleLanguage } = useContext(LanguageContext)

console.log(selectedlanguage)


    return(
        <div className={styles.customSelect}>
            <select value={selectedlanguage} onChange={(e)=>changeLanguage(e.target.value)}>
                <option value=''>{handleLanguage().selectlanguageText}</option>
                <option value='portuguese'>Português</option>
                <option value='english'>Inglês</option>
                <option value='spanish'>Espanhol</option>
            </select>
        </div>
    )
}