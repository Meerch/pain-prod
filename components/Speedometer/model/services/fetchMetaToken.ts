import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import {urlApi} from "../../../../const/urlApi";

export const fetchMetaToken = createAsyncThunk<any, string, {rejectValue: string}>(
    'speedometer/fetchMetaToken',
    async (tokenId, thunkAPI
    ) => {
        const { rejectWithValue } = thunkAPI
        try {
            const response = await axios.get<any>(`${urlApi}/pain/${tokenId}`)

            if (!response.data) {
                throw new Error('server error')
            }

            return response.data
        } catch {
            return rejectWithValue('error')
        }
    }
)