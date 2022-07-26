import { CircleNotch } from 'phosphor-react'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-8 px-4 text-lg text-white">
      <CircleNotch size={50} color="#22CABE" className="mr-3 animate-spin " />
      Carregando...
    </div>
  )
}

export default Loading
