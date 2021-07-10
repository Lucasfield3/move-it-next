import { useContext } from 'react'
import { MenuButtonContext } from '../context/MenuButtonContext'
import styles from '../styles/components/MenuButton.module.css'

export default function MenuButton (){
   
    const { handleIsActive } = useContext(MenuButtonContext)

    return(
        <div className={styles.sideBarGrid}>
            <div onClick={handleIsActive}  className={styles.sideBarMenuArea}>
                <div ></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )

}