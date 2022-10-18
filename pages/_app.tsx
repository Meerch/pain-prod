import '../styles/globals.scss'
import 'swiper/css';
import {AppProps} from 'next/app';
import Head from "next/head";
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { store } from '../store/store';

function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Pain</title>
        </Head>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </>
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App)