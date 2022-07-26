import Card from 'components/Card'
import Container from 'components/Container'
import { useMovies } from 'hooks/useMovies'
import { MoviesProps } from 'interfaces/moviesProps'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from 'utils/api'
import Loading from 'components/helpers/Loading'

const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()
  const { loading, setLoading } = useMovies()
  const [movies, setMovies] = useState<MoviesProps[]>()
  const query = searchParams.get('q')

  useEffect(() => {
    const getSearchedMovies = async () => {
      setLoading(true)
      try {
        const response = await api.get(
          `search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`
        )

        setMovies(response.data.results)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getSearchedMovies()
  }, [query, setMovies, setLoading])

  if (loading) return <Loading />
  return (
    <section aria-label="Resultado da busca">
      <Container>
        <div className="flex justify-center">
          <h1 className="relative mb-12 flex items-center gap-1  font-source  text-4xl font-semibold text-white after:absolute after:bottom-0 after:block after:h-1 after:w-11 after:rounded after:bg-cyan-400 after:content-[''] sm:mb-10 sm:text-2xl">
            Resultados para:{' '}
            <span className="capitalize text-cyan-400">{query}</span>
          </h1>
        </div>
        <ul className=" flex flex-wrap gap-7 2xl:justify-center">
          {movies &&
            movies.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                id={movie.id}
                poster_path={movie.poster_path}
              />
            ))}
        </ul>
      </Container>
    </section>
  )
}

export default Search
