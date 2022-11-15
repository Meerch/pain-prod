export const parts = [
    {
        id: 0,
        isActive: (progress: number) => true,
        borderActive: '/images/speedometer/part-0/border-active.svg',
        borderInactive: '/images/speedometer/part-0/border-inactive.svg'
    },
    {
        id: 1,
        isActive: (progress: number) => progress < 0,
        borderActive: '/images/speedometer/part-1/border-active.svg',
        borderInactive: '/images/speedometer/part-1/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-1/background-active.svg',
        backgroundInactive: '/images/speedometer/part-1/background-inactive.svg',
    },
    {
        id: 2,
        isActive: (progress: number) => progress <= -5,
        borderActive: '/images/speedometer/part-2/border-active.svg',
        borderInactive: '/images/speedometer/part-2/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-2/background-active.svg',
        backgroundInactive: '/images/speedometer/part-2/background-inactive.svg',
    },
    {
        id: 3,
        isActive: (progress: number) => progress <= -10,
        borderActive: '/images/speedometer/part-3/border-active.svg',
        borderInactive: '/images/speedometer/part-3/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-3/background-active.svg',
        backgroundInactive: '/images/speedometer/part-3/background-inactive.svg',
    },
    {
        id: 4,
        isActive: (progress: number) => progress <= -15,
        isActiveFull: (progress: number) => progress < -20,
        borderActive: '/images/speedometer/part-4/border-active.svg',
        borderActiveHalf: '/images/speedometer/part-4/border-active-half.svg',
        borderInactive: '/images/speedometer/part-4/border-inactive.svg',
        backgroundActive: '/images/speedometer/part-4/background-active.svg',
        backgroundInactive: '/images/speedometer/part-4/background-inactive.svg',
    }
]