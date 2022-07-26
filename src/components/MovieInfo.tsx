import React, { ReactElement } from 'react'

type Props = {
  icon: ReactElement<string>
  label: string
  span: string | number | string[]
}

const MovieInfo = ({ icon, label, span }: Props) => {
  return (
    <li className="relative flex  items-center gap-2 border-b border-cyan-400 pt-4 pb-2 font-bold text-white last-of-type:border-b-0">
      {icon} {label}:{' '}
      <span className="flex break-all font-sans font-bold text-neutral-300 sm:text-xs">{`${span}`}</span>
    </li>
  )
}

export default MovieInfo
