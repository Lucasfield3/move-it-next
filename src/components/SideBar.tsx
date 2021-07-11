import { useContext } from 'react'
import { useState } from 'react'
import styles from '../styles/components/SideBar.module.css'
import { useRouter } from 'next/router'
import Image  from 'next/image'
import { MenuButtonContext } from '../context/MenuButtonContext'
export function SideBar(){

    const [ isOnIconHome, setIsOnIconHome] = useState(false)
    const [ isOnIconAward, setIsOnIconAward] = useState(false)

    const router = useRouter()

    const { handleIsActive, isActive } = useContext(MenuButtonContext)

    function iconsHoverHandleHome(){
        setIsOnIconHome(!isOnIconHome)
    }

    function iconsHoverHandleAward(){
        setIsOnIconAward(!isOnIconAward)
    }



 
    return(
        <> 
            <nav style={{left:isActive && '0%' || '-100%', transition:'left 500ms ease-in-out'}} className={styles.sideBarActive}>
                <div className={styles.icons}>
                    <img  className={styles.iconClose} onClick={handleIsActive} src='/icons/close.svg?lastmod=12345678' alt='close'/>
                    <Image width={50} height={50} src='/icons/Logo.png?lastmod=12345678' alt='icon'/>
                </div>
                <div className={styles.barLinks}>
                    <div onMouseOver={iconsHoverHandleHome} onClick={()=>router.push('/')}  onMouseOut={iconsHoverHandleHome} >
                        <Image width={30} height={30} src={isOnIconHome && '/icons/home-dark.png?lastmod=12345678' || '/icons/home.svg?lastmod=12345678'} alt='Home'/>
                    </div>
                    <div onMouseOver={iconsHoverHandleAward} onClick={()=>router.push('/LeaderBoards')} onMouseOut={iconsHoverHandleAward}>
                        <Image width={30} height={30} src={isOnIconAward && '/icons/award-dark.png?lastmod=12345678' || '/icons/award.svg?lastmod=12345678'} alt='leader'/>
                    </div>
                </div>
            </nav>
        </>
    )

}

