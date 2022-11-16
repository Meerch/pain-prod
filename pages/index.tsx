import {DesktopWrapper} from "../components/Wrapper/DesktopWrapper";
import {MobileWrapper} from "../components/Wrapper/MobileWrapper";
import {Gallery} from "../components/Gallery";
import {Footer} from "../components/Footer";
import {Links} from "../components/Links";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useTypedDispatch} from "../hooks/useTypedDispatch";
import {MobilePopupMint, DesktopPopupMint} from "../components/Popup/PopupMint";
import {useDetectDevice} from "../hooks/useDetectDevice";
import PopupSuccess from "../components/Popup/PopupSuccess/PopupSuccess";
import {popupActions} from "../store/Popup/popupSlice";
import {useEffect, useState} from "react";

export default function Home() {
    const currentPopup = useTypedSelector(state => state.popup.currentPopup)
    const dispatch = useTypedDispatch()
    const {isMobile, isDesktop} = useDetectDevice()
    const [isReady, setIsReady] = useState(false)

    const closeModal = () => {
        dispatch(popupActions.changeCurrentPopup(null))
    }

    useEffect(() => {
        if (isReady) {
            document.body.style.overflow = 'visible'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }, [isReady])

    useEffect(() => {
        console.log('ready')
        const timer = setTimeout(() => {
            setIsReady(true)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='wrapper'>
            {
                !isReady &&
                <div className='loading'>
                    <img  className='dancer' src="/images/dance.gif" alt=""/>
                    <div className="loader">
                        <span className='text'>loading ...</span>
                        <img className='effect' src="/images/loading-effect.gif" alt=""/>
                    </div>
                </div>
            }
            <div className='content-app'>
                {isDesktop && <DesktopWrapper/>}
                {isMobile && <MobileWrapper/>}
                <Gallery/>
                <Footer/>
                <img className='background-element background-statistic' src="/images/background-statistic-btc.png" alt=""/>
                {/*<img className='background-element background-dancer' src="/images/background-element-2.gif" alt=""/>*/}
                {/*<img className='background-element background-status' src="/images/mint-status.png" alt="mint status"/>*/}
                {/*<div className='background-element background-status'>*/}
                {/*    <span className='title'>Mint start</span>*/}
                {/*    <span className='status'>TBA</span>*/}
                {/*</div>*/}

                {currentPopup === 'mint' &&
                    <>
                        {isDesktop && <DesktopPopupMint onClose={closeModal}/>}
                        {isMobile && <MobilePopupMint onClose={closeModal}/>}
                    </>
                }

                {currentPopup === 'success' &&
                    <PopupSuccess onClose={closeModal}/>
                }
            </div>
        </div>
    )
}
