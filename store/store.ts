import { configureStore } from '@reduxjs/toolkit'
import { PopupReducer } from './Popup/PopupSlice'

const rootReducer = {
    popup: PopupReducer
}

export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch