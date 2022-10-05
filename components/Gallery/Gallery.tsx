import styles from './Gallery.module.scss'
import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames"

const photos = [
    '/images/gallery/optimizate/nft-1.jpg',
    '/images/gallery/optimizate/nft-2.jpg',
    '/images/gallery/optimizate/nft-3.jpg',
    '/images/gallery/optimizate/nft-4.jpg',
    '/images/gallery/optimizate/nft-5.jpg',
    // '/images/gallery/optimizate/nft-6.gif',
    '/images/gallery/optimizate/nft-7.jpg',
    '/images/gallery/optimizate/nft-8.jpg',
    '/images/gallery/optimizate/nft-9.jpg',
    '/images/gallery/optimizate/nft-10.jpg',
    '/images/gallery/optimizate/nft-11.png',
    '/images/gallery/optimizate/nft-12.png',
    '/images/gallery/optimizate/nft-13.png',
    // '/images/gallery/optimizate/nft-14.gif',
    '/images/gallery/optimizate/nft-15.jpg',
    '/images/gallery/optimizate/nft-16.jpg',
    '/images/gallery/optimizate/nft-17.png',
    '/images/gallery/optimizate/nft-18.png',
    '/images/gallery/optimizate/nft-19.jpg',
    // '/images/gallery/optimizate/nft-20.gif',
    '/images/gallery/optimizate/nft-21.jpg',
    '/images/gallery/optimizate/nft-22.png',
    '/images/gallery/optimizate/nft-23.jpg',
    '/images/gallery/optimizate/nft-24.png',
    '/images/gallery/optimizate/nft-25.jpg',
    '/images/gallery/optimizate/nft-26.jpg',
    '/images/gallery/optimizate/nft-27.jpg',
    '/images/gallery/optimizate/nft-28.jpg',
    '/images/gallery/optimizate/nft-29.jpg',
    // '/images/gallery/optimizate/nft-30.gif',
    '/images/gallery/optimizate/nft-31.jpg',
    '/images/gallery/optimizate/nft-32.jpg',
    '/images/gallery/optimizate/nft-33.jpg',
    '/images/gallery/optimizate/nft-34.jpg',
    '/images/gallery/optimizate/nft-35.jpg',
    '/images/gallery/optimizate/nft-36.jpg',
    '/images/gallery/optimizate/nft-37.jpg',
    '/images/gallery/optimizate/nft-38.jpg',
    '/images/gallery/optimizate/nft-39.jpg',
    '/images/gallery/optimizate/nft-40.png',
]

const splitHalfPhotos = (part: number) => {
    const halfPhotos = Math.floor(photos.length / 2)
    return photos.slice(
        part === 1 ? 0 : halfPhotos,
        part == 1 ? halfPhotos : photos.length
    )
}

export const Gallery = () => {
    const [isDesktop, setIsDesktop] = useState(false)
    const refMainBar = useRef<HTMLDivElement | null>(null)
    const refMobileBar = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (window !== undefined) {
            const widthScreen = window.screen.width
            setIsDesktop(widthScreen >= 1280)
        }
    }, [])

    useEffect(() => {
        document.documentElement.style
            .setProperty('--gallery-width', `${Math.round(refMainBar?.current.scrollWidth)}px`);
        document.documentElement.style
            .setProperty('--gallery-mobile-width', `${Math.round(refMobileBar?.current.scrollWidth)}px`);
    }, [])

    return (
        <div className={styles.gallery}>
            <div ref={refMainBar} className={styles.photosBar}>
                {
                    (isDesktop ? photos : splitHalfPhotos(1)).map((photoUrl) => (
                        <div key={photoUrl} className={classNames(styles.photoBar, {
                            [styles.mobile]: !isDesktop
                        })}>
                            {/*{*/}
                            {/*    photoUrl.includes('mp4')*/}
                            {/*        ? <video className={styles.image} src={photoUrl} muted loop autoPlay></video>*/}
                            {/*        : <Image*/}
                            {/*            width={243}*/}
                            {/*            height={243}*/}
                            {/*            className={styles.image}*/}
                            {/*            src={photoUrl}*/}
                            {/*            alt="photo nft"*/}
                            {/*        />*/}
                            {/*}*/}
                            <img
                                className={styles.image}
                                src={photoUrl}
                                alt="photo nft"
                            />
                        </div>
                    ))
                }
            </div>

            {
                !isDesktop &&
                <div ref={refMobileBar} className={classNames(styles.photosBar, styles.mobilePhotosBar)}>
                    {
                        splitHalfPhotos(2).map((photoUrl) => (
                            <div key={photoUrl} className={classNames(styles.photoBar, styles.mobilePhotoBar)}>
                                {/*{*/}
                                {/*    photoUrl.includes('mp4')*/}
                                {/*        ? <video className={styles.image} src={photoUrl} muted loop autoPlay></video>*/}
                                {/*        : <Image*/}
                                {/*            width={243}*/}
                                {/*            height={243}*/}
                                {/*            className={styles.image}*/}
                                {/*            src={photoUrl}*/}
                                {/*            alt="photo nft"*/}
                                {/*        />*/}
                                {/*}*/}
                                <img
                                    className={styles.image}
                                    src={photoUrl}
                                    alt="photo nft"
                                />
                            </div>
                        ))
                    }
                </div>}
        </div>
    );
};
