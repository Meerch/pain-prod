import styles from './Links.module.scss'

export const Links = () => {

    return (
        <div className={styles.links}>
            <a className={styles.link} href="#">
                <img src="/images/links/etherscan.png" alt="etherscan"/>
            </a>

            <a className={styles.link} href="#">
                <img src="/images/links/faq.png" alt="FAQ"/>
            </a>
        </div>
    );
};
