import { createContext, ReactNode, useState } from "react";
import React from "react";

const useValue = () => {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  return { activeDropdown, setActiveDropdown };
};

export const SidebarContext = createContext({} as ReturnType<typeof useValue>);

interface SidebarContextProviderProps {
  children: ReactNode;
}

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  return (
    <SidebarContext.Provider value={useValue()}>
      {children}
    </SidebarContext.Provider>
  );
}
