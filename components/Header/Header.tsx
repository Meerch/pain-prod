import styles from './Header.module.scss'
import {SocialLinks} from "../shared/SocialLinks";
import {Marketplaces} from "../shared/Marketplaces";

export const Header = () => {

    return (
        <div className={styles.header}>
            <span className={styles.connect}>connect</span>
            <SocialLinks className={styles.links}/>
            <Marketplaces  className={styles.marketplaces}/>
            <div className={styles.openMenu}/>
        </div>
    )
}

