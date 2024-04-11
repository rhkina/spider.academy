import BigLogo from "@/components/global/big-logo";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import PricingCard from "@/components/global/pricing-card";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constants";
import { HiCheck } from "react-icons/hi";
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
        <section className="mb-12 mt-16 h-fit">
          <h1
            className="mb-4 text-balance text-center font-sans 
                text-4xl font-bold md:mb-6 md:text-5xl"
          >
            Choose the plan that fits you best
          </h1>
          <div className="container m-auto grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              className="h-full min-w-56 max-w-80 justify-self-center"
              title="Hobby"
              price={0}
              buttonLabel="Get Started Now"
            >
              <h3 className="mt-1 text-base font-semibold">Key Features</h3>
              <ul className="list-none gap-10">
                <li>
                  <HiCheck className="inline-block" /> One course
                </li>
                <li>
                  <HiCheck className="inline-block" /> E-mail support
                </li>
              </ul>
            </PricingCard>
            <PricingCard
              title="Pro"
              className="h-full min-w-56 max-w-80 justify-self-center"
              price={20}
              bestChoice={true}
              buttonLabel="Get Started Now"
            >
              <h3 className="mt-1 text-base font-semibold">Key Features</h3>
              <ul className="list-none gap-10">
                <li>
                  <HiCheck className="inline-block" /> Ten courses
                </li>
                <li>
                  <HiCheck className="inline-block" /> Marketing support
                </li>

                <li>
                  <HiCheck className="inline-block" /> Chat support
                </li>
              </ul>
            </PricingCard>
            <PricingCard
              title="Business"
              className="h-full min-w-56 max-w-80 justify-self-center"
              price={50}
              buttonLabel="Get Started Now"
            >
              <h3 className="mt-1 text-base font-semibold">Key Features</h3>
              <ul className="list-none gap-10">
                <li>
                  <HiCheck className="inline-block" /> Unlimited courses
                </li>
                <li>
                  <HiCheck className="inline-block" /> Marketing support
                </li>
                <li>
                  <HiCheck className="inline-block" /> Chat & video chat support
                </li>
              </ul>
            </PricingCard>
          </div>
        </section>
      </MaxWidthWrapper>
      <section className="h-full"></section>
    </>
  );
}
