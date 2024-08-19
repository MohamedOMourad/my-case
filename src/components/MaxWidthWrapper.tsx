import { cn } from "@/lib/utils";
import React from "react";

type PropsI = {
  className?: string;
  children: React.ReactNode;
};
const MaxWidthWrapper = ({ className, children }: PropsI) => {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
