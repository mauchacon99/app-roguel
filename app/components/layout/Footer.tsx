import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import Image2 from "@/public/assets/image/navbar-logo1.png"


export const Footer = () => {
  return (
    <footer  className="bg-white py-10 md:py-16 ">
      <input   id="footer" />
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <div className="flex justify-center lg:justify-start mb-5">
              <Image src={Image2} alt="Logo img" className="h-60 w-80" />
            </div>

            <p className="font-light text-gray-400 text-xl mb-10">
              Get your dream house with <br /> D’house
            </p>

            {/* <div className="flex items-center justify-center lg:justify-start space-x-5">
              <a
                href="#"
                className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-primary-800 hover:text-white transition ease-in-out duration-500"
              >
                <FeatherIcon icon="facebook" />
              </a>

              <a
                href="#"
                className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-primary-800 hover:text-white transition ease-in-out duration-500"
              >
                <FeatherIcon icon="twitter" />
              </a>

              <a
                href="#"
                className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-primary-800 hover:text-white transition ease-in-out duration-500"
              >
                <FeatherIcon icon="linkedin" />
              </a>
            </div> */}
          </div>

          {/* <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-900 text-2xl mb-6">
              Sitemap
            </h4>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Home
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Features
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Gallery
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Testimoni
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Book a meeting
            </a>
          </div>

          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-900 text-2xl mb-6">
              Landing
            </h4>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Mobile App
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Property
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Personal Website
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Web Developer
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Online Course
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Donation
            </a>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="font-semibold text-gray-900 text-2xl mb-6">
              Utility
            </h4>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              FAQ
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              Terms & Conditions
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
