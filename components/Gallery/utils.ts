import {photos} from "./constants";

export const splitHalfPhotos = (part: number) => {
    const halfPhotos = Math.floor(photos.length / 2)
    return photos.slice(
        part === 1 ? 0 : halfPhotos,
        part == 1 ? halfPhotos : photos.length
    )
}