"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import menuLogo from "../../../public/menu.png";
import Image from "next/image";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const HoverText =
    "hover:font-bold duration-300 transition-all hover:text-[14.5px]";

  return (
    <div className="flex lg:hidden ">
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon">
            <Image
              src={menuLogo}
              alt="menu"
              className="text-white"
            />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-Button">
          <div className="px-2 flex flex-col gap-4 ">
            <div className="flex items-center justify-center text-center gap-x-5">
              <div>
                <Link
                  href="/"
                  className="flex items-center font-bold text-3xl hover:text-MyPurple hover:transition-all hover:duration-300"
                  onClick={() => setIsOpen(false)}>
                  SiskaMart
                </Link>
                <div>
                  <div className="my-5">
                    <Link
                      href="/login"
                      className="p-3 py-2 shadow-md font-bold bg-ButtonText text-Headline hover:bg-Headline/90 hover:text-Button rounded-xl">
                      Login
                    </Link>
                  </div>
                  <div className="font-bold grid-cols-1 text-xl space-y-5">
                    <div>
                      <Link
                        href="/pengeluaran"
                        className="hover:underline">
                        Expenditure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/pendapatan"
                        className="hover:underline">
                        Income
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/keuangan"
                        className="hover:underline">
                        Financial
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
