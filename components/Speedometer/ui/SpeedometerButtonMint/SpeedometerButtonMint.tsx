import React from 'react';
import styles from "./SpeedometerButtonMint.module.scss";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch";
import {popupActions} from "../../../../store/Popup/popupSlice";

const SpeedometerButtonMint = () => {
    const dispatch = useTypedDispatch()

    const openModalMint = () => {
        dispatch(popupActions.changeCurrentPopup('mint'))
    }

    return (
        <div onClick={openModalMint} className={styles.buttonMint}>
            <span className={styles.text}>MINT PAIN</span>
        </div>
    );
};

export default SpeedometerButtonMint;
