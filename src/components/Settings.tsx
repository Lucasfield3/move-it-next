import { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"
import styles from "../styles/components/Settings.module.css"

export default function Settings(){

    const { openCloseSettingsModal } = useContext(SettingsContext)


    return(
        <>
            <div className={styles.settingsIcon}>
                <img onClick={openCloseSettingsModal} src='/icons/settings-dark.svg'/>
            </div>
        </>
    )

}