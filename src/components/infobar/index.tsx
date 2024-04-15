'use client'
import React, { useEffect } from 'react'
import { Book, Headphones, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '../ui/button'

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div
      className="flex w-full flex-row items-center justify-end gap-6 
    px-4 py-2 dark:bg-black "
    >
      <div className="flex h-10 items-center rounded-full bg-muted pl-4 pr-2">
        <div className="flex flex-row items-center gap-2">
          <Input
            placeholder="Quick Search"
            className="h-8 border-none bg-transparent px-2 py-0"
          />
          <Button type="submit" className="h-8 w-8 rounded-full p-2">
            <Search />
          </Button>
        </div>
      </div>

      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default InfoBar
