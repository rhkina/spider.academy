import React from "react";

type Props = {
  title: string;
};

const PageNavbar = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1
        className="sticky top-0 z-[10] flex items-center border-b 
        bg-background/40 px-4 py-2 text-2xl font-semibold backdrop-blur-lg"
      >
        {props.title}
      </h1>
    </div>
  );
};

export default PageNavbar;
