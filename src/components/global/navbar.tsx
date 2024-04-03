import React from 'react'
import Image from 'next/image'
import { slackey } from '@/lib/fonts'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { Button } from '../ui/button'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {}
const Navbar = async (props: Props) => {
  return (
    <header
      className='fixed right-0 left-0 top-0 py-2 px-4 bg-background/40
    backdrop-blur-lg z-[50] flex items-center border-b-[1px] border-gray-700/50 
    justify-between'
    >
      <aside className='flex items-center gap-[6px]'>
        <Image
          src={'/logo.svg'}
          width={40}
          height={40}
          alt='logo'
          className='shadow-sm hidden dark:block'
        />
        <Image
          src={'/logo-light.svg'}
          width={30}
          height={30}
          alt='logo'
          className='shadow-sm block dark:hidden'
        />
        <p className={`${slackey.className} text-xl text-primary-background`}>
          Spider
        </p>
      </aside>
      <nav
        className='absolute left-[50%] top-[50%] transform translate-x-[-50%] 
      translate-y-[-50%] hidden md:block'
      >
        <ul className='flex items-center list-none'>
          <li>
            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'rounded-full'
              )}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'rounded-full'
              )}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'rounded-full'
              )}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'rounded-full'
              )}
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'rounded-full'
              )}
            >
              Info
            </Link>
          </li>
        </ul>
      </nav>
      <aside className='flex items-center gap-4'>
        <Link
          href='#'
          className={cn(buttonVariants({ variant: 'ghost' }), 'rounded-full')}
        >
          {
            // WIP: Wire up user
            false ? 'Dashboard' : 'Get Started'
          }
        </Link>
        <ModeToggle />

        {
          // WIP: Wire up user
        }

        <MenuIcon className='md:hidden' />
      </aside>
    </header>
  )
}

export default Navbar
