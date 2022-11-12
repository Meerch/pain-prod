import { configureStore } from '@reduxjs/toolkit'
import { speedometerReducer } from '../components/Speedometer/model/slice/spedometerSlice'
import { popupReducer } from './Popup/popupSlice'

const rootReducer = {
    popup: popupReducer,
    speedometer: speedometerReducer
}

export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch