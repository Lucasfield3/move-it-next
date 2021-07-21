import { useContext } from "react"
import { CSSProperties } from "styled-components"
import { MediaContext } from "../context/MediaContext"
import { SettingsContext } from "../context/SettingsContext"
import styles from "../styles/components/Settings.module.css"

interface Props{
    style?:CSSProperties;
    onMouseOver?:()=>void;
    onMouseOut?:()=>void;
    src?:string
    onClick?:()=>void
}

export default function Settings(props:Props){

    const { openCloseSettingsModal } = useContext(SettingsContext)
    const {match} = useContext(MediaContext)

    return(
        <>
            <div onClick={props.onClick} onMouseOut={props.onMouseOut} onMouseOver={props.onMouseOver} style={props.style} className={styles.settingsIcon}>
                <img onClick={openCloseSettingsModal} src={match && props.src || '/icons/settings-dark.svg'}/>
            </div>
        </>
    )

}