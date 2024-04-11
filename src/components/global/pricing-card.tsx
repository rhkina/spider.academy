"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

type PricingCardProps = {
  title: string;
  subtitle?: string;
  price: number;
  buttonLabel: string;
  bestChoice?: boolean;
  className?: string;
  children?: React.ReactNode;
};
const PricingCard = ({
  title,
  subtitle,
  price,
  buttonLabel,
  bestChoice,
  className,
  children,
}: PricingCardProps) => {
  return (
    <Card
      className={cn(
        bestChoice
          ? "z-[49] w-[300px] border-2 border-card-foreground shadow-lg"
          : "z-[49] w-[300px]",
        "flex w-full max-w-screen-sm flex-grow flex-col items-start justify-center",
        className,
      )}
    >
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="inline-block text-4xl font-semibold">
            {price === 0 ? "Free" : "$" + price}
          </div>
          <div className="inline-block">/month</div>
        </form>
        <div className="mt-4">{children}</div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Button className={bestChoice ? "p-6 font-semibold" : ""}>
            {buttonLabel}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default PricingCard;
