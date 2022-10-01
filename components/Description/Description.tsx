import styles from './Description.module.scss'

export const Description = () => {

    return (
        <div className={styles.description}>
            <span className={styles.title}>
                You can only mint when the ETH price is down.
            </span>
            <br/>
            <span className={styles.text}>
                The ETH price and % of its 24h fall is recorded in your pAIn NFT&apos;s metadata.
            </span>
        </div>
    );
};
