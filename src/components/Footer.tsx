import { Heart } from 'phosphor-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mx-auto flex h-28 w-full items-center justify-center bg-blue-400  px-4">
      <p className="flex items-center gap-1 text-lg font-bold text-white sm:text-base">
        Criado com <Heart weight="fill" color="#22CABE" /> por{' '}
        <a
          className="text-cyan-400 "
          href="https://github.com/Ariane-Brum"
          aria-label="Link para o meu Github"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Ariane Brum
        </a>
      </p>
    </footer>
  )
}

export default Footer
