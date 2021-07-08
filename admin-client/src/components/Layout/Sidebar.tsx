import React from "react";
import { FaListUl, FaRegComment, FaRegGem } from "react-icons/fa";

import NavItem from "./NavItem";
import { SidebarContextProvider } from "./SidebarContext";

export default function Sidebar() {
  return (
    <SidebarContextProvider>
      <div className="h-full w-64 bg-white shadow-md fixed p-8">
        <h1 className="font-semibold text-center">.ID Admin</h1>
        <nav className="flex flex-col gap-3 mt-10">
          <NavItem
            index={0}
            icon={<FaRegGem />}
            label="Rozetler"
            subItems={[
              { name: "Tüm Rozetler", href: "/badges" },
              { name: "Rozet Girişi", href: "/badges/entry" },
              { name: "Rozet Düzenleme", href: "/badges/edit" },
            ]}
          />
          <NavItem
            index={1}
            icon={<FaListUl />}
            label="Sıralamalar"
            subItems={[
              { name: "Tüm Sıralamalar", href: "/ranks" },
              { name: "Yeni Sıralama Oluştur", href: "/ranks/add" },
            ]}
          />
          <NavItem
            index={2}
            icon={<FaRegComment />}
            label="Yorumlar"
            href="/comments"
          />
        </nav>
      </div>
    </SidebarContextProvider>
  );
}
