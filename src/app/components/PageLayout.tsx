import Nav from "./Nav";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  pageName: string;
}

export default function PageLayout({ children, pageName }: PageLayoutProps) {
  return (
    <div className="bg-white border-2 flex min-h-[100svh] w-screen flex-col overflow-x-clip px-[clamp(1.25rem,4vw,12rem)] py-[clamp(6.5rem,7vh,9rem)]" data-name={pageName}>
      <div className="mx-auto flex w-[75vw] max-w-5xl flex-1 min-h-0 flex-col gap-8" data-name="body">
        <Nav />
        {children}
      </div>
    </div>
  );
}

