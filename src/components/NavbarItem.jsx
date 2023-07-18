"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
// https://api.themevoiedb.org/3/trending/movie/week?api_key=%3C%3Capi_key%3E%3E