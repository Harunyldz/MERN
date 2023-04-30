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
export const fetchMovieById = createAsyncThunk(
    'movies/fetchMovieById',
    async (id) => {
        const response = await API.get('/movies/' + id)
        return response.data
    }
)

export const createMovie = createAsyncThunk(
    'movies/createMovie',
    async (newMovie) => {
        const response = await API.post('/movies', newMovie)
        return response.data
    }
)
export const deleteMovie = createAsyncThunk(
    'movies/deleteMovie',
    async (id) => {
        const response = await API.delete(`/movies/${id}`)
        return response.data
    }
)
export const updateMovie = createAsyncThunk(
    'movies/updateMovie',
    async (updatedMovie) => {
        const response = await API.put('/movies/' + updatedMovie.id, updatedMovie)
        return response.data
    }
)



const initialState = {
    movies: [],
    selectedMovie: {},
    status: 'idle',
    error: null
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        clearSelectedMovie:(state)=>{
            state.selectedMovie=null
        }
    },
    extraReducers: (builder) => {
        builder
            //fetch movie
            .addCase(fetchMovies.pending, (state, action) => {
                state.status = 'loading'
                // console.log(action)
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.movies = action.payload
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                // console.log(action.error)
            })

            //CreateMovie
            .addCase(createMovie.pending, (state, action) => {
                state.status = 'loading'
                // console.log(action)
            })
            .addCase(createMovie.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.movies.push(action.payload)
            })
            .addCase(createMovie.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                // console.log(action.error)
            })
            .addCase(deleteMovie.pending, (state, action) => {
                state.status = 'loading'
                // console.log(action)
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const index = state.movies.findIndex(movie => movie.id === action.payload.id)
                state.movies.splice(index, 1)
            })
            .addCase(deleteMovie.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                // console.log(action.error)
            })
            .addCase(updateMovie.pending, (state, action) => {
                state.status = 'loading'
                // console.log(action)
            })
            .addCase(updateMovie.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const index = state.movies.findIndex(movie => movie.id === action.payload.id)
                state.movies[index] = action.payload
            })
            .addCase(updateMovie.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                // console.log(action.error)
            })
            .addCase(fetchMovieById.pending, (state, action) => {
                state.status = 'loading'
                // console.log(action)
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.selectedMovie = action.payload
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                // console.log(action.error)
            })
    }
});

export const {clearSelectedMovie } = movieSlice.actions

export default movieSlice.reducer