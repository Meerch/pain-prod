import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {fetchStats} from "../services/fetchStats";
import {MetaToken, SpeedometerSchema, Stats} from "../types/speedometerSchema";
import {fetchMetaToken} from "../services/fetchMetaToken";
import {fetchCurrentRound} from "../services/fetchCurrentRound";
import {fetchWhitelistSignature} from "../services/fetchWhitelistSignature";

const initialState: SpeedometerSchema = {}

const speedometerSlice = createSlice({
    name: 'speedometerSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStats.fulfilled, (state, action) => {
                state.stats = action.payload
            })
            .addCase(fetchMetaToken.fulfilled, (state, action) => {
                state.stats = action.payload
            })
            .addCase(fetchCurrentRound.fulfilled, (state, action) => {
                state.currentRound = action.payload
            })
            .addCase(fetchWhitelistSignature.fulfilled, (state, action) => {
                state.signature = action.payload
            })
    },
})

export const {actions: speedometerActions} = speedometerSlice
export const {reducer: speedometerReducer} = speedometerSlice