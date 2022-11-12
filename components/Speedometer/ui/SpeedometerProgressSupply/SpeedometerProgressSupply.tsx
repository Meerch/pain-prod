import React, { FC } from 'react';
import styles from "./SpeedometerProgressSupply.module.scss";

interface SpeedometerBorderProps {
    progress: number
}

const SpeedometerProgressSupply: FC<SpeedometerBorderProps> = ({progress}) => {
    return (
        <svg className={styles.speedometerProgressSupply} width="526" height="437" viewBox="0 0 526 437" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                fill="url(#gradient)"
                d="M523.975 259.849C522.167 117.127 406.012 2 262.987 2C119.963 2 3.80766 117.127 2 259.849H11.7056C13.5133 122.513 125.326 11.7222 262.987 11.7222C400.648 11.7222 512.461 122.513 514.269 259.849H514.286V266.612L514.269 356.313C513.391 423.252 514.269 392.767 514.269 435H520.893C520.893 383.431 523.096 336.257 523.975 266.612H524V259.849H523.975Z"
                stroke="white" strokeWidth="3" strokeMiterlimit="10"
            >
            </path>
            <linearGradient id="gradient">
                <stop offset="0%" />
                <stop offset="50%" />
                <stop offset="50.1%" />
                <stop offset="100%" />
            </linearGradient>
        </svg>
    );
}

export default SpeedometerProgressSupply;
