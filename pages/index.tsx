import {Header} from "../components/Header";
import {Speedometer} from "../components/Speedometer";
import {Logo} from "../components/Logo";
import {Description} from "../components/Description";
import {InfoPanels} from "../components/InfoPanels";
import {useEffect, useState} from "react";
import {DesktopWrapper} from "../components/Wrapper/DesktopWrapper";
import {MobileWrapper} from "../components/Wrapper/MobileWrapper";
import {Gallery} from "../components/Gallery";
import {Footer} from "../components/Footer";

export default function Home() {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        if (window !== undefined) {
            const widthScreen = window.screen.width
            setIsDesktop(widthScreen >= 1280)
        }
    }, [])

    return (
        <div className='content-app'>
            {
                isDesktop
                    ? <DesktopWrapper />
                    : <MobileWrapper />
            }
            <Gallery />
            <Footer />
            <img className='background-element background-statistic' src="/images/background-statistic-btc.png" alt=""/>
        </div>
    )
}
