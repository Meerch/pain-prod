import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import {urlApi} from "../../../../const/urlApi";

export const fetchWhitelistSignature = createAsyncThunk<any, string, {rejectValue: string}>(
    'speedometer/fetchWhitelistSignature',
    async (address, thunkAPI
    ) => {
        const { rejectWithValue } = thunkAPI
        try {
            const response = await axios.post<any>(`${urlApi}/whitelist-signature`, {
                address
            })

            if (!response.data) {
                throw new Error('server error')
            }

            return response.data
        } catch {
            return rejectWithValue('error')
        }
    }
)
