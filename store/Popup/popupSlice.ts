import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type CurrentPopup = 'mint' | 'success' | null

export interface PopupState {
    currentPopup: CurrentPopup
}

const initialState: PopupState = {
    currentPopup: null
}

export const popupSlice = createSlice({
    name: 'popupSlice',
    initialState,
    reducers: {
        changeCurrentPopup: (state, action: PayloadAction<CurrentPopup>) => {
            state.currentPopup = action.payload
        }
    },
})

export const { actions: popupActions } = popupSlice
export const { reducer: popupReducer} = popupSlice