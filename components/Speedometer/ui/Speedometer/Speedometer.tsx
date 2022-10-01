import styles from './Speedometer.module.scss'
import classNames from "classnames";
import {useCallback, useMemo, useState} from "react";
import {getRandomInt} from "../../../../helpers/utils";

const parts = [
    {
        id: 0,
        percent: 0,
        borderActive: '/images/speedometer/part-0/border-active.svg',
        borderInactive: '/images/speedometer/part-0/border-inactive.svg'
    },
    {
        id: 1,
        percent: 0.2,
        borderActive: '/images/speedometer/part-1/border-active.svg',
        borderInactive: '/images/speedometer/part-1/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-1/background-active.svg',
        backgroundInactive: '/images/speedometer/part-1/background-inactive.svg',
    },
    {
        id: 2,
        percent: 0.4,
        borderActive: '/images/speedometer/part-2/border-active.svg',
        borderInactive: '/images/speedometer/part-2/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-2/background-active.svg',
        backgroundInactive: '/images/speedometer/part-2/background-inactive.svg',
    },
    {
        id: 3,
        percent: 0.6,
        borderActive: '/images/speedometer/part-3/border-active.svg',
        borderInactive: '/images/speedometer/part-3/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-3/background-active.svg',
        backgroundInactive: '/images/speedometer/part-3/background-inactive.svg',
    },
    {
        id: 4,
        percent: 0.8,
        borderActive: '/images/speedometer/part-4/border-active.svg',
        borderActiveHalf: '/images/speedometer/part-4/border-active-half.svg',
        borderInactive: '/images/speedometer/part-4/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-4/background-active.svg',
        backgroundInactive: '/images/speedometer/part-4/background-inactive.svg',
    }
]
const initialRotateArrow = -130

const gapsRotates: { [key: string]: [number, number] } = {
    0: [0, 30],
    0.2: [45, 75],
    0.4: [90, 122],
    0.6: [135, 170],
    0.8: [182, 215],
    // 1: [0, 0]
}

//
// const fields = {
//     0.2: [0, 30],
//     0.4: [45, 75],
//     0.6: [90, 122],
//     0.8: [135, 170],
//     1: [182, 215],
//     // 1: [0, 0]
// }


export const Speedometer = () => {
    const [progress, setProgress] = useState(1)

    // const isActivePart = useMemo((percent: number) => {
    //     return
    // }, [progress])

    const calculateRotateArrow = () => {
        let initialGap: [number, number] = [0, 0]
        Object.entries(gapsRotates).forEach(([key, value]) => {
            if (+key < progress) {
                initialGap = value
            }
        })
        const randomValue = getRandomInt(...initialGap)
        return initialRotateArrow + (randomValue)
    }

    return (
        <div className={styles.speedometer}>
            <div className={styles.parts}>
                {
                    parts.map(({
                                   id,
                                   borderInactive,
                                   borderActive,
                                   // borderActiveHalf,
                                   percent,
                                   backgroundActive,
                                   backgroundInactive
                               }) => (
                        <div key={id} className={classNames(styles.part, styles[`part-${id}`])}>
                            {/*{borderActive && <img className={styles.borderActive} src={borderActive} alt=""/>}*/}
                            {/*{borderActiveHalf && <img className={styles.borderActiveHalf} src={borderActiveHalf} alt=""/>}*/}
                            {/*{borderInactive && <img className={styles.borderInactive} src={borderInactive} alt=""/>}*/}
                            {/*{backgroundActive && <img className={styles.backgroundActive} src={backgroundActive} alt=""/>}*/}
                            {/*{backgroundInactive &&*/}
                            {/*    <img className={styles.backgroundInactive} src={backgroundInactive} alt=""/>}*/}
                            <div className={classNames(styles.partBorder, styles.elementPart)}>
                                {
                                    percent < progress
                                        ? <img className={styles.imageBorderActive} src={borderActive} alt=""/>
                                        : <img className={styles.imageBorderInactive} src={borderInactive} alt=""/>
                                }
                            </div>

                            <div className={classNames(styles.partBackground, styles.elementPart)}>
                                {
                                    percent < progress
                                        ? <img className={styles.imageBackgroundActive} src={backgroundActive} alt=""/>
                                        : <img className={styles.imageBackgroundInactive} src={backgroundInactive}
                                               alt=""/>
                                }

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={styles.valuesPercent}>
                <span className={styles.percent0}>0%</span>
                <span className={styles.percent5}>-5%</span>
                <span className={styles.percent10}>-10%</span>
                <span className={styles.percent15}>-15%</span>
                <span className={styles.percent20}>-20%</span>
                <span className={styles.plusInfinity}>+∞</span>
                <span className={styles.minusInfinity}>-∞</span>
            </div>

            <div className={styles.info}>
                <span className={styles.title}>excruciating pain</span>
                <div className={styles.infoTime}>
                    <span className={styles.text}>24h change:</span>
                    <span className={styles.percent}>-17%</span>
                </div>
                <span className={styles.price}>
                    eth price: <span className={styles.mark}>$1745</span>
                </span>
            </div>

            <div className={styles.buttonMint}>
                <span className={styles.text}>MINT PAIN</span>
            </div>

            {/*<img*/}
            {/*    className={styles.buttonMint}*/}
            {/*    src="/images/button-mint.png"*/}
            {/*    alt="Mint Pain"*/}
            {/*/>*/}

            <img
                style={{transform: `rotate(${calculateRotateArrow()}deg)`}}
                src="/images/speedometer/arrow.svg"
                alt="->"
                className={styles.arrow}
            />
        </div>
    )
}