import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from './movieSlice'

export default function MovieList() {
  const movies = useSelector(state => state.movies.movies)
  const status = useSelector(state => state.movies.status)
  const error = useSelector(state => state.movies.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  },
    [dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }
  if (status === 'failed') {
    return <div>{error}</div>
  }

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        {movies.map((movie, index) => (
          <p key={movie.id}>
            {index + 1}. <b>{movie.title}</b> {movie.category} {movie.createdAt}
          </p>
        ))}
      </div>
    </div>
  )
}