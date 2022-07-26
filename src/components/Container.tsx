import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-[1645px] p-8 md:p-4 sm:px-4 ">{children}</div>
  )
}

export default Container
