import { useContext } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import styles from '../styles/components/EditCicle.module.css'


export default function EditCicle(){


    const { setMinutesInput, setSecondsInput, minutesEdit, secondsEdit } = useContext(SettingsContext)

    return(
        <div className={styles.timer}>
            <input value={minutesEdit}  onChange={(e)=>{
               setMinutesInput(e.target.value)
                console.log(e.target.value)
                }} max={99} pattern='\d*' min={1}  type='number' placeholder='00'/>
            <p>:</p>
            <input value={secondsEdit}  onChange={(e)=>{
                setSecondsInput(e.target.value)
                console.log(e.target.value)
                }} max={99} pattern='\d*' min={1}  type='number' placeholder='00'/>
        </div>
    )

}