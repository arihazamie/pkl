"use client";
import Link from "next/link";
import MenuMobile from "./mobile_menu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setInterval(() => {
      const storedToken = localStorage.getItem("token");
      const storedName = localStorage.getItem("name");

      if (storedToken && storedName) {
        setToken(storedToken);
        setName(storedName);
      }
    });
  }, [token, name]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken("");
    setName("");
  };

  return (
    <div className="grid bg-black/50 text-Headline justify-center text-center items-center content-center mt-8 px-16 rounded-3xl shadow-md md:mx-[15%] 2xl:mx-[15%]">
      <nav className="flex md:py-7 md:space-x-28 space-x-36">
        <div className="font-bold 2xl:text-5xl md:text-4xl text-3xl cursor-pointer hover:text-Button">
          <Link href={"/"}>SiskaMart</Link>
        </div>
        <div className="hidden md:flex md:space-x-8 space-x-2 md:mt-2 2xl:mt-4 2xl:text-xl">
          <div className="space-x-10 font-bold">
            <Link
              href="/income"
              className="hover:text-Button hover:bg-Button/20 p-1 rounded-[6px]">
              Income
            </Link>
            <Link
              href="/expenditure"
              className="hover:text-Button hover:bg-Button/20 p-1 rounded-[6px]">
              Expenditure
            </Link>
            <Link
              href="/financial"
              className="hover:text-Button hover:bg-Button/20 p-1 rounded-[6px]">
              Financial
            </Link>
          </div>
          <div>
            {token ? (
              <button
                className="-mt-2 p-1 py-2 rounded-xl shadow-md font-bold bg-Button text-ButtonText hover:bg-Button/20 hover:text-Button"
                onClick={() => handleLogout()}>
                LogOut
              </button>
            ) : (
              <Link
                href="/login"
                className="p-3 py-2 rounded-xl shadow-md font-bold bg-Button text-ButtonText hover:bg-Button/20 hover:text-Button">
                Login
              </Link>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <MenuMobile />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
