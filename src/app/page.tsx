import { HeroParallax } from '@/components/global/connect-parallax'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'
import { LampEffect } from '@/components/global/lamp'
import Navbar from '@/components/global/navbar'
import PricingCard from '@/components/global/pricing-card'
import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constants'
import { slackey } from '@/lib/fonts'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className='h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased'>
        <div className='absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]'></div>
        <div className='flex flex-col mt-[100px] md:mt-[-50px]'>
          <ContainerScroll
            titleComponent={
              <div className='flex items-center flex-col'>
                <div className='flex items-center gap-3'>
                  <Image
                    src='/logo.svg'
                    width={60}
                    height={60}
                    alt='logo'
                    className='shadow-sm'
                  />

                  <span
                    className={`${slackey.className} text-3xl mt-10 mb-10 text-white`}
                  >
                    Spider.academy
                  </span>
                </div>
                <Button
                  size={'lg'}
                  className='p-8 mb-8 text-2xl w-fit border-t-2 
                  rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white 
                  group transition-all flex items-center justify-center gap-4 
                  hover:shadow-xl hover:shadow-neutral-500 duration-500'
                >
                  <span
                    className='bg-clip-text text-transparent bg-gradient-to-r
                   from-neutral-500 to-neutral-600  md:text-center font-sans 
                   group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black'
                  >
                    Start For FREE
                  </span>
                </Button>

                <h1
                  className='text-5xl text-balance md:text-6xl  bg-clip-text 
                text-transparent bg-gradient-to-b from-white to-neutral-600 
                font-sans font-bold mb-[-20px] md:mb-5'
                >
                  Learning is meant to be fun
                </h1>
              </div>
            }
          >
            <Image
              src={`/temp-banner.png`}
              alt='hero'
              height={720}
              width={1400}
              className='mx-auto rounded-2xl object-cover h-full object-left-top'
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <div className='flex items-center flex-col'>
        <InfiniteMovingCards
          className='md:mt-[18rem] mt-[-100px]'
          items={clients}
          direction='right'
          speed='slow'
        />
      </div>
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className='mt-[-200px] mb-[200px] h-fit'>
        <LampEffect className='text-4xlmd:text-6xl font-bold mt-[-100px] pb-10'>
          Plans that <br /> fit you best
        </LampEffect>
        <div
          className='flex flex-wrap items-center justify-center flex-col 
        md:flex-row gap-8 -mt-72'
        >
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </section>
      <section className='h-full'></section>
    </main>
  )
}
