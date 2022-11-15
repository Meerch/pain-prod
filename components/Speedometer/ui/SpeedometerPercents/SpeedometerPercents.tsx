import React, { FC } from 'react';
import styles from './SpeedometerPercents.module.scss'

interface SpeedometerPercentsProps {
    changeProgress?: (value: number) => void
}

const SpeedometerPercents: FC<SpeedometerPercentsProps> = ({changeProgress}) => {

    return (
        <div className={styles.speedometerPercents}>
            <span onClick={() => changeProgress?.(0.05)} className={styles.percent0}>0%</span>
            <span onClick={() => changeProgress?.(0.22)} className={styles.percent5}>-5%</span>
            <span onClick={() => changeProgress?.(0.36)} className={styles.percent10}>-10%</span>
            <span onClick={() => changeProgress?.(0.55)} className={styles.percent15}>-15%</span>
            <span onClick={() => changeProgress?.(0.78)} className={styles.percent20}>-20%</span>
            <span onClick={() => changeProgress?.(0)} className={styles.plusInfinity}>+∞</span>
            <span onClick={() => changeProgress?.(1)} className={styles.minusInfinity}>-∞</span>
        </div>
    );
};

export default SpeedometerPercents;
