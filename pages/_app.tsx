import '../styles/globals.scss'
import 'swiper/css';
import {AppProps} from 'next/app';
import Head from "next/head";
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import {store} from '../store/store';
import '@rainbow-me/rainbowkit/styles.css';
import {
    connectorsForWallets,
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import {publicProvider} from 'wagmi/providers/public';
import {InjectedConnector} from "wagmi/connectors/injected";
import {WalletConnectConnector} from "wagmi/connectors/walletConnect";
import {
    metaMaskWallet,
    walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';

const {chains, provider} = configureChains(
    [chain.mainnet],
    [
        publicProvider()
    ]
);

const connectors = connectorsForWallets([
    {
        groupName: 'All',
        wallets: [
            metaMaskWallet({chains}),
            walletConnectWallet({chains})
        ]
    }
]);

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    // connectors: [
    //     new InjectedConnector({chains}),
    //     new WalletConnectConnector({
    //         chains,
    //         options: {
    //             qrcode: true,
    //         },
    //     }),
    // ],
    provider
})

function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Pain</title>
        </Head>
        <Provider store={store}>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains} initialChain={chain.mainnet}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig>
        </Provider>
    </>
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App)