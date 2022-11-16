import '../styles/globals.scss'
import 'swiper/css';
import {AppProps} from 'next/app';
import Head from "next/head";
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import {store} from '../store/store';
import '@rainbow-me/rainbowkit/styles.css';
import {connectorsForWallets, getDefaultWallets, RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import {Chain, chain, configureChains, createClient, WagmiConfig,} from 'wagmi';
import {publicProvider} from 'wagmi/providers/public';
import {jsonRpcProvider} from 'wagmi/providers/jsonRpc';
import {metaMaskWallet, walletConnectWallet} from '@rainbow-me/rainbowkit/wallets';

const avalancheChain: Chain = {
    id: 5,
    name: 'Görli',
    network: 'https://goerli.net/',
    nativeCurrency: {
        decimals: 5,
        name: 'Görli',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: 'https://rpc.ankr.com/eth_goerli',
    },
    blockExplorers: {
        default: { name: 'Görli', url: 'https://goerli.net' },
    },
    testnet: true,
}

const {chains, provider} = configureChains(
    [avalancheChain],
    [
        jsonRpcProvider({
            rpc: chain => ({ http: chain.rpcUrls.default }),
        }),
    ]
);

const {connectors} = getDefaultWallets({
    appName: 'Pain',
    chains
})

// const connectors = connectorsForWallets([
//     {
//         groupName: 'All',
//         chains
//         // wallets: [
//         //     metaMaskWallet({chains}),
//         //     walletConnectWallet({chains})
//         // ]
//     }
// ]);

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Pain</title>
        </Head>
        <Provider store={store}>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains} initialChain={chain.goerli}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig>
        </Provider>
    </>
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App)