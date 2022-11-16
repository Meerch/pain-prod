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

    useContractRead(generateContractPainSetting('availableSupply', {
        args: [0],
        onSuccess: (data) => changeSupplies(0, data),
        select: (data) => toWei(formatEther(data))
    }))
    useContractRead(generateContractPainSetting('availableSupply', {
        args: [1],
        onSuccess: (data) => changeSupplies(1, data),
        select: (data) => toWei(formatEther(data))
    }))
    useContractRead(generateContractPainSetting('availableSupply', {
        args: [2],
        onSuccess: (data) => changeSupplies(2, data),
        select: (data) => toWei(formatEther(data))
    }))
    useContractRead(generateContractPainSetting('availableSupply', {
        args: [3],
        onSuccess: (data) => changeSupplies(3, data),
        select: (data) => toWei(formatEther(data))
    }))

    return (
        <div className={styles.logo}>
            {/*<img*/}
            {/*    style={{width: '167px'}}*/}
            {/*    className={styles.ai}*/}
            {/*    src="/images/logo-descriptions/ai-4x.png"*/}
            {/*    alt="6666 ai-generate fakcec of"*/}
            {/*/>*/}
            <span className={styles.ai}>
                6666 AI-Generated<br/>Faces of
            </span>
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
            <div className={styles.status}>
                <span className={styles.title}>Mint start:</span>
                <span className={styles.value}>TBA</span>
            </div>

            <div className={styles.nftMinted}>
                <span className={styles.title}>NFT minted:</span>
                {/*<img*/}
                {/*    style={{width: '114px'}}*/}
                {/*    className={styles.text}*/}
                {/*    src="/images/logo-descriptions/nft-minted-4x.png"*/}
                {/*    alt="NFT minted"*/}
                {/*/>*/}
                <span className={styles.amount}>
                    {
                        supplies?.length
                            ? 6666 - supplies?.reduce((a, b) => a + b)
                            : 0
                    }
                    /6666
                </span>
            </div>
        </div>
    )
}