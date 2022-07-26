import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import { MovieProvider } from 'contexts/MovieContext'
import Movie from 'pages/Movie'
import Search from 'pages/Search'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <MovieProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </MovieProvider>
)
