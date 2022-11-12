import React, {memo} from 'react';
import styles from './SpeedometerInfo.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store"
import {Stats} from "../../model/types/speedometerSchema";

interface SpeedometerInfoProps {
    changePrice?: number | string
    ethPrice?: number
}

const SpeedometerInfo = memo((props: SpeedometerInfoProps) => {
    const {changePrice, ethPrice} = props


    return (
        <div className={styles.info}>
            <span className={styles.title}>excruciating pain</span>
            {
                changePrice &&
                <div className={styles.infoTime}>
                    <span className={styles.text}>24h change:</span>
                    <span className={styles.percent}>{changePrice}%</span>
                </div>
            }
            {
                ethPrice &&
                <span className={styles.price}>
                    eth price: <span className={styles.mark}>${ethPrice.toFixed(0)}</span>
                </span>
            }
        </div>
    )
})

export default SpeedometerInfo
