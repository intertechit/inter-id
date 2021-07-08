import React from "react";
import { FiLogOut } from "react-icons/fi";

import Button from "../Button";
import Input from "../Input";

export default function Header() {
  return (
    <header className="px-8 py-4 border-b flex">
      <Input type="text" className="w-1/2 mx-auto" placeholder="Ara" />
      <div className="ml-auto flex items-center gap-5">
        <span className="font-semibold text-lg">Talat Artun Çolak</span>
        <Button type="danger" className="flex items-center gap-3">
          Çıkış Yap <FiLogOut />
        </Button>
      </div>
    </header>
  );
}
