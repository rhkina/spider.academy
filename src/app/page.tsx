import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampEffect } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import PricingCard from "@/components/global/pricing-card";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constants";
import { slackey } from "@/lib/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="relative flex  h-screen w-full  flex-col items-center !overflow-visible rounded-md bg-background  antialiased">
        <div className="mt-[100px] flex flex-col md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src="/animated-logo.gif"
                    width={100}
                    height={100}
                    alt="logo"
                  />

                  <span
                    className={`${slackey.className} text-primary-background mb-10 mt-10 text-3xl`}
                  >
                    Spider.academy
                  </span>
                </div>
                <Button
                  size={"lg"}
                  className="mb-8 flex items-center 
                  justify-center rounded-full bg-primary px-10 py-8 text-xl"
                >
                  Start For FREE
                </Button>

                <h1
                  className="mb-[-20px] text-balance  font-sans text-5xl 
                font-bold  md:mb-5 md:text-6xl"
                >
                  Learning is meant to be fun
                </h1>
              </div>
            }
          >
            <Image
              src={`/temp-banner.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto h-full rounded-2xl object-cover object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          className="mt-[-100px] md:mt-[18rem]"
          items={clients}
          direction="right"
          speed="slow"
        />
      </div>
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mb-[200px] mt-[-200px] h-fit">
        <LampEffect className="text-4xlmd:text-6xl mt-[-100px] pb-10 font-bold">
          Plans that <br /> fit you best
        </LampEffect>
        <div
          className="-mt-72 flex flex-col flex-wrap items-center 
        justify-center gap-8 md:flex-row"
        >
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </section>
      <section className="h-full"></section>
    </main>
  );
}
