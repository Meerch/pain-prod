import styles from './Header.module.scss'
import {SocialLinks} from "../shared/SocialLinks";
import {Marketplaces} from "../shared/Marketplaces";
import {ConnectButton, useAccountModal, useChainModal, useConnectModal} from '@rainbow-me/rainbowkit';
import {useConnect, useDisconnect} from "wagmi";

export const Header = () => {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    const {disconnect} = useDisconnect()
    const {connect, connectors} = useConnect()

    const onConnectWallet = (connector) => {
        console.log(connector)
        connect?.({connector, chainId: 5})
    }

    return (
        <div className={styles.header}>
            {
                openConnectModal &&
                <span onClick={openConnectModal} className={styles.connect}>connect</span>
            }

            {/*<div className={styles.buttons}>*/}
            {/*    {*/}
            {/*        connectors && connectors.map((connector, index) => (*/}
            {/*            <span*/}
            {/*                key={connector.id + index}*/}
            {/*                onClick={() => onConnectWallet(connector)}*/}
            {/*                className={styles.connect}*/}
            {/*            >*/}
            {/*                {connector.name} <br />*/}
            {/*            </span>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}

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

