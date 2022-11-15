import React, {memo} from 'react';
import styles from './SpeedometerArrow.module.scss'

interface SpeedometerArrowProps {
    progress: number
}

const initialRotateArrow = -90

const SpeedometerArrow = memo(({progress}: SpeedometerArrowProps) => {

    const calculateRotateArrow = () => {
        const positiveProgress = Math.abs(progress)
        if (progress <= 0 && progress >= -20) {
             // calculation rotate within the working value (from 0 to 20)
            const percent = 1 / (20 / positiveProgress)
            return initialRotateArrow + (180 * percent)
        } else if (progress >= 10) {
            // limit rotate by positive change price (progress)
            return initialRotateArrow - 40
        } else if (progress > 0) {
            // more operating values (from 0 to -20)
            const percent = 1 / (10 / progress)
            return initialRotateArrow - (50 * percent)
        } else if (progress <= -25) {
            // limit rotate by negative change price (progress)
            const percent = 1 / (20 / 25)
            return initialRotateArrow + (180 * percent)
        } else if (progress <= -20) {
            // less than the operating values (from 0 to -20)
            const percent = 1 / (20 / positiveProgress)
            return initialRotateArrow + (180 * percent)
        }
    }

    return (
        <img
            style={{transform: `rotate(${calculateRotateArrow()}deg)`}}
            src="/images/speedometer/arrow.svg"
            alt="->"
            className={styles.arrow}
        />
    );
})

export default SpeedometerArrow;
