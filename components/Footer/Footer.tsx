import styles from './Footer.module.scss'
import {Marketplaces} from "../shared/Marketplaces";
import {SocialLinks} from "../shared/SocialLinks";


export const Footer = () => {

    return (
        <div className={styles.footer}>
            <Marketplaces className={styles.marketplaces}/>
            <SocialLinks className={styles.socialLinks}/>
            <span className={styles.createBy}>Created by Neural Frens</span>
        </div>
    );
};
