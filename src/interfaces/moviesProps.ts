export interface MoviesProps {
  id: string
  title: string
  overview: string
  release_date: string
  backdrop_path: string
  poster_path: string
  popularity: number
  vote_count: number
  vote_average: number
}

export interface MovieProps {
  id: string
  title: string
  overview: string
  release_date: string
  backdrop_path: string
  poster_path: string
  popularity: number
  vote_count: number
  vote_average: number
  budget: number
  revenue: number
  runtime: number
  genres: Genres[]
  videos: Video
}

export interface Genres {
  id: string
  name: string
}

interface Results {
  id: string
  key: string
}

export interface Video {
  results: Results[]
}
