'use client'

import Link from 'next/link'
import Image from 'next/image'
import { slackey } from '@/lib/fonts'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { menuOptions } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import { ModeToggle } from '../global/mode-toggle'

type Props = {}

const Sidebar = (props: Props) => {
  const pathName = usePathname()
  return (
    <nav
      className="flex h-screen flex-col items-center justify-between 
    gap-10 overflow-scroll bg-background px-2 py-4"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <Link href="/" className="">
          <div className="flex items-center">
            <Image
              src={'/logo-dark.svg'}
              width={40}
              height={40}
              alt="logo"
              className="hidden dark:block"
            />
            <Image
              src={'/logo-light.svg'}
              width={40}
              height={40}
              alt="logo"
              className="block dark:hidden"
            />
            {/*
            <p
              className={`${slackey.className} text-primary-background text-xl`}
            >
              Spider
            </p>
  */}
          </div>
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={cn(
                        'group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-[3px]',
                        {
                          'bg-foreground/50 ': pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component selected={pathName === menuItem.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-background backdrop-blur-xl">
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className="flex h-56 flex-col items-center gap-9 overflow-scroll rounded-full border-[1px] px-2 py-4 dark:bg-background/30">
          <div className="relative rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-t-[#353346] dark:bg-[#353346]/70">
            <LucideMousePointerClick className="size={18} dark:text-foreground" />
            <div className="absolute -bottom-[30px] left-1/2 h-6 translate-x-[-50%] transform border-l-2 border-muted-foreground/50 " />
          </div>
          <div className="relative rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-t-[#353346] dark:bg-[#353346]/70">
            <GitBranch className="size={18} dark:text-foreground" />
            <div className="absolute -bottom-[30px] left-1/2 h-6 translate-x-[-50%] transform border-l-2 border-muted-foreground/50 " />
          </div>
          <div className="relative rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-t-[#353346] dark:bg-[#353346]/70">
            <Database className="size={18} dark:text-foreground" />
            <div className="absolute -bottom-[30px] left-1/2 h-6 translate-x-[-50%] transform border-l-2 border-muted-foreground/50 " />
          </div>
          <div className="relative rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-t-[#353346] dark:bg-[#353346]/70">
            <GitBranch className="size={18} dark:text-foreground" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Sidebar
