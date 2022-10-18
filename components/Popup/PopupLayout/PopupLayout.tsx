import React, {FC, ReactNode, useEffect} from 'react';
import styles from './PopupLayout.module.scss'
import classNames from "classnames";

interface PopupLayoutProps {
    children: ReactNode;
    className?: string;
    onClose: () => void
}

const PopupLayout: FC<PopupLayoutProps> = ({children, className, onClose}) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        onClose()
    }

    return (
        <div className={styles.wrapperPopup}>
            <div onClick={closeModal} className={styles.layout}/>
            <div className={classNames(styles.popup, className)}>
                {children}
            </div>
        </div>
    );
};

export default PopupLayout;
