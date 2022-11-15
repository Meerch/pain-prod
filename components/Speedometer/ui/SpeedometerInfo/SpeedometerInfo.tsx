import React, {memo} from 'react';
import styles from './SpeedometerInfo.module.scss'

interface SpeedometerInfoProps {
    changePrice?: number | string
    ethPrice?: number
}

const SpeedometerInfo = memo((props: SpeedometerInfoProps) => {
    const {changePrice, ethPrice} = props

    return (
        <div className={styles.info}>
            <span className={styles.title}>excruciating pain</span>

                <div className={styles.infoTime}>
                    <span className={styles.text}>24h change:</span>
                    <span className={styles.percent}>
                        {changePrice ? `${changePrice} %` : 'Loading...'}
                    </span>
                </div>

                <span className={styles.price}>
                    eth price: <span className={styles.mark}>
                    {ethPrice ? `$${ethPrice.toFixed(0)}` : 'Loading...'}
                    </span>
                </span>
        </div>
    )
})

export default SpeedometerInfo
