"use client";

import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Nav2 = () => {
  return (
    <nav className="max-w-full bg-[#0D0D0D] mx-auto py-5 md:px-7 px-4">
      <div className="pb-3">
        {/* <h1 className="font-[700] hidden lg:block text-center text-[34px] leading-[34px]">
          <span className="text-textp">Food</span>tuck
        </h1> */}
      </div>

      <div className="flex justify-between max-w-[1320px] mx-auto">
        <h1 className="font-[700] hidden lg:block text-center text-[34px] leading-[34px]">
          <span className="text-textp">Food</span><span className="text-[#FF9F0D]"> tuck</span>
        </h1>

        <div className="flex justify-between  items-center">
          <ul className="lg:flex items-center gap-x-7  hidden">
            <li className="text-yellow-500">
              <Link href={"/"}>Home</Link>
            </li>
            <li className=" hover:text-yellow-500">
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li className=" hover:text-yellow-500">
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className=" hover:text-yellow-500">
            <Link href={"/FAQ"}>Faq</Link>

            </li>
            <li className="flex items-center hover:text-yellow-500">
              <Link href={"/about"}>About</Link>
              <IoIosArrowDown />
            </li>
            <li className=" hover:text-yellow-500">
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li className=" hover:text-yellow-500">
            <Link href={"/newmenu"}>New-Menu</Link>
            </li>
            <li className=" hover:text-yellow-500">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className=" flex items-center gap-2 ">
          <div className="flex gap-3 items-center">
            <IoSearch size={25} className=" text-white w-6 lg:block hidden" />
            <Link href={"/signin"}>
              <UserIcon className=" text-white w-6 lg:block hidden" />
            </Link>
            <Link href={"/shopingCart"}>
              <ShoppingBagIcon className="text-white w-6 lg:block hidden" />
            </Link>
          </div>
          <div>
            <Sheet>
              <SheetTrigger>
                <div>
                  <Bars3Icon className="text-white w-6 ml-1 lg:hidden block" />
                </div>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-20">
                  <div className="flex justify-center items-center gap-5 mb-10">
                    <Link href={"/shopingCart"}>
                      <ShoppingBagIcon className=" w-10" />
                    </Link>
                    <Link href={"/signin"}>
                      <UserIcon className=" text-black w-9 " />
                    </Link>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search.."
                        className=" w-full outline-none rounded-3xl md:px-6 px-2 py-2 border-[1px] border-black"
                      />
                      <IoSearch className="absolute top-2 right-4 text-2xl" />
                    </div>
                  </div>
                  <ul className="flex flex-col text-xl gap-7">
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/menu"}>Menu</Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>Blog</Link>
                    </li>
                    <li>
                    <Link href={"/FAQ"}>Faq</Link>

                    </li>
                    <li className="flex items-center">
                      <Link href={"/about"}>About</Link>
                      <IoIosArrowDown />
                    </li>
                    <li>
                      <Link href={"/shop"}>Shop</Link>
                    </li>
                    <li>
                    <Link href={"/newmenu"}>New-Menu</Link>
                    </li>
                    <li>
                      <Link href={'/contact'}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
