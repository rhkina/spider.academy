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
  description?: string;
  price: number;
  buttonLabel: string;
  mostPopular?: boolean;
  planList?: string[];
  className?: string;
};
const PricingCard = ({
  title,
  description,
  price,
  buttonLabel,
  mostPopular,
  className,
}: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "z-[49] w-[320px]",
        mostPopular ? "border-2 border-accent-foreground" : "",
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl">
          {price === 0 ? "FREE" : "$ " + price + "/month"}
        </h2>
        <form>
          <div className="grid w-full items-center gap-[8px]">
            <div className="flex flex-col space-y-[8px]"></div>
            <div className="flex flex-col space-y-[8px]"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>{buttonLabel}</Button>
      </CardFooter>
    </Card>
  );
};
export default PricingCard;
