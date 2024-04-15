import React from "react";

type Props = { children: React.ReactNode };

function Layout({ children }: Props) {
  return (
    <div
      className="h-screen overflow-scroll border-l-[1px]
  border-t-[1px] border-muted-foreground/20 pb-20"
    >
      {children}
    </div>
  );
}

export default Layout;
