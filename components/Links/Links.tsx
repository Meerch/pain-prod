import styles from './Links.module.scss'

export const Links = () => {

    return (
        <div className={styles.links}>
            <a className={styles.link} href="#">
                <img
                    style={{width: '150px'}}
                    src="/images/links/etherscan-4x.png"
                    alt="etherscan"
                />
            </a>

            <a className={styles.link} href="#">
                <img
                    style={{width: '65px'}}
                    src="/images/links/faq-4x.png"
                    alt="FAQ"
                />
            </a>
        </div>
    );
};
