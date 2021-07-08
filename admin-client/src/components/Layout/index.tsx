import React, { ReactNode } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-64 flex flex-col h-full">
        <Header />
        <div className="p-8 flex-1">{children}</div>
        <footer className="w-full flex items-center justify-center p-5 text-black border-t">
          <span className="font-semibold">© Intertech 2021</span>
        </footer>
      </div>
    </>
  );
}
