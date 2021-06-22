import { ReactNode } from "react";

import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function index({ children }: LayoutProps) {
  return (
    <div id="xp-container">
      <Sidebar />

      <div className="xp-rightbar">
        <div className="xp-contentbar">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
