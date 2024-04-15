import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  title: string
  className: string
}

const PageNavbar = (props: Props) => {
  return (
    // <div className="relative flex flex-col gap-4">
    <div
      className={cn(
        'flex items-center border-b bg-background/40 px-4 py-2',
        props.className
      )}
    >
      <h1 className="text-2xl font-semibold backdrop-blur-lg">{props.title}</h1>
    </div>
    // </div>
  )
}

export default PageNavbar
