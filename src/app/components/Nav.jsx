"use client";
import React, { useState } from "react";

import LicenseSection from "./LicenseSection";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between px-6 py-2 max-w-[1200px] mx-auto w-full items-center border-b-slate-600 border-b">
      <div className="">
        <h2 className="text-lg font-bold">Wallet Stealer by Hack world</h2>
      </div>

      <button
        className="p-3 text-white border rounded-lg border-slate-600"
        onClick={handleClick}
      >
        {isOpen ? (
          <i class="fa-solid fa-chevron-down"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </button>
      {isOpen ? (
        <div className="absolute z-10 w-2/5 p-3 transition-all border border-gray-600 rounded-lg bg-slate-600 bg-opacity-15 border-opacity-20 backdrop-blur-lg top-20 right-5 ">
          <ul className="w-full list-none ">
            <li className="p-2 rounded-md hover:bg-gray-600 hover:bg-opacity-30">
              <a href="/" className="">
                Dashboard
              </a>
            </li>
          </ul>
          <img
            className="w-12 h-12 my-2 border rounded-full border-zinc-200"
            src="data:image/jpeg;base64,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"
            alt=""
          />

          <LicenseSection />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Nav;
