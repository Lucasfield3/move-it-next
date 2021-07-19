import { useEffect } from 'react'
import { useContext } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import styles from '../styles/components/EditCicle.module.css'


export default function EditCicle(){

    const { setMinutesInput, setSecondsInput, minutesEdit, secondsEdit } = useContext(SettingsContext)

    function handleMaxTimeLimitSecond(value:string){
        if(Number(value) > 59) {
            setSecondsInput('59')
        }else if(isNaN(Number(value))){
            setSecondsInput('')
        }else{
            setSecondsInput(value)
        }
        
    }

    function checkIsNaNMin(){
        if(isNaN(Number(minutesEdit))){
            setMinutesInput('')
        }
        if(minutesEdit == 'undefined'){
            setMinutesInput('25')
        }
    }

    function checkIsNaNSec(){
        if(isNaN(Number(secondsEdit))){
            setSecondsInput('')
        }
        if(secondsEdit == 'undefined'){
            setSecondsInput('00')
        }
    }

    useEffect(()=> {
        checkIsNaNMin()
        checkIsNaNSec()
        console.log(minutesEdit)
        console.log(secondsEdit)
    }, [])

    function handleMaxTimeLimitMinute(value:string){
        if(Number(value) > 99) {
            setMinutesInput('99')
        }else if(isNaN(Number(value))){
            setMinutesInput('')
        }else{
            setMinutesInput(value)
        }
        
    }

    return(
        <div className={styles.timer}>
            <input value={minutesEdit} maxLength={2} placeholder='00' onChange={(e)=>handleMaxTimeLimitMinute(e.target.value)}   type='text'/>
            <p>:</p>
            <input value={secondsEdit} maxLength={2} placeholder='00' onChange={(e)=>handleMaxTimeLimitSecond(e.target.value)}   type='text'/>
        </div>
    )

}