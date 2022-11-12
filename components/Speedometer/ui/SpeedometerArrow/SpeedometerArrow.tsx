import React, { FC } from 'react';
import styles from './SpeedometerArrow.module.scss'
import {initialRotateArrow} from "../Speedometer/Speedometer";

interface SpeedometerArrowProps {
    progress: number
}

const SpeedometerArrow: FC<SpeedometerArrowProps> = ({progress}) => {

    const calculateRotateArrow = () => {
        return initialRotateArrow + (260 * progress)
    }

    return (
        <img
            style={{transform: `rotate(${calculateRotateArrow()}deg)`}}
            src="/images/speedometer/arrow.svg"
            alt="->"
            className={styles.arrow}
        />
    );
};

export default SpeedometerArrow;
