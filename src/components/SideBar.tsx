import { CSSProperties, useContext } from 'react'
import { useState } from 'react'
import { ToggleDarkThemeContext } from '../context/ToggleDarkThemeContext'
import styles from '../styles/components/SideBar.module.css'
import { useRouter } from 'next/router'
import Image  from 'next/image'
export function SideBar(){

    const [ isActive, setActive ] = useState(false)
    const [ isOnIconHome, setIsOnIconHome] = useState(false)
    const [ isOnIconAward, setIsOnIconAward] = useState(false)

    const router = useRouter()

    const { theme } = useContext(ToggleDarkThemeContext)

    const styleToggle = {
        background: theme == 'dark' && 'var(--title)',
        transition:'background 200ms linear',
    } as CSSProperties
  

    function handleActive(){
        setActive(!isActive)
    }

    function iconsHoverHandleHome(){
        setIsOnIconHome(!isOnIconHome)
    }

    function iconsHoverHandleAward(){
        setIsOnIconAward(!isOnIconAward)
    }



 
    return(
        <>
            <div style={styleToggle} className={styles.sideBarGrid}>
                <div onClick={handleActive}  className={styles.sideBarMenuArea}>
                    <div style={{background:theme == 'dark' && 'var(--white)'}} ></div>
                    <div style={{background:theme == 'dark' && 'var(--white)'}}></div>
                    <div style={{background:theme == 'dark' && 'var(--white)'}}></div>
                </div>
            </div>
            
            <nav style={{left:isActive && '0%' || '-100%', transition:'left 0.5s'}} className={styles.sideBarActive}>
                <div className={styles.icons}>
                    <Image width={50} height={50} className='icon-close' onClick={handleActive} src='/icons/close.svg' alt='close'/>
                    <Image width={50} height={50} src='/icons/Logo.png' alt='icon'/>
                </div>
                <div className={styles.barLinks}>
                    <div onMouseOver={iconsHoverHandleHome} onClick={()=>router.push('/')}  onMouseOut={iconsHoverHandleHome} >
                        <Image width={30} height={30} src={isOnIconHome && '/icons/home-dark.png' || '/icons/home.svg'} alt='Home'/>
                    </div>
                    <div onMouseOver={iconsHoverHandleAward} onClick={()=>router.push('LeaderBoard/LeaderBoards')} onMouseOut={iconsHoverHandleAward}>
                        <Image width={30} height={30} src={isOnIconAward && '/icons/award-dark.png' || '/icons/award.svg'} alt='leader'/>
                    </div>
                </div>
            </nav>
        </>
    )

}

