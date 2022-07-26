import { FilmSlate, MagnifyingGlass } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <header className="bg-blue-400 ">
      <div className="mx-auto max-w-[1645px] p-8">
        <div className="flex  items-center justify-between md:flex-col">
          <Link to="/" className="mb-4 flex items-center justify-center ">
            <FilmSlate className="animate-pulse text-3xl text-cyan-400 transition-colors hover:text-cyan-700" />
            <h1 className="font-source text-3xl font-bold text-white">
              Top
              <span className="text-cyan-400 transition-colors hover:text-cyan-700">
                Movies
              </span>
            </h1>
          </Link>
          <form
            onSubmit={handleSubmit}
            className="relative flex h-14 w-full max-w-[500px]   items-center  "
          >
            <input
              type="text"
              placeholder="Procure por um filme"
              className=" h-full w-full  rounded border border-blue-700 bg-blue-600 px-4 py-3 text-lg text-white  placeholder:font-source placeholder:font-bold placeholder:text-blue-300 focus:outline-none focus:ring focus:ring-blue-600"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              aria-label="Botão buscar filme"
              type="submit"
              className="absolute right-0 flex h-full w-14 flex-1 items-center justify-center rounded-r border border-blue-700 bg-cyan-400 transition-colors hover:bg-cyan-600 hover:text-cyan-400"
            >
              <MagnifyingGlass className="text-2xl  " />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
