import styles from './Header.module.scss'
import {SocialLinks} from "../shared/SocialLinks";
import {Marketplaces} from "../shared/Marketplaces";
import {ConnectButton, useAccountModal, useChainModal, useConnectModal} from '@rainbow-me/rainbowkit';
import {useAccount, useConnect, useDisconnect} from "wagmi";
import {useHover} from "../../hooks/useHover";
import {svgButton, svgButtonWithoutShadow } from './svgButton';

export const Header = () => {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    const {disconnect} = useDisconnect()
    const {address} = useAccount()
    const {connect, connectors} = useConnect()
    const [isHover, bindHover] = useHover()

    const onConnectWallet = (connector) => {
        if (!address) {
            // connect?.({connector, chainId: 5})
            openConnectModal()
        } else {
            disconnect?.()
        }
    }

    return (
        <div className={styles.header}>
            <div onClick={onConnectWallet} {...bindHover} className={styles.connect}>
                    {
                        isHover
                            ? svgButtonWithoutShadow
                            : svgButton
                    }

                    <span className={styles.text}>
                        {
                            !address
                                ? 'connect wallet'
                                : 'disconnect'
                        }
                    </span>
            </div>

            {/*{*/}
            {/*    openConnectModal &&*/}
            {/*    <span onClick={openConnectModal} className={styles.connect}>connect</span>*/}
            {/*}*/}

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

            {/*{*/}
            {/*    !openConnectModal &&*/}
            {/*    <span*/}
            {/*        className={styles.connect}*/}
            {/*        onClick={() => disconnect?.()}*/}
            {/*    >*/}
            {/*        disconnect*/}
            {/*    </span>*/}
            {/*}*/}


            <SocialLinks className={styles.links}/>
            <Marketplaces  className={styles.marketplaces}/>
            <div className={styles.openMenu}/>
        </div>
    )
}

