import styles from '../styles/components/Profile.module.css';
export function Profile (){
    return(
        <div className={styles.profileContainer}>
            <img src='https://github.com/Lucasfield3.png' alt='image'/>
            <div>
                <strong>Lucas Rocha</strong>
                <p>
                    <img src='icons/level.svg' alt='level'></img>
                    Level 0
                </p>
            </div>
        </div>
    );
}