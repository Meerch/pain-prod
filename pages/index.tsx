import {useEffect, useState} from "react";
import {DesktopWrapper} from "../components/Wrapper/DesktopWrapper";
import {MobileWrapper} from "../components/Wrapper/MobileWrapper";
import {Gallery} from "../components/Gallery";
import {Footer} from "../components/Footer";
import {Links} from "../components/Links";

export default function Home() {
    const [isDesktop, setIsDesktop] = useState(true)

    useEffect(() => {
        if (window === undefined) {
            return
        }

        if (window.screen.width < 1280) {
            setIsDesktop(false)
        }
    }, [])

    return (
        <div className='content-app'>
            {
                isDesktop
                    ? <DesktopWrapper/>
                    : <MobileWrapper/>
            }
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
        </div>
    )
}
