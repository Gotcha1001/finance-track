import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gradient-background2 ">
      {children}
    </div>
  );
}

export default layout;
