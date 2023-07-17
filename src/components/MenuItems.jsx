import Link from "next/link";
import React from "react";

const MenuItems = ({ title, path, Icon }) => {
  return (
    <div>
      <Link className="mx-4 lg:mx-6 hover:text-amber-600" href={path}>
        <Icon className="text-2xl sm:hidden mx-4 lg:mx-6" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItems;
