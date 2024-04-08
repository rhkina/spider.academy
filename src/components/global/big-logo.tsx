import { slackey } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

const BigLogo = () => {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src={"/spider-animated-dark.gif"}
        width={100}
        height={100}
        alt="logo"
        className="hidden dark:block"
        unoptimized
      />
      <Image
        src={"/spider-animated-light.gif"}
        width={100}
        height={100}
        alt="logo"
        className="block dark:hidden"
        unoptimized
      />

      <span className={`${slackey.className} text-primary-background text-3xl`}>
        Spider.academy
      </span>
    </div>
  );
};

export default BigLogo;
