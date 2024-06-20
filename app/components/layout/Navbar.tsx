"use client";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import Logo1 from "@/public/assets/image/navbar-logo1.png";
import { useState } from "react";
import { Home } from "../sections/Home";

export const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <section className="bg-black sm:flex w-full hidden">
        <div className="container max-w-[1440px] mx-auto  ">
          {/* Nav */}
          <nav className="flex-wrap lg:flex items-center xl:relative z-10 px-2 lg:px-0 ">
            <div className="flex items-center  justify-between  lg:mb-0">
              <Image src={Logo1} alt="Logo img" className="h-40  w-60 " />

              <div className="flex w-full  justify-end items-center ml-auto">
                <button
                  className="lg:hidden  h-11 px-6 items-center   block  border-2 border-primary-600 rounded-lg font-semibold
                 text-primary-600 text-lg hover:bg-primary-600 hover:text-white transition ease-linear duration-500"
                >
                  Quotes
                </button>
                <button
                  className="lg:hidden w-10 h-10 ml-2 flex items-center justify-center text-primary-600 border border-primary-600 rounded-md"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <FeatherIcon icon="menu"></FeatherIcon>
                </button>
              </div>
            </div>
            <ul
              className={` ${
                navbarOpen ? "flex" : "hidden"
              } lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16`}
            >
              <li className="font-semibold text-primary-500 text-lg hover:text-primary-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Home</a>
              </li>

              <li className="font-semibold text-primary-500 text-lg hover:text-primary-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Services</a>
              </li>

              <li className="font-semibold text-primary-500 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Contact</a>
              </li>

              <li className="font-semibold text-primary-500 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">About</a>
              </li>
            </ul>
            <button
              className=" hidden lg:block  h-11 px-6 items-center  border-2 border-primary-600 rounded-lg font-semibold
                 text-primary-600 text-lg hover:bg-primary-600 hover:text-white transition ease-linear duration-500"
            >
              Quotes
            </button>
          </nav>
        </div>
      </section>
      <section className="sm:hidden">
        <ul
          className={` flex  items-center lg:mx-auto  w-full  justify-between bg-black p-3`}
        >
          <li className="font-semibold text-primary-500 text-lg hover:text-primary-400 transition ease-in-out duration-300">
            <a href="#">Home</a>
          </li>

          <li className="font-semibold text-primary-500 text-lg hover:text-primary-400 transition ease-in-out duration-300">
            <a href="#">Services</a>
          </li>

          <li className="font-semibold text-primary-500 text-lg hover:text-gray-400 transition ease-in-out duration-300">
            <a href="#">Contact</a>
          </li>

          <li className="font-semibold text-primary-500 text-lg hover:text-gray-400 transition ease-in-out duration-300">
            <a href="#">About</a>
          </li>
          <li>
            <button
              className="lg:hidden  h-11 px-3 items-center   block  border-2 border-primary-600 rounded-lg font-semibold
                 text-primary-600 text-lg hover:bg-primary-600 hover:text-white transition ease-linear duration-500"
            >
              Quotes
            </button>
          </li>
        </ul>
        <div className="w-full flex justify-center py-3">
          <Image src={Logo1} alt="Logo img" className="h-32  w-56 " />
        </div>
      </section>
    </>
  );
};
