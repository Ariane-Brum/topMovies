import MovieContext from 'contexts/MovieContext'
import { useContext } from 'react'

export const useMovies = () => {
  const value = useContext(MovieContext)

  return value
}
