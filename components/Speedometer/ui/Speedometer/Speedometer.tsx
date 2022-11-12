import styles from './Speedometer.module.scss'
import {useCallback, useEffect, useState} from "react"
import SpeedometerParts from "../SpeedometerParts/SpeedometerParts";
import SpeedometerProgressSupply from "../SpeedometerProgressSupply/SpeedometerProgressSupply";
import SpeedometerPercents from "../SpeedometerPercents/SpeedometerPercents";
import SpeedometerInfo from "../SpeedometerInfo/SpeedometerInfo";
import SpeedometerButtonMint from '../SpeedometerButtonMint/SpeedometerButtonMint';
import SpeedometerArrow from "../SpeedometerArrow/SpeedometerArrow";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch";
import {fetchStats} from "../../model/services/fetchStats";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {fetchWhitelistSignature} from "../../model/services/fetchWhitelistSignature";
import {useAccount, useContractRead} from "wagmi";
import {generateContractPainSetting} from "../../../../blockchain/utils";
import {fetchCurrentRound} from "../../model/services/fetchCurrentRound";
import {formatEther, toWei} from '../../../../helpers/utils';


export const initialRotateArrow = -130
// const mainProgress = 0.74

export const Speedometer = () => {
    const [progress, setProgress] = useState(0)
    const stats = useSelector((state: RootState) => state.speedometer?.stats)
    const signature = useSelector((state: RootState) => state.speedometer?.signature)
    const dispatch = useTypedDispatch()
    const {address} = useAccount()
    const currentRound = useSelector((state: RootState) => state.speedometer?.currentRound)
    const {data: changePrice}: Pick<{ data: number }, any> = useContractRead(generateContractPainSetting('getDiff', {
        args: currentRound && currentRound,
        select: (data) => +(data.map(data => toWei(formatEther(data)))[0] / 100 * -1).toFixed(2)
    }))
    const [mainProgress, setMainProgress] = useState(0)

    // useEffect(() => {
    //     console.log('changePrice', changePrice)
    //     console.log('currentRound', currentRound)
    // }, [changePrice, currentRound])
    //
    // useEffect(() => {
    //     if (changePrice) {
    //         let calcProgress
    //
    //         setMainProgress(changePrice / 100)
    //     }
    // }, [changePrice])
    //
    const handlerChangeProgress = useCallback((value: number) => {
        setProgress(value)
    }, [mainProgress])

    // useEffect(() => {
    //
    // }, [changePrice])
    //
    // useEffect(() => {
    //     dispatch(fetchCurrentRound())
    //     dispatch(fetchStats())
    //     dispatch(fetchWhitelistSignature(address))
    // }, [address])
    //
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress(prev => {
    //             if (prev >= mainProgress) {
    //                 clearInterval(timer)
    //                 return prev
    //             }
    //             return +(prev + 0.01).toFixed(2)
    //         })
    //     }, 100)
    //
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [mainProgress])




    return (
        <div className={styles.speedometer}>
            <SpeedometerParts
                progress={progress}
            />
            <SpeedometerProgressSupply
                progress={progress}
            />
            <SpeedometerPercents changeProgress={handlerChangeProgress}/>
            <SpeedometerInfo ethPrice={stats?.eth} changePrice={changePrice}/>
            <SpeedometerButtonMint />
            <SpeedometerArrow progress={progress} />
        </div>
    )
}