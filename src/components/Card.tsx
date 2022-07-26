import { Link } from 'react-router-dom'
import Button from './Button'

interface MovieProps {
  id: string
  title: string
  poster_path: string
}

const imageUrl = import.meta.env.VITE_URL_IMAGE

const Card = ({ id, title, poster_path }: MovieProps) => {
  return (
    <li className="w-[291px] rounded-xl border-2 border-blue-900 bg-blue-700 shadow shadow-blue-900  transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-400   xs:w-[90%]">
      <Link
        className="flex h-full flex-col p-4 text-white "
        to={`/movie/${id} `}
      >
        <div className="h-full justify-start  ">
          {poster_path ? (
            <img
              className=" h-[361px] w-full rounded-md object-fill drop-shadow-lg sm:h-auto"
              src={imageUrl + poster_path}
              alt={title}
              width={255}
              height={361}
            />
          ) : null}
        </div>
        <h2 className="h-full py-3  text-center font-source text-base font-semibold">
          {title}
        </h2>
        <Button text="Mais Detalhes" />
      </Link>
    </li>
  )
}

export default Card
