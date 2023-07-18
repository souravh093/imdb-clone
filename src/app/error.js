"use client";
import React from "react";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <button onClick={() => reset()} className="rounded-lg mt-3 border px-5 py-2 border-amber-600 hover:bg-amber-500 hover:text-white">Try Again</button>
    </div>
  );
};

export default Error;
