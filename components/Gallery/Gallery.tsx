import styles from './Gallery.module.scss'
import React, {useEffect, useState} from "react";
import classNames from "classnames"
import {SwiperSlide, Swiper} from "swiper/react";
import {photos} from "./constants";
import {Autoplay} from "swiper";
import { splitHalfPhotos } from './utils';

export const Gallery = () => {
    const [isDesktop, setIsDesktop] = useState(false)
    // const refMainBar = useRef<HTMLDivElement | null>(null)
    // const refMobileBar = useRef<HTMLDivElement | null>(null)
    //
    useEffect(() => {
        if (window !== undefined) {
            const widthScreen = window.screen.width
            setIsDesktop(widthScreen >= 1280)
        }
    }, [])
    //
    // useEffect(() => {
    //     document.documentElement.style
    //         .setProperty('--gallery-width', `${Math.round(refMainBar?.current.scrollWidth)}px`);
    //     document.documentElement.style
    //         .setProperty('--gallery-mobile-width', `${Math.round(refMobileBar?.current.scrollWidth)}px`);
    // }, [])

    return (
        <div className={styles.gallery}>
            <Swiper
                className={styles.wrapperPhotos}
                loop={true}
                spaceBetween={65}
                slidesPerView={"auto"}
                allowTouchMove={false}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false
                }}
                loopFillGroupWithBlank={true}
                modules={[Autoplay]}
            >
                {
                    (isDesktop ? photos : splitHalfPhotos(1)).map((photoUrl) => (
                        <SwiperSlide key={photoUrl} style={{width: '243px', height: '243px'}}>
                            <img
                                className={styles.image}
                                src={photoUrl}
                                alt="photo nft"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {
                !isDesktop &&
                <Swiper
                    className={classNames(styles.wrapperPhotos, styles.mobileWrapperPhotos)}
                    loop={true}
                    spaceBetween={65}
                    slidesPerView={"auto"}
                    allowTouchMove={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    loopFillGroupWithBlank={true}
                    modules={[Autoplay]}
                >
                    {
                        splitHalfPhotos(2).map((photoUrl) => (
                            <SwiperSlide key={photoUrl} style={{width: '243px', height: '243px'}}>
                                <img
                                    className={styles.image}
                                    src={photoUrl}
                                    alt="photo nft"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            }
        </div>
    );
};
