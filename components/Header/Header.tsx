import styles from './Header.module.scss'
import {SocialLinks} from "../shared/SocialLinks";
import {Marketplaces} from "../shared/Marketplaces";
import {ConnectButton, useAccountModal, useChainModal, useConnectModal} from '@rainbow-me/rainbowkit';
import {useDisconnect} from "wagmi";

export const Header = () => {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    const {disconnect} = useDisconnect()

    return (
        <div className={styles.header}>
            {openConnectModal && (
                <span onClick={openConnectModal} className={styles.connect}>connect</span>
            )}

            {
                !openConnectModal &&
                <span
                    className={styles.connect}
                    onClick={() => disconnect?.()}
                >
                    disconnect
                </span>
            }



            {/*{openAccountModal && (*/}
            {/*    <button onClick={openAccountModal} type="button">*/}
            {/*        Open Account Modal*/}
            {/*    </button>*/}
            {/*)}*/}

            {/*{openChainModal && (*/}
            {/*    <button onClick={openChainModal} type="button">*/}
            {/*        Open Chain Modal*/}
            {/*    </button>*/}
            {/*)}*/}
            {/*<ConnectButton />*/}
            <SocialLinks className={styles.links}/>
            <Marketplaces  className={styles.marketplaces}/>
            <div className={styles.openMenu}/>
        </div>
    )
}

