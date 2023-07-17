"use client";

import React, { useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { BsMoonFill } from "react-icons/Bs";
import { useTheme } from "next-themes";

const DarkModsSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounte
  }, [])
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsMoonFill
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkModsSwitch;
