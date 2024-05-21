import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import Logo1 from "@/public/assets/image/navbar-logo1.png";
import { useState } from "react";
import { Home } from "../sections/Home";

export const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <section className="bg-white mb-20 md:mb-52 xl:mb-72">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Nav */}
        <nav className="flex-wrap lg:flex items-center py-14 xl:relative z-10">
          <div className="flex items-center justify-between mb-10 lg:mb-0">
            <Image
              src={Logo1}
              alt="Logo img"
              className="w-36 md:w-40 lg:w-full"
            />

            <button
              className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-primary-600 border border-primary-600 rounded-md"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FeatherIcon icon="menu"></FeatherIcon>
            </button>
          </div>

          <ul
            className={` ${
              navbarOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16`}
          >
            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Landing</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Pages</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Contact</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">About</a>
            </li>
          </ul>

          <button
            className={` ${
              navbarOpen ? "flex" : "hidden"
            }  px-5 py-3 lg:block border-2 border-primary-600 rounded-lg font-semibold
                 text-primary-600 text-lg hover:bg-primary-600 hover:text-white transition ease-linear duration-500 `}
          >
            Request quote
          </button>
        </nav>
      </div>
      <div className="flex justify-around w-full">
      <Home />
      </div>
    </section>
  );
};
