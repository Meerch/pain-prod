import styles from './Gallery.module.scss'
import {useEffect, useState} from "react";
import classNames from "classnames";

const photos = [
    '/images/gallery/nft-1.jpg',
    '/images/gallery/nft-2.jpg',
    '/images/gallery/nft-3.jpg',
    '/images/gallery/nft-4.jpg',
    '/images/gallery/nft-5.jpg',
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

    useEffect(() => {
        if (window !== undefined) {
            const widthScreen = window.screen.width
            setIsDesktop(widthScreen >= 1280)
        }
    }, [])

    return (
        <div className={styles.gallery}>
            <div className={styles.photosBar}>
                {
                    (isDesktop ? photos : splitHalfPhotos(1)).map((photoUrl) => (
                        <div className={classNames(styles.photoBar, {
                            [styles.mobile]: !isDesktop
                        })}>
                            <img className={styles.image} src={photoUrl} alt="photo nft"/>
                        </div>
                    ))
                }
            </div>

            <div className={styles.photosBar}>
                {
                    !isDesktop && splitHalfPhotos(2).map((photoUrl) => (
                        <div className={classNames(styles.photoBar, styles.mobilePhotoBar)}>
                            <img className={styles.image} src={photoUrl} alt="photo nft"/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
