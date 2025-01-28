import styles from './Header.module.css'

import igniteLogo from '../assets/logo.svg'

export function Header(){

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={igniteLogo} alt='Logo'/>
            <h1 className={styles.title}>
                <span className={styles.first}>to</span>
                <span className={styles.second}>do</span>
            </h1>
        </header>
       
    )

}