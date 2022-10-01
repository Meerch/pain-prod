import styles from './Logo.module.scss'

export const Logo = () => {

    return (
        <div className={styles.logo}>
            <img className={styles.ai} src="/images/logo-descriptions/ai.png" alt="6666 ai-generate fakcec of"/>
            <img className={styles.logoImage} src="/images/logo.png" alt="PAIN"/>
            <img className={styles.ethereum} src="/images/logo-descriptions/ethereum.png" alt="on ethereum"/>
            <div className={styles.nftMinted}>
                <img className={styles.text} src="/images/logo-descriptions/nft-minted.png" alt="NFT minted"/>
                <span className={styles.amount}>2522/6666</span>
            </div>
        </div>
    )
}