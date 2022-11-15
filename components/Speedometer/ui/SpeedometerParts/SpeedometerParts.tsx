import React, {memo} from 'react';
import styles from "./SpeedometerParts.module.scss";
import {parts} from "../../model/const/parts";
import classNames from "classnames";

interface SpeedometerPartsProps {
    progress: number
}

const SpeedometerParts = memo((props: SpeedometerPartsProps) => {
    const {progress} = props

    return (
        <div className={styles.parts}>
            {
                parts.map(({
                               id,
                               borderInactive,
                               borderActive,
                               borderActiveHalf,
                               isActive,
                               isActiveFull,
                               backgroundActive,
                               backgroundInactive
                           }) => (
                    <div key={id} className={classNames(styles.part, styles[`part-${id}`])}>
                        <div className={classNames(styles.partBorder, styles.elementPart)}>
                            <img
                                className={classNames(
                                    styles.imageBorderInactive,
                                    {[styles.active]: !isActive(progress)}
                                )}
                                src={borderInactive}
                                alt=""
                            />

                            <img
                                className={classNames(
                                    styles.imageBorderActive,
                                    {[styles.active]: isActive(progress)}
                                )}
                                src={
                                    id === 4 && !isActiveFull(progress)
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
                                    {[styles.active]: isActive(progress)}
                                )}
                                src={backgroundActive}
                                alt=""
                            />

                            <img
                                className={
                                    classNames(
                                        styles.imageBackgroundInactive,
                                        {[styles.active]: !isActive(progress)}
                                    )}
                                src={backgroundInactive}
                                alt=""/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
})

export default SpeedometerParts;
