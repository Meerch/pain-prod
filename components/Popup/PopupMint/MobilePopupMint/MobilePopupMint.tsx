import React, {FC, useState} from 'react';
import styles from './MobilePopupMint.module.scss'
import PopupLayout from '../../PopupLayout/PopupLayout';
import classNames from "classnames";
import {popupActions} from "../../../../store/Popup/popupSlice";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch";

interface PopupLayoutProps {
    onClose: () => void
}

const MobilePopupMint: FC<PopupLayoutProps> = ({onClose}) => {
    const [amount, setAmount] = useState(0)
    const dispatch = useTypedDispatch()

    const changeAmount = (value: number) => {
        setAmount(prev => prev + value)
    }

    const onClickButton = () => {
        dispatch(popupActions.changeCurrentPopup('success'))
    }

    return (
        <PopupLayout onClose={onClose} className={styles.popup}>
            <div className={styles.wrapperClose}>
                <div onClick={onClose} className={styles.close}/>
            </div>
            <span className={styles.title}>Mint your PAIN</span>
            <span className={styles.description}>It’s live! You are minting “Excruciating PAIN” bla bla bla</span>

            <div className={styles.preview}>
                <img className={styles.logo} src="/images/logo-2.jpg" alt="PAIN"/>
                <div className={styles.info}>
                    <div className={styles.edition}>
                        Edition of 6666
                    </div>
                    <span className={styles.price}>0.02 eth</span>
                </div>

                <div className={styles.infoPrice}>
                    <span className={styles.currentPrice}>Current ETH price: $1233</span>
                    <div className={styles.priceChange}>
                        24h ETH PRICE change: <span className={styles.mark}>-4.2%</span>
                    </div>
                </div>
            </div>

            <div className={styles.titleInput}>Enter amount</div>
            <div className={styles.choiceAmount}>
                <div onClick={() => changeAmount(-1)} className={styles.minus}/>
                <span className={styles.amountValue}>{amount}</span>
                <div onClick={() => changeAmount(1)} className={styles.plus}/>
            </div>
            <span className={styles.total}>in total: 0.04 ETH</span>
            <span className={styles.available}>available: 20</span>
            <button onClick={onClickButton} className={classNames(styles.button)}>
                GET PAIN NFT
            </button>
        </PopupLayout>
    );
};

export default MobilePopupMint;
