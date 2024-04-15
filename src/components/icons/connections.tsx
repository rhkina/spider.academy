import clsx from "clsx";
import React from "react";

type Props = { selected: boolean };

function Connections({ selected }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          "fill-[#BABABA] transition-all group-hover:fill-[#999999] dark:fill-[#4b4b4b] dark:group-hover:fill-[#c2c2c2]",
          { "fill-[#2b2b2b] dark:!fill-[#b3b3b3] ": selected },
        )}
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          "fill-[#BABABA] transition-all group-hover:fill-[#969696] dark:fill-[#474747] dark:group-hover:fill-[#c9c9c9]",
          { "fill-[#dddddd] dark:!fill-[#b9b9b9] ": selected },
        )}
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          "fill-[#BABABA] transition-all group-hover:fill-[#9e9e9e] dark:fill-[#414141] dark:group-hover:fill-[#C8C7FF]",
          { "fill-[#dddddd] dark:!fill-[#c7c7c7] ": selected },
        )}
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          "fill-[#2b2b2b] transition-all group-hover:fill-[#a0a0a0] dark:fill-[#c4c4c4] dark:group-hover:fill-[#6e6e6e] ",
          { "fill-[#dddddd] dark:!fill-[#666666] ": selected },
        )}
      />
    </svg>
  );
}

export default Connections;
