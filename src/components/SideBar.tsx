import { useState } from 'react'
import styles from '../styles/components/SideBar.module.css'
export function SideBar(){

    const [ isActive, setActive ] = useState(false)
    const [ isOnIconHome, setIsOnIconHome] = useState(false)
    const [ isOnIconAward, setIsOnIconAward] = useState(false)

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
            <div  className={styles.sideBarGrid}>
                <div onClick={handleActive}  className={styles.sideBarMenuArea}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
            <nav style={{left:isActive && '0%' || '-100%', transition:'left 0.5s'}} className={styles.sideBarActive}>
                <div className={styles.icons}>
                    <img onClick={handleActive} src='icons/close.svg' alt='close' ></img>
                    <img src='/icons/Logo.png' alt='icon'/>
                </div>
                <div className={styles.barLinks}>
                    <div onMouseOver={iconsHoverHandleHome}  onMouseOut={iconsHoverHandleHome} >
                        <img src={isOnIconHome && 'icons/home-dark.png' || 'icons/home.svg'} alt='Home'/>
                    </div>
                    <div onMouseOver={iconsHoverHandleAward}  onMouseOut={iconsHoverHandleAward}>
                        <img src={isOnIconAward && 'icons/award-dark.png' || 'icons/award.svg'} alt='leader'/>
                    </div>
                </div>
            </nav>
        </>
    )

}
