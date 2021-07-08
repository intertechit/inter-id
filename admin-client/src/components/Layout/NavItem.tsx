import React, { ReactNode, useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

import { SidebarContext } from "./SidebarContext";

interface SubItem {
  name: string;
  href: string;
}

interface NavItemProps {
  icon?: ReactNode;
  subItems?: SubItem[];
  label: string;
  index: number;
  href?: string;
}

export default function NavItem({
  label,
  icon,
  subItems,
  index,
  href,
}: NavItemProps) {
  const { activeDropdown, setActiveDropdown } = useContext(SidebarContext);

  if (subItems) {
    return (
      <div>
        <button
          className={`flex items-center w-full gap-3 text-gray-500 hover:text-black hover:bg-gray-100 rounded-md p-3 transition-all`}
          onClick={() => {
            activeDropdown === index
              ? setActiveDropdown(-1)
              : setActiveDropdown(index);
          }}
        >
          {icon}
          <span>{label}</span>
          {subItems ? (
            <FiChevronDown
              className={`ml-auto transition-transform ${
                activeDropdown === index ? "transform rotate-180" : ""
              }`}
            />
          ) : null}
        </button>
        {subItems ? (
          <div
            className={`overflow-hidden transition-max-height ${
              activeDropdown === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="py-3 px-5 flex flex-col gap-5">
              {subItems.map((item, index) => (
                <Link
                  to={item.href}
                  key={index}
                  className="text-gray-500 no-underline cursor-pointer hover:text-blue-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <Link
      to={href || "/"}
      className={`flex items-center w-full gap-3 no-underline cursor-pointer text-gray-500 hover:text-black hover:bg-gray-100 rounded-md p-3 transition-all`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
