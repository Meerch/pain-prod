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

export default function Home() {
    const currentPopup = useTypedSelector(state => state.popup.currentPopup)
    const dispatch = useTypedDispatch()
    const {isMobile, isDesktop} = useDetectDevice()

    const closeModal = () => {
        dispatch(popupActions.changeCurrentPopup(null))
    }

    return (
        <div className='content-app'>
            {isDesktop && <DesktopWrapper/>}
            {isMobile && <MobileWrapper/>}
            <Links/>
            <Gallery/>
            <Footer/>
            <img className='background-element background-statistic' src="/images/background-statistic-btc.png" alt=""/>
            <img className='background-element background-dancer' src="/images/background-element-2.gif" alt=""/>
            {/*<img className='background-element background-status' src="/images/mint-status.png" alt="mint status"/>*/}
            <div className='background-element background-status'>
                <span className='title'>Mint start</span>
                <span className='status'>TBA</span>
            </div>

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
    )
}
