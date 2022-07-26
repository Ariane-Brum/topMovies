import Card from 'components/Card'
import Container from 'components/Container'
import Head from 'components/helpers/Head'
import { useMovies } from 'hooks/useMovies'
import { Star } from 'phosphor-react'
import Loading from 'components/helpers/Loading'

const Home = () => {
  const { movieList, loading } = useMovies()
  if (loading) return <Loading />
  return (
    <>
      <Head title="Home" />
      <section
        aria-label="Lista de filmes populares"
        className="flex flex-col items-center py-12 sm:py-4"
      >
        <Container>
          <div className="flex justify-center">
            <h1 className=" mb-12 flex items-center gap-1  font-source  text-4xl font-semibold text-white  sm:mb-10 sm:text-2xl">
              Os mais populares <Star weight="fill" color="#22CABE" />
            </h1>
          </div>
          <ul className=" flex flex-wrap gap-7   2xl:justify-center">
            {movieList.map((movie) => (
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
    </>
  )
}

export default Home
