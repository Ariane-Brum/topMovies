import { MoviesProps } from 'interfaces/moviesProps'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from 'utils/api'

interface MoviesContextData {
  movieList: MoviesProps[]
  loading: boolean
  setLoading: (state: boolean) => void
}

type ContextProp = {
  children: ReactNode
}

const apiKey = import.meta.env.VITE_API_KEY

export const MovieContext = createContext<MoviesContextData>(
  {} as MoviesContextData
)

export const MovieProvider = ({ children }: ContextProp) => {
  const [movieList, setMovieList] = useState<MoviesProps[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true)
        const response = await api.get(
          `movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
        )

        setMovieList(response.data.results)
        setLoading(false)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getMovies()
  }, [])

  return (
    <MovieContext.Provider value={{ movieList, loading, setLoading }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext
