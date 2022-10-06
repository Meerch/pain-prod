import styles from './Speedometer.module.scss'
import classNames from "classnames";
import {useEffect, useState} from "react"
import {initialRotateArrow, parts} from "./constants";

export const Speedometer = () => {
    const [progress, setProgress] = useState(0)

    const mainProgress = 0.74

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
                            <div className={classNames(styles.partBorder, styles.elementPart)}>
                                <img
                                    className={classNames(
                                        styles.imageBorderInactive,
                                        {[styles.active]: percent >= progress}
                                    )}
                                    src={borderInactive}
                                    alt=""
                                />

                                <img
                                    className={classNames(
                                        styles.imageBorderActive,
                                        {[styles.active]: percent < progress}
                                    )}
                                    src={
                                        id === 4 && progress < 0.85
                                            ? borderActiveHalf
                                            : borderActive
                                    }
                                    alt=""
                                />
                            </div>

                            <div className={classNames(styles.partBackground, styles.elementPart)}>
                                <img
                                    className={classNames(
                                        styles.imageBackgroundActive,
                                        {[styles.active]: percent < progress}
                                    )}
                                    src={backgroundActive}
                                    alt=""
                                />

                                <img
                                    className={
                                        classNames(
                                            styles.imageBackgroundInactive,
                                            {[styles.active]: percent >= progress}
                                        )}
                                    src={backgroundInactive}
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
                <span onClick={() => setProgress(0)} className={styles.plusInfinity}>+∞</span>
                <span onClick={() => setProgress(1)} className={styles.minusInfinity}>-∞</span>
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

            <img
                style={{transform: `rotate(${calculateRotateArrow()}deg)`}}
                src="/images/speedometer/arrow.svg"
                alt="->"
                className={styles.arrow}
            />
        </div>
    )
}