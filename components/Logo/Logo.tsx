import styles from './Logo.module.scss'
import {useState} from "react";
import {useContractRead} from "wagmi";
import {generateContractPainSetting} from "../../blockchain/utils";
import {formatEther, toWei} from "../../helpers/utils";

export const Logo = () => {
    const [supplies, setSupplies] = useState([])
    const changeSupplies = (index: number, data) => {
        setSupplies(prev => {
            const clone = [...prev]
            clone[index] = data
            return clone
        })
    }

    for (let i = 0; i < 4; i++) {
        useContractRead(generateContractPainSetting('availableSupply', {
            args: [i],
            onSuccess: (data) => changeSupplies(i, data),
            select: (data) => toWei(formatEther(data))
        }))
    }

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
                <span className={styles.amount}>
                    {
                        supplies?.length
                            ? supplies?.reduce((a, b) => a + b)
                            : 6666
                    }
                    /6666
                </span>
            </div>
        </div>
    )
}