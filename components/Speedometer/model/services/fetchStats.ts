import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import {urlApi} from "../../../../const/urlApi";
import {Stats} from "../types/speedometerSchema";


export const fetchStats = createAsyncThunk<Stats, void, {rejectValue: string}>(
    'speedometer/fetchStats',
    async (_, thunkAPI
    ) => {
        const { rejectWithValue } = thunkAPI
        try {
            const response = await axios.get<Stats>(`${urlApi}/stats`)

            if (!response.data) {
                throw new Error('server error')
            }

            return response.data
        } catch {
            return rejectWithValue('error')
        }
    }
)