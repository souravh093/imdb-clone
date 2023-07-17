import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/Ai";
import { BsInfoCircleFill } from "react-icons/Bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItems title={"Home"} path={"/"} Icon={AiFillHome} />
        <MenuItems title={"About"} path={"/about"} Icon={BsInfoCircleFill} />
      </div>
      <div>
        <Link href={"/"}>
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
