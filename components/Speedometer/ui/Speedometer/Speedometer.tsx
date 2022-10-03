import styles from './Speedometer.module.scss'
import classNames from "classnames";
import {useEffect, useState} from "react"

const parts = [
    {
        id: 0,
        percent: 0,
        borderActive: '/images/speedometer/part-0/border-active.svg',
        borderInactive: '/images/speedometer/part-0/border-inactive.svg'
    },
    {
        id: 1,
        percent: 0.15,
        borderActive: '/images/speedometer/part-1/border-active.svg',
        borderInactive: '/images/speedometer/part-1/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-1/background-active.svg',
        backgroundInactive: '/images/speedometer/part-1/background-inactive.svg',
    },
    {
        id: 2,
        percent: 0.32,
        borderActive: '/images/speedometer/part-2/border-active.svg',
        borderInactive: '/images/speedometer/part-2/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-2/background-active.svg',
        backgroundInactive: '/images/speedometer/part-2/background-inactive.svg',
    },
    {
        id: 3,
        percent: 0.50,
        borderActive: '/images/speedometer/part-3/border-active.svg',
        borderInactive: '/images/speedometer/part-3/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-3/background-active.svg',
        backgroundInactive: '/images/speedometer/part-3/background-inactive.svg',
    },
    {
        id: 4,
        percent: 0.68,
        borderActive: '/images/speedometer/part-4/border-active.svg',
        borderActiveHalf: '/images/speedometer/part-4/border-active-half.svg',
        borderInactive: '/images/speedometer/part-4/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-4/background-active.svg',
        backgroundInactive: '/images/speedometer/part-4/background-inactive.svg',
    }
]
const initialRotateArrow = -130

// const gapsRotates: { [key: string]: [number, number] } = {
//     0: [0, 30],
//     0.2: [45, 75],
//     0.4: [90, 122],
//     0.6: [135, 170],
//     0.8: [182, 215],
//     // 1: [0, 0]
// }

export const Speedometer = () => {
    const [progress, setProgress] = useState(0)

    const mainProgress = 1

    const calculateRotateArrow = () => {
        return initialRotateArrow + (260 * progress)
    }

    const handlerChangeProgress = (value: number) => {
        setProgress(prev => +(prev + value).toFixed(2))
    }

    useEffect(() => {
        const timer = setInterval(() => {

            setProgress(prev => {
                if (prev >= mainProgress) {
                    clearInterval(timer)
                    return prev
                }
                return +(prev + 0.01).toFixed(2)
            })
        }, 100)

        return () => {
            clearInterval(timer)
        }
        // const timer= setTimeout(() => {
        //     setProgress(0.6)
        // }, 3000)
        // return () => {
        //     clearInterval(timer)
        // }
    }, [])

    return (
        <div className={styles.speedometer}>
            {/*<button onClick={() => handlerChangeProgress(-0.20)}*/}
            {/*        style={{width: '100px', height: '50px', zIndex: 3000, position: 'relative'}}>-*/}
            {/*</button>*/}
            {/*<button onClick={() => handlerChangeProgress(0.20)}*/}
            {/*        style={{width: '100px', height: '50px', zIndex: 3000, position: 'relative'}}>+*/}
            {/*</button>*/}
            {/*<span style={{width: '100px', height: '50px', zIndex: 3000, position: 'relative'}}>Progress: {progress}</span>*/}
            <div className={styles.parts}>
                {
                    parts.map(({
                                   id,
                                   borderInactive,
                                   borderActive,
                                   borderActiveHalf,
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
                            <div  className={classNames(styles.partBorder, styles.elementPart)}>
                                {/*onClick={() => setProgress(percent + 0.1)}*/}
                                {/*{*/}
                                {/*    percent < progress*/}
                                {/*        ? id === 4*/}
                                {/*            ? progress < 0.85*/}
                                {/*                ? <img className={styles.imageBorderActive} src={borderActiveHalf} alt=""/>*/}
                                {/*                : <img className={styles.imageBorderActive} src={borderActive} alt=""/>*/}
                                {/*            : <img className={styles.imageBorderActive} src={borderActive} alt=""/>*/}
                                {/*        : <img className={styles.imageBorderInactive} src={borderInactive} alt=""/>*/}
                                {/*}*/}

                                {/*{*/}
                                {/*    percent < progress*/}
                                {/*        ? id === 4*/}
                                {/*            ? progress < 0.85*/}
                                {/*                ?*/}
                                {/*                :*/}
                                {/*            : <img className={styles.imageBorderActive} src={borderActive} alt=""/>*/}
                                {/*        :*/}
                                {/*}*/}
                                <img className={classNames(styles.imageBorderInactive, {
                                    [styles.active]: percent >= progress
                                })} src={borderInactive} alt=""/>
                                {/*<img className={classNames(styles.imageBorderActive, {*/}
                                {/*    [styles.active]: percent < progress && id === 4 && progress < 0.85*/}
                                {/*})} src={borderActiveHalf} alt=""/>*/}
                                <img className={classNames(styles.imageBorderActive, {
                                    [styles.active]: percent < progress
                                })} src={id === 4 && progress < 0.85 ? borderActiveHalf : borderActive} alt=""/>
                            </div>

                            <div className={classNames(styles.partBackground, styles.elementPart)}>
                                {/*{*/}
                                {/*    percent < progress*/}
                                {/*        ?*/}
                                {/*:*/}
                                {/*}*/}
                                <img className={classNames(styles.imageBackgroundActive, {
                                    [styles.active]: percent < progress
                                })} src={backgroundActive} alt=""/>

                                <img
                                    className={
                                        classNames(styles.imageBackgroundInactive, {
                                            [styles.active]: percent >= progress
                                        })} src={backgroundInactive}
                                    alt=""/>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={styles.valuesPercent}>
                <span onClick={() => setProgress(0.05)} className={styles.percent0}>0%</span>
                <span onClick={() => setProgress(0.22)} className={styles.percent5}>-5%</span>
                <span onClick={() => setProgress(0.36)} className={styles.percent10}>-10%</span>
                <span onClick={() => setProgress(0.55)} className={styles.percent15}>-15%</span>
                <span onClick={() => setProgress(0.78)} className={styles.percent20}>-20%</span>
                <span  onClick={() => setProgress(0)} className={styles.plusInfinity}>+∞</span>
                <span  onClick={() => setProgress(1)} className={styles.minusInfinity}>-∞</span>
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