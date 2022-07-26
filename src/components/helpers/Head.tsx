import React from 'react'

type Props = {
  title: string
}

const Head = ({ title }: Props) => {
  React.useEffect(() => {
    document.title = title + ' | TopMovies'
  }, [title])

  return <></>
}

export default Head
