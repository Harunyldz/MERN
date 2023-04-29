// created by 'rxslice' snippet

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../config/axiosConfig';

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await API.get('/movies')
        return response.data
    }
)

const initialState = {
    movies: [],
    status: 'idle',
    error: null
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state, action) => {
                state.status = 'loading'
                // console.log(action)
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.movies=action.payload
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                // console.log(action.error)
            })
    }
});

export const { } = movieSlice.actions

export default movieSlice.reducer