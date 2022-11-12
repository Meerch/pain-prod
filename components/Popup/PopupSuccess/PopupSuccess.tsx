import React, {FC} from 'react';
import styles from './PopupSuccess.module.scss'
import PopupLayout from '../PopupLayout/PopupLayout';
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {popupActions} from "../../../store/Popup/popupSlice";

interface PopupLayoutProps {
    onClose: () => void
}

const PopupSuccess: FC<PopupLayoutProps> = ({onClose}) => {
    const dispatch = useTypedDispatch()

    const onClickButton = () => {
        dispatch(popupActions.changeCurrentPopup(null))
    }

    return (
        <PopupLayout onClose={onClose} className={styles.popup}>
            <img className={styles.logo} src="/images/logo-2.jpg" alt="PAIN"/>
            <div className={styles.title}>Congratulations!</div>
            <div className={styles.description}>You have succesfully purchased <span className={styles.mark}>5</span> PAIN NFTs!</div>
            <button onClick={onClickButton} className={styles.button}>
                Cool
            </button>

            <div onClick={onClose} className={styles.close}/>
        </PopupLayout>
    );
};

export default PopupSuccess

