import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type CurrentPopup = 'mint' | 'success' | null

export interface PopupState {
    currentPopup: CurrentPopup
}

const initialState: PopupState = {
    currentPopup: null
}

export const PopupSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeCurrentPopup: (state, action: PayloadAction<CurrentPopup>) => {
            state.currentPopup = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { actions: PopupActions } = PopupSlice

export const {reducer: PopupReducer} = PopupSlice