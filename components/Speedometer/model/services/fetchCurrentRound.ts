import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import {urlApi} from "../../../../const/urlApi";


export const fetchCurrentRound = createAsyncThunk<string, void, {rejectValue: string}>(
    'speedometer/fetchCurrentRound',
    async (_, thunkAPI
    ) => {
        const { rejectWithValue } = thunkAPI
        try {
            const response = await axios.get<string>(`${urlApi}/round-id`)

            if (!response.data) {
                throw new Error('server error')

            }

            return `18446744073709${response.data}`
        } catch {
            return rejectWithValue('error')
        }
    }
)