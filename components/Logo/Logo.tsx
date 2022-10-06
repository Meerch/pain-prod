import styles from './Logo.module.scss'

export const Logo = () => {

    return (
        <div className={styles.logo}>
            <img
                style={{width: '167px'}}
                className={styles.ai}
                src="/images/logo-descriptions/ai-4x.png"
                alt="6666 ai-generate fakcec of"
            />
            <img
                className={styles.logoImage}
                src="/images/logo.gif"
                alt="PAIN"
            />
            <img

                style={{width: '144px'}}
                className={styles.ethereum}
                src="/images/logo-descriptions/ethereum-4x.png"
                alt="on ethereum"
            />
            <div className={styles.nftMinted}>
                <img
                    style={{width: '114px'}}
                    className={styles.text}
                    src="/images/logo-descriptions/nft-minted-4x.png"
                    alt="NFT minted"
                />
                <span className={styles.amount}>2522/6666</span>
            </div>
        </div>
    )
}