import BigLogo from "@/components/global/big-logo";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampEffect } from "@/components/global/lamp";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import PricingCard from "@/components/global/pricing-card";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-6xl flex-col items-center py-20 text-center">
          <div className="flex flex-col ">
            <div className="flex flex-col items-center">
              <BigLogo />
              <Button
                size={"lg"}
                className="mb-10 mt-8 flex items-center justify-center 
                  rounded-full px-10 py-8 text-xl font-black"
              >
                Start for FREE
              </Button>

              <h1
                className="text-balance text-center font-sans 
                text-5xl font-bold md:mb-6 md:text-6xl"
              >
                Learning is meant to be fun
              </h1>
            </div>
            <Image
              src={"/temp-banner.png"}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto  w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-2 shadow-2xl md:p-6"
              draggable={false}
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="flex flex-col items-center bg-black/50">
        <InfiniteMovingCards
          className=""
          items={clients}
          direction="right"
          speed="slow"
        />
      </div>
      <MaxWidthWrapper>
        <section className="mb-12 mt-16 h-fit ">
          <h1
            className="mb-4 text-balance text-center font-sans 
                text-4xl font-bold md:mb-6 md:text-5xl"
          >
            Plans that fit you Better
          </h1>
          <div className="flex flex-auto flex-wrap items-center justify-center gap-8">
            <PricingCard
              title="Hobby"
              price={0}
              buttonLabel="Get Started Now"
            />
            <PricingCard title="Pro" price={20} buttonLabel="Get Started Now" />
            <PricingCard
              title="Business"
              price={50}
              buttonLabel="Get Started Now"
            />
          </div>
        </section>
      </MaxWidthWrapper>
      <section className="h-full"></section>
    </>
  );
}
