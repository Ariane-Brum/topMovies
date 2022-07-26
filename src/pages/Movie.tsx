import Container from 'components/Container'
import MovieInfo from 'components/MovieInfo'
import { Calendar, Image, Star, Timer, TrendUp, Wallet } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from 'utils/api'
import { format } from 'date-fns'
import { formatHour } from 'utils/formatHour'
import { useMovies } from 'hooks/useMovies'
import { MovieProps } from 'interfaces/moviesProps'
import { formatCurrency } from 'utils/formatCurrency'
import Loading from 'components/helpers/Loading'
import Head from 'components/helpers/Head'

const apiKey = import.meta.env.VITE_API_KEY
const bgImage = import.meta.env.VITE_URL_BG
const imageUrl = import.meta.env.VITE_URL_IMAGE

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<MovieProps>()
  const { loading, setLoading } = useMovies()

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const response = await api.get(
          `movie/${id}?api_key=${apiKey}&language=pt-BR&append_to_response=videos`
        )

        setMovie(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getMovieById()
  }, [id, setLoading])

  if (loading) return <Loading />
  if (movie)
    return (
      <>
        <Head title={movie.title} />
        <article
          className='relative z-10 min-h-screen bg-cover  bg-fixed bg-center bg-no-repeat py-12 px-4 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-blue-800/95 before:content-[""] sm:py-6'
          style={{
            backgroundImage: movie.backdrop_path
              ? `url(${bgImage + movie.backdrop_path})`
              : `bg-cyan-400`
          }}
        >
          <Container>
            <div className="relative z-20 flex gap-20 md:flex-col-reverse md:gap-5">
              <div className="max-w-[400px] rounded">
                <div className=" overflow-hidden rounded-xl border-2 border-blue-900 bg-blue-700 shadow shadow-blue-900  md:hidden">
                  {movie.poster_path ? (
                    <img
                      src={imageUrl + movie.poster_path}
                      alt={movie.title}
                      width={500}
                      height={750}
                    />
                  ) : (
                    <div className="h-[598px] w-[400px] rounded-xl border-2 border-blue-900 bg-blue-700 shadow shadow-blue-900">
                      <Image className="h-full w-full " color="#22CABE" />
                    </div>
                  )}
                </div>
                <p className="mt-6 font-sans text-lg   text-white">
                  Avaliação dos usuários
                </p>
                <div className="flex items-center  gap-1">
                  <Star
                    className="mb-1"
                    color="#FFCF3E"
                    weight="fill"
                    size={19}
                  />
                  <p className="font-sans text-lg text-cyan-400">
                    {movie.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>
              <div className="max-w-[512px]">
                <div className="mb-8 gap-4">
                  <h1 className="relative mb-4 flex  items-center gap-1  font-source  text-4xl font-semibold text-white  sm:mb-4 sm:text-2xl">
                    {movie.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-cyan-400 ">
                    <span className="flex h-[21px] w-[21px] items-center justify-center rounded border-2 border-cyan-400 p-2 text-[10px]">
                      G
                    </span>
                    {movie.genres.map((genre) => (
                      <small
                        className="flex flex-wrap items-center text-xs text-neutral-400"
                        key={genre.id}
                      >
                        {genre.name}
                      </small>
                    ))}
                  </div>
                </div>

                <ul className="max-w-[500px]">
                  <MovieInfo
                    icon={<Calendar color="#22CABE" size={34} />}
                    label="Lançamento"
                    span={format(new Date(movie.release_date), 'MM/dd/yyyy')}
                  />
                  <MovieInfo
                    icon={<Timer color="#22CABE" size={34} />}
                    label="Duração"
                    span={formatHour(movie.runtime)}
                  />

                  <MovieInfo
                    icon={<Wallet color="#22CABE" size={34} />}
                    label="Orçamento"
                    span={movie.budget > 0 ? formatCurrency(movie.budget) : '-'}
                  />

                  <MovieInfo
                    icon={
                      <div className="mx-1 flex items-center justify-center rounded  border-2 border-cyan-400 p-[2px]">
                        <TrendUp color="#22CABE" size={20} />
                      </div>
                    }
                    label="Receita"
                    span={
                      movie.revenue > 0 ? formatCurrency(movie.revenue) : '-'
                    }
                  />
                </ul>
                <div className="mt-8">
                  <h2 className="mb-3 font-source text-[32px] font-semibold text-white">
                    Sinopse
                  </h2>
                  <p className="mb-5 max-w-[70ch] font-sans text-base text-white">
                    {movie.overview}
                  </p>
                  {movie && (
                    <a
                      target="_blank"
                      className="flex max-w-[200px] items-center justify-center rounded bg-cyan-400 py-[6px] font-source text-lg font-semibold text-blue-500 hover:bg-cyan-600"
                      href={`https://www.youtube.com/watch?v=${movie.videos.results[0]?.key}`}
                      rel="noreferrer"
                    >
                      Ver Trailer
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </article>
      </>
    )
  else return null
}

export default Movie
